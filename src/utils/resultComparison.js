const InstagramResult = require("../entities/instagramResult");
const TwitterResult = require("../entities/twitterResult");

module.exports = class ResultComparison {
    static twitterComparisonFields = {
        "bannerPictureUrlId": {
            message: "Banner has changed."
        },
        "birthdayDay": {
            message: "Birth Day has changed."
        },
        "birthdayMonth": {
            message: "Birth Month has changed."
        },
        "description": {
            message: "Description has changed."
        },
        "favoritesCount": {
            message: "Favorites Count has changed."
        },
        "followersCount": {
            message: "Followers Count has changed."
        },
        "followingsCount": {
            message: "Followings Count has changed."
        },
        "location": {
            message: "Location has changed."
        },
        "mediasCount": {
            message: "Media Count has changed."
        },
        "name": {
            message: "Name has changed."
        },
        "profilePicturePhotoId": {
            message: "Profile Picture has changed."
        },
        "protected": {
            message: "Accounts Protection has changed."
        },
        "statussesCount": {
            message: "Status Count has changed."
        }, 
    };

    static instagramComparisonFields = {
        "biography": {
            message: "Biography has changed."
        },
        "followersCount": {
            message: "Followers Count has changed."
        },
        "followingsCount": {
            message: "Followings Count has changed."
        },
        "fullName": {
            message: "Name has changed."
        },
        "postsCount": {
            message: "Post Count has changed."
        },
        "private": {
            message: "Accounts Privacy has changed."
        },
        "profilePicturePhotoId": {
            message: "Profile Picture has changed."
        },
    };

    /**
     * 
     * @param {TwitterResult} result1 
     * @param {TwitterResult} result2 
     */
    static compareTwitterResults(result1, result2) {
        const differentFields = [];
        Object.keys(ResultComparison.twitterComparisonFields).forEach((field) => {
            const isDifferent = result1[field] !== result2[field];
            if(isDifferent) differentFields.push(ResultComparison.twitterComparisonFields[field]);
        })
        return differentFields;
    }

    /**
     * 
     * @param {InstagramResult} result1 
     * @param {InstagramResult} result2 
     */
    static compareInstagramResults(result1, result2) {
        const differentFields = [];
        Object.keys(ResultComparison.instagramComparisonFields).forEach((field) => {
            const isDifferent = result1[field] !== result2[field];
            if(isDifferent) differentFields.push(ResultComparison.instagramComparisonFields[field]);
        })
        return differentFields;
    }

    static convertToNotificationBody(diffArr) {
        let result = "";
        diffArr.forEach(diff => {
            result += diff.message;
            result += "\n";
        })
        return result
    }
}