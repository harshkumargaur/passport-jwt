const {pbkdf2Sync,randomBytes} = require('crypto');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    hash:String,
    salt:String
})

userSchema.method('genPassword',function(passText){
    this.salt = randomBytes(32).toString('hex');
    this.hash = pbkdf2Sync(passText,this.salt,10000,32,'sha256').toString('hex');
    ///call user.save() after this operation
})

userSchema.method('validatePass',function(passText){
    const passTextHash = pbkdf2Sync(passText,this.salt,10000,32,'sha256').toString('hex');
    return passTextHash === this.hash;
})

module.exports = mongoose.model('User',userSchema);