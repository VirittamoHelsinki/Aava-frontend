# `Aava frontend`
Aava is project management tool for Digitalents Helsinki. 
Project has whole contains two parts, frontend and backend.
This repository includes only the frontside. And there is separate repository for backend.

# Roadmap
The actual roadmap can be found from root folder named as `ROADMAP.md`. Please include future plans in there to keep the project up-to-date. And what is the current version.


# Getting Started 
Before starting it's good to have latest version of node.js and npm installed.

## Built with
- React.js - javascript library
- Create-react-app - web application bundler
- Material-UI - React UI framework

## Theme configuration
The necessary files can be found from `/src/theme` folder. 

`palette.js`: it's the colors of app (needs fixing and to be added the colors from the layout). For consistent theming with css-in-js. 

`theme.js`: for configurating css-in-js styles for different components (if necessary). Or just to make global css settings.

---
`App.js`: this file includes MUI's `ThemeProvider` and `CssBaseLine` components. The first component is for setting up the `theme.js` as default configuration and the second component is to "reset" css and not to force MUI's stylings.

You can read more about these from MUI's documentation, [here](https://material-ui.com/customization/theming/).

## API endpoint configuration
connect backend's url in the following file:
`/components/DataFetch/DataFetch.config.js`

## Generate docs

### `npm docs`

This will generate the docs in to folder `/docs`. 

## How to run the project

### `npm install`

Before of anything, install the dependencies by running this command.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

# Components playground
The testing ground to play with different components can be found from `/src/pages/ComponentTest.js` or from dev url `localhost:3000/test`. If you make new components, please include them here.

# Authors
* [Sanjiv Rana (eync)](https://github.com/eync/)
* [Pietari Karppinen (Pietu123)](https://github.com/Pietu123)
