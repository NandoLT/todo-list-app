const mongoose = require('mongoose');
const { Schema } = mongoose;

const userssSchema = new Schema({
    email: { type:String, required:true },
    username: { type:String, required:true },
    avatar: { type:string },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;