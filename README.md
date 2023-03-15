# An online order placing tool for restaurants
This project was created to keep myself up-to-date with latest React changes and play around with different technologies.

## What it does

It's an online ordering tool that can be used by restaurants that do not have an online cart on their website. It can be integrated into an existing website (via iframe for example), offering customers the possibility to browse the restaurants menu, add items to the cart and place the order.

![](https://github.com/horiastere/restaurant-component-typescript/blob/readme/restaurant-component-readme.gif)

## Technologies used
- React
- Redux Toolkit
- TypeScript
- SCSS
- NodeJS
- ExpressJS

## How to run
1. clone the repository
2. navigate to **/src** folder and run `npm start` (launches the application)
2. navigate to **/api** folder and run `npm start` (start the server that the application uses to fetch data)

## Known issues
The app is a work in progress, so some features are not 100% complete yet.
Features that will be added in time:
- [ ] /restaurant API route to fetch restaurant info (currently info is hardcoded)
- [ ] Search filter in main page
- [ ] Restaurant information page
- [ ] Validation of input fields in Cart page & success message when placing an order
- [ ] Unit tests for most components
- [ ] E2E testing with Cypress
- [ ] Add DB to store data
