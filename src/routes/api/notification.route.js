const DefaultResponse = require("../../entities/defaultResponse");
const FirebaseNotificationTokenModel = require("../../models/firebaseNotificationToken.model");
const NotificationService = require("../../services/notification.service");

const firebaseNotificationTokenModel = new FirebaseNotificationTokenModel();
const notificationService = new NotificationService();

const router = require("express").Router();

router.post("/", async (req, res) => {
    try {
        const tokens = await firebaseNotificationTokenModel.getAll();
        tokens.forEach(async (token) => {
            try {
                await notificationService.sendNotification(token.token, req.body.title, req.body.body);
            } catch (err) {
                console.log(err.message || err);
            }
        })
        res.send(new DefaultResponse(true, null, tokens));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

module.exports = router;