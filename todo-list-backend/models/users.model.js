const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const usersSchema = new Schema({
    email: { type:String, required:true, index:true },
    username: { type:String, required:true, index:true },
    password: { type:String, required:true },
    avatar: { type:String },
});

usersSchema.methods.hashPassword = async function(password) {
    return await bcrypt.hash(password, 7);
}

usersSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare( password, this.password);
}

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;