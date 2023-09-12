const DefaultResponse = require("../../entities/defaultResponse");
const ObserveeGroupModel = require("../../models/observeeGroup.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const data = await new ObserveeGroupModel().getAll();
        res.send(new DefaultResponse(true, null, data));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

router.post("/", async (req, res) => {
    try {
        const body = req.body;
        if([undefined, null, ""].includes(body.name?.trim())) { throw new Error("Name must not be empty!"); }
        const insertData = await new ObserveeGroupModel().insertOne(body.name.trim());
        res.send(new DefaultResponse(true, null, insertData));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

router.put("/rename/:id", async (req, res) => {
    try {
        const body = req.body;
        if([undefined, null, ""].includes(body.name?.trim())) { throw new Error("Name must not be empty!"); }
        const updateData = await new ObserveeGroupModel().renameGroup(req.params.id, body.name.trim());
        res.send(new DefaultResponse(true, null, updateData));
    } catch (err) {
        res.send(new DefaultResponse(false, err.message || err, null));
    }
})

module.exports = router;