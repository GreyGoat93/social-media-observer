module.exports = class NotificationService {
    sendNotification(deviceToken, title, message) {
        const fcmUrl = 'https://fcm.googleapis.com/fcm/send';
        const legacyServerKey = 'AAAATTwNU0I:APA91bE_xBCnpG8S9EftCSdraigcsyNcfo2Fb2Jx1YFFqOfAUeq-0o_k0ylmaMpHdYFPxgQ1B2lYMHEr9soZmtJUOkEq4eRxYS1LXjvXJaWV86A4tOD_XuIDmPYAh4m9bjSVLDjNlfEh';
        
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