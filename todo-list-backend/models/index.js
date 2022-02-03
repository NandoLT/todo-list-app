module.exports = {
    mongoDBconect: require('./utils/db_connection'),
    mongoose: require('mongoose'),
    Tasks: require('./tasks.model'),
    USers: require('./users.model')
}