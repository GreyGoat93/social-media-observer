class EnvValues {
    DB_DATABASE;
    DB_HOST;
    DB_USERNAME;
    DB_PASSWORD;
    TWITTER_AUTHORIZATION;

    constructor() {
        this.DB_DATABASE = process.env.DB_DATABASE;
        this.DB_HOST = process.env.DB_HOST;
        this.DB_USERNAME = process.env.DB_USERNAME;
        this.DB_PASSWORD = process.env.DB_PASSWORD;
        this.TWITTER_AUTHORIZATION = process.env.TWITTER_AUTHORIZATION;
    }
}

module.exports = EnvValues;