import express from 'express';
import {
  createSandwich,
  deleteSandwich,
  listAllSandwiches,
  updateSandwich,
} from '../models/sandwich.js';

export const sandwichesRouter = express.Router();

// List all sandwiches
sandwichesRouter.get('/', async (request, response) => {
  const sandwiches = await listAllSandwiches();

  response.send(sandwiches);
});

// Create a new sandwich
sandwichesRouter.post('/', async (request, response) => {
  const sandwich = request.body;

  await createSandwich(sandwich);

  response.send();
});

// Update a sandwich
sandwichesRouter.patch('/:id', async (request, response) => {
  const sandwichId = request.params.id;
  const sandwich = request.body;

  await updateSandwich(sandwichId, sandwich);

  response.send();
});

// Delete a sandwich
sandwichesRouter.delete('/:id', async (request, response) => {
  const sandwichId = request.params.id;

  await deleteSandwich(sandwichId);

  response.send();
});
