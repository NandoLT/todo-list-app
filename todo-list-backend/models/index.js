module.exports = {
    mongoDBconect: require('./utils/db_conection'),
    mongoose: require('mongoose'),
    Tasks: require('./tasks.model'),
    USers: require('./users.model')
}