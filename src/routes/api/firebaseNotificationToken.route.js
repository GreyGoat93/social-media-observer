const DefaultResponse = require("../../entities/defaultResponse");
const FirebaseNotificationTokenModel = require("../../models/firebaseNotificationToken.model");

const firebaseNotificationTokenModel = new FirebaseNotificationTokenModel();

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const data = await firebaseNotificationTokenModel.getAll();
        res.send(new DefaultResponse(true, null, data));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

router.post("/:token", async (req, res) => {
    try {
        const insertData = await firebaseNotificationTokenModel.insertOne(req.params.token);
        res.send(new DefaultResponse(true, null, insertData));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

module.exports = router;