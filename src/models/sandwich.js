// This is normally stored in a database
let sandwiches = [
  {
    id: 1,
    name: 'ham',
    breadType: 'rye',
    ingredients: ['ham', 'mayo', 'mustard', 'pickles', 'onions', 'tomato'],
  },
  {
    id: 2,
    name: 'pb&j',
    breadType: 'sourdough',
    ingredients: ['peanut butter', 'jam'],
  },
  {
    id: 3,
    name: 'blt',
    breadType: 'white',
    ingredients: ['bacon', 'lettuce', 'tomato'],
  },
];

export function listAllSandwiches() {
  return sandwiches;
}

export function createSandwich(sandwich) {
  sandwiches.push(sandwich);
}

export function updateSandwich(id, sandwich) {
  const existingSandwich = sandwiches.find((s) => s.id === id);

  Object.assign(existingSandwich, sandwich);
}

export function deleteSandwich(id) {
  sandwiches = sandwiches.filter((s) => s.id !== id);
  console.log(sandwiches);
}
