// This is normally stored in a database
let drinks = [
  {
    id: 1,
    name: 'coke',
  },
  {
    id: 2,
    name: 'shirley temple',
  },
  {
    id: 3,
    name: 'manhattan',
  },
  {
    id: 4,
    name: 'ale',
  },
];

export function listAllDrinks() {
  return drinks;
}

export function createDrink(drink) {
  drinks.push(drink);
}

export function updateDrink(id, drink) {
  const existingDrink = drinks.find((s) => s.id === id);

  Object.assign(existingDrink, drink);
}

export function deleteDrink(id) {
  drinks = drinks.filter((s) => s.id !== id);
}
