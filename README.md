## Bezos Transactions Tracker
### a simple web tool to calculate how much money spent on Bezos-related companies.

---

This app uses:
* Ruby version: `3.0.2`
* Rails version: `6.1.4.1`
* React version: `17.0.2`
* React-Bootstrap version: `2.0.2`

---

## Running it locally
- run `yarn install`
- run `rails s`
- in another tab run `./bin/webpack-dev-server` (optional)
- navigate to `http://localhost:3000`

---

## Main Components:
* App.jsx `app/javascript/components/App.jsx`
* TransactionsList.jsx `app/javascript/components/TransactionsList.jsx`
* NavigationBar.jsx `app/javascript/components/NavigationBar.jsx`
* index.jsx `app/javascript/packs/index.jsx`
* routes.rb `config/routes.rb`
* pages_controller.rb `app/controllers/pages_controller.rb`
* index.html.erb `app/views/pages/index.html.erb`

---

Created by `rails new transactions-tracker --webpack=react`
