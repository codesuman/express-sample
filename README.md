npm init -y

npm i express mongoose dotenv node-geocoder cors
npm i -D nodemon

How to use dotenv :
Under config folder create config.env
Add some dummy values like below

NODE_ENV=development
PORT=5000

SAVE_TO_CSV=false
SAVE_TO_JSON=false

MONGO_URI=mongodb://localhost:27017/my_db




Some boilerplate :

https://github.com/maitraysuthar/rest-api-nodejs-mongodb
