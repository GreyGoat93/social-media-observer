const observeeGroupRoute = require("../routes/api/observeeGroup.route");
const twitterObserveeRoute = require("../routes/api/twitterObservee.route");
const instagramObserveeRoute = require("../routes/api/instagramObservee.route");
const twitterResultRoute = require("../routes/api/twitterResult.route");
const instagramResultRoute = require("../routes/api/instagramResult.route");
const firebaseNotificationTokenRoute = require("../routes/api/firebaseNotificationToken.route");
const notificationRoute = require("../routes/api/notification.route");

module.exports = class Routes {
    constructor(expressApp) {
        expressApp.use("/api/observee_group/", observeeGroupRoute);
        expressApp.use("/api/twitter_observee/", twitterObserveeRoute);
        expressApp.use("/api/instagram_observee/", instagramObserveeRoute);
        expressApp.use('/api/twitter_result/', twitterResultRoute);
        expressApp.use('/api/instagram_result/', instagramResultRoute);
        expressApp.use('/api/firebase_notification_token/', firebaseNotificationTokenRoute);
        expressApp.use('/api/notification/', notificationRoute);
    }
}