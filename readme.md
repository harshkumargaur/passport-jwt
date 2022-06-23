# JWT implementation using Passportjs Framework

## File/Folder Structure
<img src="/utility/jwt.png" />

## Info
1. run: npm i
2. run: npm run start
3. the app will run on port 3000
4. the skeleton is made using express-generator npm package

## app.js

1. This file contains the passport configuration from line: (10-30) , and user routes mounting , The jwt is extracted from authorization header as bearer token of format  <strong> Bearer {token} </strong> 

2. To protect any route use passport.authenticate('jwt',{session:false}) middleware and provide the token using registering or logging in the user

3. The passport.authenticate('jwt',{session:false}) middleware will call the verify function with the payload and the done 
4. The verify callback is present at line :(20-30)

## user.model.js
1. This file contains the user model created using mongoose 
2. There are two methods present on instances of User (genPassword and validatePass)
3. These both uses crypto library to generate the password and validate the password while logging in 

## users.js
This file contains the provided user routes to test the auth flow

## server.js
This file contain the database connection and will require the .env config file to run

## genJwt.js
1. This file will export a function which will return the JWT signed with the private key 
2. The JWT is signed with the private Key 
3. The JWT is verified with the public key

##  genKeyPair.js
1. This file uses the inbuilt crypto library to generate the private and public key pair using generateKeyPairSync function using rsa algorithm
