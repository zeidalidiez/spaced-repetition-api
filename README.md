# Spaced Repetition

## Links
Backend: https://github.com/zeidalidiez/spaced-repetition-api

Frontend: https://github.com/zeidalidiez/spaced-repetition

Backend API: https://desolate-dawn-86670.herokuapp.com/api

Frontend deployed through Vercel: https://spaced-repetition-drab.vercel.app/

## Description
Utilizing spaced repetition, this app seeks to enhance users ability to memorize words in a foreign language(Spanish).

Use the following demo account to test the app, or create a new user. 

Username:demo
Password:Demo1234!

### FrontEnd
- JavaScript
- React
- Cypress

### Backend
- Node
- Express
- Knex
- CORS
- Chai
- Mocha
- Supertest
- Frontend
- PostgreSQL
- JWT

## Main page

![learn](https://i.imgur.com/o5rwymm.png)

## Documentation

### '/api/auth'
Use to POST a login with a username and password, this will validate and create JWT

### '/api/language/'
GET will obtain words for user

### '/api/language/head'
GET will obtain next word

### '/api/language/guess'
GET will compare users chosen word to correct word

### '/api/user/
POST will sign up new user
