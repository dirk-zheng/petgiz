export const categories = [
  { id: 'all', name: 'All products' },
  { id: 'harnesses', name: 'Pet harnesses' },
  { id: 'leashes', name: 'Dog leashes' },
  { id: 'pet-carriers', name: 'Pet carriers' },
  { id: 'cat-carriers', name: 'Cat carriers' },
  { id: 'pet-backpacks', name: 'Pet backpacks' },
  { id: 'travel-set', name: 'Pet travel sets' },
];

export const categoryNames = Object.fromEntries(categories.filter(({ id }) => id !== 'all').map(({ id, name }) => [id, name]));
