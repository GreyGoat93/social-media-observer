const DefaultResponse = require("../../entities/defaultResponse");
const InstagramResultHelper = require("../../helpers/instagramResult.helper");
const InstagramObserveeModel = require("../../models/instagramObservee.model");
const InstagramResultRepository = require("../../repositories/instagramResult.repository");

const instagramObserveeModel = new InstagramObserveeModel();
const instagramResultHelper = new InstagramResultHelper();

const router = require("express").Router();

router.get("/:observeeId", async (req, res) => {
    try {
        const observee = await instagramObserveeModel.getById(req.params.observeeId);
        if(!observee) { throw new Error("No such observee!"); }
        const data = await instagramResultHelper.checkByObservee(observee);
        res.send(new DefaultResponse(true, null, data));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
});

module.exports = router;