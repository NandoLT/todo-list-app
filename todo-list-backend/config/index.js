if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    SERVER_PORT: process.env.SERVER_PORT,
    URL_BASE: process.env.URL_BASE
}