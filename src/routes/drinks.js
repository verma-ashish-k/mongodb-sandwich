import express from 'express';
import {
  createDrink,
  deleteDrink,
  listAllDrinks,
  updateDrink,
} from '../models/drink.js';

export const drinksRouter = express.Router();

// List all drinks
drinksRouter.get('/', (request, response) => {
  const drinks = listAllDrinks();
  response.send(drinks);
});

// Create a new drink
drinksRouter.post('/', (request, response) => {
  const drink = request.body;

  createDrink(drink);

  response.send();
});

// Update a drink
drinksRouter.patch('/:id', (request, response) => {
  const drinkId = Number(request.params.id);
  const drink = request.body;

  updateDrink(drinkId, drink);

  response.send();
});

// Delete a drink
drinksRouter.delete('/:id', (request, response) => {
  const drinkId = Number(request.params.id);

  deleteDrink(drinkId);

  response.send();
});
