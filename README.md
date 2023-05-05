# Robot Army React Router App

You are the commander of an intergalatic robot army. You need an app that will allow you to see and orgnize the members of your army. You will practice using React Router to build a multi-page, front-end UI. 

## Demo

You'll be building the following project: 

![demo](./demo.gif)

#### Features:
1. On load of the path `/`, you will make a `GET` fetch to an API and display all 50 robots on the page.
2. You should be able to filter the robots on the `/` page by `bot_class`, either Assault, Defender, or Support. 
3. Clicking on a bot should change the URL path to `/robots/:id` and display a single robot via the `BotSpecs` component.


## Set Up

Make sure you `cd` into the project directory.

In one terminal, run `npm install` to set up dependencies. Then run `npm start` to start the React App. This is your Front-End.

In another temrinal, run `json-server --watch db.json --port 4000` to start a mock back-end server on port 4000. If you get an error, make sure you have JSON server installed globally by running `npm install -g json-server`. Now, you will have a RESTful API that you can access via the URL `http://localhost:4000/robots`.

JSON Server is a tool to we use to spin up a mock API. It is a great alternative to consuming from a API when you don't have the time to build out a full Express API. It does have its limitation in that it cannot support a robust relationships database. If you need a refresher, see the JSON Server documentation [here](https://github.com/typicode/json-server#getting-started).

## Starter Code

There are _a lot_ of hints that the starter code gives you. Although you are allowed to change up the starter code however you'd like, it will be easiest to let the existing code guide you into building out this app. 

Note that not all the components in the code are rendered on the DOM, but you should explore _and use_ these components!

## React Router

This assignment comes with React Router already installed. In order to build out this app, you may need to read the [React Router Documentation](https://reactrouter.com/web/guides/quick-start).

## Step 1: The Bots Index Page

First, build out the page for the path `/`. 

Your `App` renders the `BotsPage` component which renders the `Filter` and `BotsList` component. To build out this page, you will need to update `RobotProvider.js` to use the `useEffect` hook to make a fetch to the API and store the array of bots in Context. 

The `BotsList` component is expecting a `robots` state in Context and will render a `BotCard` component for every robot. 

Once you have the `BotCard`s showing up, you will need to update this presentational component to display the data for every robot: 
* Avatar Image
* Robot Name
* An icon showing the robot's class (Assault, Defender, Support)
* Robot Catchphrase
* Robot Health
* Robot Damage
* Robot Armor

## Step 2: The Filter Feature

Second, to build out the filter functionality, you will need some additiona state. The `Filter` component should be a controlled component. You will need to add some state to represent the current dropdown value of the `<select>`. 

## Step 3: The Bots Show Page

Finally, build out the page for the path `/robots/:id`. When a user clicks a robot on the `/` page, the URL should change to `/robots/:id` where the the ID of the robot is in the URL. Your app should render the `BotSpecs` component. 

Once you have the `BotSpecs` showing up, you will need to update this presentational component to diaplay for every robot: 
* Avatar Image
* Robot Name
* An icon showing the robot's class (Assault, Defender, Support)
* Robot Catchphrase
* Robot Health
* Robot Damage
* Robot Armor 

Click on the "Go Back" button changes the URL back to `/` and takes you to the main page.

## Bonus 404 Page
If the user types in any URL other than `/` or `/robots/:id`, how can you render the 404 component as a "Not Found Page"? What happens if a user types in a URL of `/robots/1000000` or some robot that doesn't exist??? How could you render the "Not Found Page" then?

## Submitting Your Assignment

When you are finished, push your code up to Github and submit on Canvas.
