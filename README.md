# Cypress Automation Testing Suite

This project contains automated Cypress test cases for user registration, login, adding items to cart, checkout, and error handling on AutomationExercise.com.

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone https://github.com/tvlha/XOi-Assessment.git
   ```
3. **Install Dependencies**
   ```
   npm install
   ```
4. **Run Tests**  
- Open Cypress UI:  
  ```
  npx cypress open
  ```
- Run tests using the Cypress E2E UI

## Project Assumptions
- User data (including credentials and test input) is stored in `cypress/fixtures/userData.json`.
- Unique emails for user registration are dynamically generated using `Date.now()`.
- Tests assume the website's structure remains unchanged.
