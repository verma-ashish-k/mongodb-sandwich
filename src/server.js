import express from 'express';
import { sandwichesRouter } from './routes/sandwiches.js';
import { drinksRouter } from './routes/drinks.js';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DBNAME,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
  });

  console.log(`Connected to MongoDB database ${process.env.MONGODB_DBNAME}`);

  const app = express();

  const port = process.env.PORT;

  app.use(express.json());

  app.use('/sandwiches', sandwichesRouter);
  app.use('/drinks', drinksRouter);

  app.listen(port, () => {
    console.log(`Web server running on port ${port}`);
  });
}
main().catch((err) => console.error(err));
