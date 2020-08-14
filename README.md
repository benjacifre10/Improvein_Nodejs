# Improvein_Nodejs

Instruction

Development Challenge for Node.js
This challenge aims to evaluate basic skills in Node.js development, and a bit of data/entity modeling. The idea is to build an HTTP REST API.

Functionality
The API has to fulfill the following conditions:

Endpoints for authentication using JWT. Also an endpoint for refreshing the JWT access token.
Endpoint for retrieving movies. It should be allowed to filter and sort by some field.
Endpoint for retrieving the information (director included) of a specific episode of a TV Show
Endpoint for adding a new object (it could be for any entity you like).
Model
Entities to consider:

Movie
Has many actors, but one director.
TV Show
Has many actors, but one director. It also has seasons and episdores inside each of one.
Actor
Can be on different movies and tv shows.
Director
Can direct many movies and specific episodes of tv shows.
Use your common sense (or imagination 😉) to define the descriptive attributes/properties of each entity. For example, name or genre.

Tech Requirements
These are the following conditions for the development:

The code should be using Node.js 12 or superior.
The code could be written in Javascript or Typescript.
All the code and comments should be written in english.
Use a proper naming conventions and standards when defining the structure of the project and the name of variables, functions, etc.
Use a proper structure to define the different path for the API endpoints
The use of ESLint or other linter is optional.
The database could be relational or NoSQL, it's up to you. The use of ORM is optional too.
The database doesn't need to be presented. But the model should be represented in some way. It could be in the form of ORM configuration or at least a minimal documentation or example of some of the entities.

# Run Program
-> npm run dev

# Comments
1- I add the postman_collection.json with the tests
2- I add the sql file that contains the database
3- I add the third endpoint looking all the movies and tvshows for a particular actor

# Thank for the opportunity, greetings