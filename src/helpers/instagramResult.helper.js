const FirebaseNotificationTokenModel = require("../models/firebaseNotificationToken.model");
const InstagramObserveeModel = require("../models/instagramObservee.model");
const InstagramResultRepository = require("../repositories/instagramResult.repository");
const NotificationService = require("../services/notification.service");
const ResultComparison = require("../utils/resultComparison");
const { compareInstagramResults } = require("../utils/resultComparison");

module.exports = class InstagramResultHelper {
    constructor() {
        this.firebaseNotificationTokenModel = new FirebaseNotificationTokenModel();
        this.instagramObserveeModel = new InstagramObserveeModel();
        this.instagramResultRepository = new InstagramResultRepository();
        this.notificationService = new NotificationService();
    }

    async checkByObservee(observee) {
        this.instagramObserveeModel.updateLastChecked(observee.id);
        const foundData = await this.instagramResultRepository.fetchSourceUserData(observee.username);
        const lastData = await this.instagramResultRepository.getLastFromDatabase(observee.id);
        if(lastData) {
            const diffResult = compareInstagramResults(foundData, lastData);
            if(diffResult.length > 0) {
                const notificationTitle = "Insta ID: " + observee.id?.toString();
                const notificationBody = ResultComparison.convertToNotificationBody(diffResult);
                const tokens = await this.firebaseNotificationTokenModel.getAll();
                tokens.forEach(token => {
                    this.notificationService.sendNotification(
                        token.token,
                        notificationTitle,
                        notificationBody,
                    );
                })
            }
        }
        await this.instagramResultRepository.insertIntoDatabase(observee.id, foundData);
        return lastData;
    }
}