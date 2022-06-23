const {readFileSync} = require('fs');
const jwt = require('jsonwebtoken');

const privateKey = readFileSync('./utility/privateKey.pem','utf-8');
const genJwt = (user)=>{
    const payload = {sub:user._id};
    const token = jwt.sign(payload,privateKey,{algorithm:'RS256',expiresIn:'1d'});
    return token;
    
}

module.exports= genJwt;