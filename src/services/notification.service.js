const EnvValues = require("../constants/envValues");

module.exports = class NotificationService {
    constructor() {
        this.env = new EnvValues();
    }

    sendNotification(deviceToken, title, message) {
        const fcmUrl = 'https://fcm.googleapis.com/fcm/send';
        const legacyServerKey = this.env.FIREBASE_NOTIFICATION_AUTH_KEY;
        
        const notificationPayload = {
            to: deviceToken,
            notification: {
                title: title,
                body: message,
            },
        };

        fetch(fcmUrl, {
            method: 'POST',
            headers: {
              'Authorization': `key=${legacyServerKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(notificationPayload),
        })
    }
}