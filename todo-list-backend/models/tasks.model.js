const mongoose = require('mongoose');
const { Schema } = mongoose;

const tasksSchema = new Schema({
    task: { type:String, required:true },
    state: { type:Number, required:true },
    user: { type:Number, required:true },
});

const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;