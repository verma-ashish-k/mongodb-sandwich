import express from 'express';
import {
  createSandwich,
  deleteSandwich,
  listAllSandwiches,
  updateSandwich,
} from '../models/sandwich.js';

export const sandwichesRouter = express.Router();

// List all sandwiches
sandwichesRouter.get('/', (request, response) => {
  const sandwiches = listAllSandwiches();
  response.send(sandwiches);
});

// Create a new sandwich
sandwichesRouter.post('/', (request, response) => {
  const sandwich = request.body;

  createSandwich(sandwich);

  response.send();
});

// Update a sandwich
sandwichesRouter.patch('/:id', (request, response) => {
  const sandwichId = Number(request.params.id);
  const sandwich = request.body;

  updateSandwich(sandwichId, sandwich);

  response.send();
});

// Delete a sandwich
sandwichesRouter.delete('/:id', (request, response) => {
  const sandwichId = Number(request.params.id);

  deleteSandwich(sandwichId);

  response.send();
});
