module.exports = class DefaultResponse {
    constructor(success = false, message = null, data = null) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}