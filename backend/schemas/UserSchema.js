const { Schema } = require("mongoose");

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        require:true,
        minLength:6
    },
    firstName: {
        type:String,
        require:true,
        trim:true,
        maxLength:50
    },
    lastName: {
        type:String,
        require:true,
        trim:true,
        maxLength:50
    }
});

module.exports = { userSchema };