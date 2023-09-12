const DefaultResponse = require("../../entities/defaultResponse");
const TwitterObserveeModel = require("../../models/twitterObservee.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const data = await new TwitterObserveeModel().getAll();
        res.send(new DefaultResponse(true, null, data));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

router.post("/", async (req, res) => {
    try {
        const body = req.body;
        if(typeof body.observeeGroupId != "number") { throw new Error("Observee Group Id must be a number!"); }
        if([undefined, null, ""].includes(body.username?.trim())) { throw new Error("Username must not be empty!"); }
        const insertData = await new TwitterObserveeModel().insertOne(body.observeeGroupId, body.username.trim());
        res.send(new DefaultResponse(true, null, insertData));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

module.exports = router;