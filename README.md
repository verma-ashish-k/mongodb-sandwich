# Intro to Express (Part 2)

> October 17, 2022

Hi guys, here you can find the code for our Intro to Express (Part 2) session.

## Code structure

Below is a reminder of the steps we took to get to the code found in this repo:

1. We quickly reviewed how a Node.js project is created:

   ```shell
   $ npm init
   ```

   Which will generate a `package.json` file.

1. We added `express` as a dependency:

   ```shell
   $ npm install express
   ```

   Which automatically gets added to the `"dependencies"` key within `package.json`.

1. We created a `.gitignore` file that tells `git` to ignore out `node_modules` folder when committing our code, since it is bad practice to commit dependencies within the Node.js ecosystem.

1. We added the `"type": "module"` line to our `package.json` so that we are able to use modern `import ... from '...'` statements in our code.

1. We created our `server.js` file where we re-created a basic Express app.

1. We started building a sandwich API for our pretend sandwich shop. We learned about CRUD (Create, Read, Update, Delete) and how they translate to HTTP methods (POST, GET, PUT/PATCH, DELETE).

1. We tested this in Postman by:

   1. Creating a collection for this project called "Intro to Express"
   1. Creating a folder called "Sandwiches"
   1. Creating multiple requests under that folder - one for each endpoint (list all, create, update, delete)

   PS. This Postman collection is available in this repository at [postman_collection.json](./postman_collection.json) - feel free to import this file into Postman.

1. To make our code more scalable and maintainable, we first created a `./src` folder. This allows us to split root-level "meta" files (`package.json`, `.gitignore`, etc) from the code.

   We created a `"start"` script in `package.json` to make it easier to run our application:

   ```json
   ...
   "scripts": {
     "start": "node src/server.js",
     ...
   }
   ...
   ```

   We then split our sandwich endpoints into their own router using `express.Router()`. We moved all of that logic into a new file `./src/routes/sandwiches.js`. We then registered that router in `server.js` using:

   ```js
   app.use('/sandwiches', sandwichesRouter);
   ```

1. We then created a Sandwich model under `./src/models/sandwich.js`. The model allows us to cleanly split our routing logic from our actual data retrieval logic.

   For demo purposes, we created a "fake" database that simply stores our sandwiches in an array - in reality this would most likely be a real database. Splitting the logic into a model also allows us to easily change this "database" implementation in a single place instead of having to update code in many different files. Finally, models allow us to write automated tests much easier than if they were coupled to our routes.

1. Finally we created a "Drink" entity with its own router/model to demonstrate how we would do the same thing with another resource.
