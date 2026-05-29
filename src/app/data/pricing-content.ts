export interface PricingGroup {
  title: string;
  note: string;
  featuredPrice: string;
  items: PricingItem[];
}

export interface PricingItem {
  name: string;
  price: string;
}

export const pricingGroups: PricingGroup[] = [
  {
    title: 'Furniture Assembly',
    note: '$90 per hour or fixed prices below',
    featuredPrice: 'From $39.99',
    items: [
      { name: 'Side chair', price: '$39.99' },
      { name: 'Office chair', price: '$44.99' },
      { name: 'Armchair', price: '$59.99' },
      { name: 'Dining table', price: '$59.99' },
      { name: 'Adjustable standing desk', price: '$79.99' },
      { name: 'Bed frame', price: '$84.99' },
      { name: 'Bed frame with drawers', price: '$84.99 + $14.99 per drawer' },
      { name: 'Bunk bed', price: 'From $199' },
      { name: 'Bunk bed with desk', price: 'From $199' },
      { name: 'Bunk bed with storage or cabinet', price: 'From $249.99' },
      { name: 'Murphy bed', price: 'From $449' },
      { name: 'Murphy bed with wardrobe', price: 'From $599' },
      { name: 'Bookcase', price: '$79' },
      { name: 'Dresser, 4 drawers', price: '$99' },
      { name: 'Dresser, 6 drawers', price: '$99' },
      { name: 'Dresser, 8 drawers', price: '$129' },
      { name: 'Shelving system installation', price: 'From $169' }
    ]
  },
  {
    title: 'TV Mounting',
    note: 'From $149.99 each',
    featuredPrice: 'From $149.99',
    items: [
      { name: 'Base mounting', price: '$149.99' },
      { name: 'TV larger than 60 inches', price: '$70' },
      { name: 'Wire concealment', price: '$49.99' },
      { name: 'Brick, stone, or concrete wall', price: '$49.99' }
    ]
  },
  {
    title: 'Kitchen & Bathroom Caulking',
    note: 'From $149.99',
    featuredPrice: 'From $149.99',
    items: [
      { name: 'Countertops, kitchen or bathroom', price: 'From $149.99' },
      { name: 'Showers', price: 'From $219.99' },
      { name: 'Bathtubs', price: 'From $199' }
    ]
  },
  {
    title: 'Door Repair',
    note: 'Labor only',
    featuredPrice: 'From $149.99',
    items: [{ name: 'Door repair', price: 'From $149.99' }]
  }
];
