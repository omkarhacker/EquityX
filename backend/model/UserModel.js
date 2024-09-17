const { model } = require("mongoose");

const {userSchema} =require("../schemas/UserSchema");

const UserModel = new model("users", userSchema);

module.exports={UserModel};