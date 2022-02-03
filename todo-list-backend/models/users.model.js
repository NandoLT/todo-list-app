const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    email: { type:String, required:true, index:true },
    username: { type:String, required:true, index:true },
    password: { type:String, required:true },
    avatar: { type:String },
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;