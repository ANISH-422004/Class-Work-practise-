const _config = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIERES_IN: process.env.JWT_EXPIERES_IN,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
}


const config = Object.freeze(_config)

module.exports = config