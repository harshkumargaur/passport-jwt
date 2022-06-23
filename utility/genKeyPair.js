const {writeFileSync} = require('fs');
const {generateKeyPairSync} = require('crypto');

const {publicKey,privateKey} = generateKeyPairSync('rsa',{
    modulusLength : 4096,
    publicKeyEncoding :{
        type:'pkcs1',
        format:'pem'
    },
    privateKeyEncoding:{
        type:'pkcs1',
        format:'pem'
    }
})

writeFileSync('publicKey.pem',publicKey);
writeFileSync('privateKey.pem',privateKey);
