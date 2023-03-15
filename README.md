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

## Testing (WIP)
- `npm run test` to run tests
- more tests will be added in the future

## Future features
- [ ] /restaurant API route to fetch restaurant info (currently info is hardcoded)
- [ ] Search filter in main page
- [ ] Restaurant information page
- [ ] Unit tests for most components
- [ ] E2E testing with Cypress
- [ ] Add DB to store data
- [ ] Responsiveness

## Known issues
The app is a work in progress, so some features are not 100% complete yet.
- Adding same 2 items to the cart causes issues. Will need to refactor 'add to cart' logic
- No ability to change quantity in Cart page
- No validation of input fields in Cart page & no success message when placing an order
- Harcoded currency