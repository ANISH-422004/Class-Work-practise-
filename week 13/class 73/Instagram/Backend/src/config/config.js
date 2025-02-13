const _config = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL ,
    JWT_SECRET:process.env.JWT_SECRET
}


const config = Object.freeze(_config)

module.exports = config