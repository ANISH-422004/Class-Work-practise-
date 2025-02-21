const _config = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIERES_IN: process.env.JWT_EXPIERES_IN,

}


const config = Object.freeze(_config)

module.exports = config