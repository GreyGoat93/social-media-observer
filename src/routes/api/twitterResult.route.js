const DefaultResponse = require("../../entities/defaultResponse");
const TwitterResultRepository = require("../../repositories/twitterResult.repository");

const router = require("express").Router();

router.get("/:username", async (req, res) => {
    try {
        const foundData = await new TwitterResultRepository().fetchSourceUserData(req.params.username);
        res.send(new DefaultResponse(true, null, foundData));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

module.exports = router;