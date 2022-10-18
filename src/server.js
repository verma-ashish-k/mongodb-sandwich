import express from 'express';
import { sandwichesRouter } from './routes/sandwiches.js';
import { drinksRouter } from './routes/drinks.js';

const app = express();

// This is normally stored in an environment variable or config file
const port = 4000;

app.use(express.json());

app.use('/sandwiches', sandwichesRouter);
app.use('/drinks', drinksRouter);

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});
