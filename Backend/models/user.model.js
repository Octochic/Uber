const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const usermodel= require('../models/user.model')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'Firstname must be atleast 3 characters']
        },
        lastname:{
            type: String,
            minlength: [3, 'last name must be atleast 3 characters']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be 5 characters long']
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    //to tract the location of captain we use soacketid
    socketID:{
        type: String,
    },
})

userSchema.methods.generateAuthToken = function(){
    const expiresIn = '24h';
    const token= jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparePasswords = async function (password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword= async function (password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;