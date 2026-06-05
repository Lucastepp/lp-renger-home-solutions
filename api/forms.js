const https = require('https');

const destinationEmail = 'hello@rengerhomesolutions.com';
const requestTimeoutMs = 10000;

function clean(value) {
  return String(value || '').trim();
}

function readBody(req) {
  if (req.body && typeof req.body === 'object') {
    return Promise.resolve(req.body);
  }

  if (req.body && typeof req.body === 'string') {
    return Promise.resolve(JSON.parse(req.body));
  }

  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', (chunk) => {
      raw += chunk;
    });

    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', reject);
  });
}

function validate(payload) {
  const type = clean(payload.type);
  const email = clean(payload.email);

  if (!['estimate', 'application'].includes(type)) {
    return 'Invalid form type.';
  }

  if (!clean(payload.name) || !email) {
    return 'Name and email are required.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'A valid email is required.';
  }

  if (type === 'estimate' && !clean(payload.message)) {
    return 'Project message is required.';
  }

  if (type === 'application' && (!clean(payload.specialty) || !clean(payload.yearsExperience) || !clean(payload.experience))) {
    return 'Specialty, years of experience, and experience details are required.';
  }

  return '';
}

function buildFormSubmitPayload(payload) {
  const isApplication = clean(payload.type) === 'application';
  const formType = isApplication ? 'Work application' : 'Client estimate request';
  const subject = isApplication
    ? `New work application from ${clean(payload.name) || 'Renger website'}`
    : `New estimate request from ${clean(payload.name) || 'Renger website'}`;

  const data = {
    'Form type': formType,
    name: clean(payload.name),
    email: clean(payload.email),
    phone: clean(payload.phone) || 'Not provided',
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
  };

  if (isApplication) {
    data.specialty = clean(payload.specialty);
    data.yearsExperience = clean(payload.yearsExperience);
    data.experience = clean(payload.experience);
  } else {
    data.budget = clean(payload.budget) || 'Not provided';
    data.message = clean(payload.message);
  }

  return data;
}

function postToFormSubmit(payload, siteOrigin) {
  const body = JSON.stringify(payload);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: 'formsubmit.co',
        path: `/ajax/${encodeURIComponent(destinationEmail)}`,
        method: 'POST',
        timeout: requestTimeoutMs,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Origin: siteOrigin,
          Referer: `${siteOrigin}/contact`,
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (response) => {
        let raw = '';

        response.on('data', (chunk) => {
          raw += chunk;
        });

        response.on('end', () => {
          let result = {};

          try {
            result = raw ? JSON.parse(raw) : {};
          } catch (error) {
            result = {};
          }

          resolve({
            ok: response.statusCode >= 200 && response.statusCode < 300,
            result,
            statusCode: response.statusCode,
          });
        });
      }
    );

    req.on('timeout', () => {
      req.destroy(new Error('The email service timed out.'));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const payload = await readBody(req);
    const validationError = validate(payload);

    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const siteOrigin = req.headers.origin || 'https://www.rengerhomesolutions.com';
    const { ok, result } = await postToFormSubmit(buildFormSubmitPayload(payload), siteOrigin);

    if (!ok || result.success === false || result.success === 'false') {
      return res.status(502).json({
        error: result.message || 'The email service could not send the form.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Could not send the form. Please try again.' });
  }
};
