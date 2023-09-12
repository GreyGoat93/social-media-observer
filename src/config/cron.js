const cron = require("node-cron");
const InstagramObserveeModel = require("../models/instagramObservee.model");
const InstagramResultHelper = require("../helpers/instagramResult.helper");

module.exports = class Cron {
    constructor() {
        this.instagramObserveeModel = new InstagramObserveeModel();
        this.instagramResultHelper = new InstagramResultHelper();

        cron.schedule('*/5 * * * * *', async () => {
            try {
                const pastTimeObservees = await this.instagramObserveeModel.getPastTimeObserveesForCron();
                pastTimeObservees.forEach(async (observee) => {
                    try {
                        await this.instagramResultHelper.checkByObservee(observee)
                    } catch (err) {
                        
                    }
                });
            } catch (err) {
                console.log(err.message || err);
            }
        });
    }
}