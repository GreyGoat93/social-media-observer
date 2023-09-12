const InstagramResultData = require("../data/instagramResult.data");
const InstagramResult = require("../entities/instagramResult");
const InstagramResultModel = require("../models/instagramResult.model");
const UrlModel = require("../models/url.model");
const PhotoModel = require("../models/photo.model");
const ImageBlobGetter = require("../utils/imageBlobGetter");

module.exports = class InstagramResultRepository {
    constructor() {
        this.photoModel = new PhotoModel();
        this.urlModel = new UrlModel();
        this.instagramResultModel = new InstagramResultModel();
    }

    convertSqlToEntity(databaseResult) {
        const instagramResultEntity = new InstagramResult();
        instagramResultEntity.biography = databaseResult.biography;
        instagramResultEntity.followersCount = databaseResult.followers_count;
        instagramResultEntity.followingsCount = databaseResult.followings_count;
        instagramResultEntity.fullName = databaseResult.full_name;
        instagramResultEntity.postsCount = databaseResult.posts_count;
        instagramResultEntity.private = !!databaseResult.private;
        instagramResultEntity.profilePicturePhotoId = databaseResult.profile_picture_photo_id;
        return instagramResultEntity;
    }

    async fetchSourceUserData(username) {
        const result = await new InstagramResultData().fetchUserData(username);
        const resultUser = result.data.user;
        if(result.status != "ok") { throw new Error("Not OK."); }
        const data = new InstagramResult();
        data.username = username;
        data.fullName = resultUser.full_name;
        data.biography = resultUser.biography;
        data.private = resultUser.is_private;
        data.profilePicUrl = resultUser.profile_pic_url_hd;
        data.followersCount = resultUser.edge_followed_by.count;
        data.followingsCount = resultUser.edge_follow.count;
        data.postsCount = resultUser.edge_owner_to_timeline_media.count;

        const imageString = await ImageBlobGetter.getInstagramImageBlob(data.profilePicUrl);
        const photoExists = await this.photoModel.checkIfUrlExists(imageString);
        if(!photoExists) { 
            const inserted = await this.photoModel.insertOne(imageString);
            data.profilePicturePhotoId = inserted.insertId; 
        }
        else { data.profilePicturePhotoId = photoExists.id; }

        return data;
    }

    /**
     * 
     * @param {InstagramResult} result 
     */
    async getAllFromDatabase(result) {
        
    }

    /**
     * 
     */
    async getLastFromDatabase(observeeId) {
        const dbResult = await this.instagramResultModel.getLastByObserveeId(observeeId);
        if (!dbResult) return dbResult;
        return this.convertSqlToEntity(dbResult);
    }

    /**
     * 
     * @param {number} observeeId
     * @param {InstagramResult} result 
     */
    async insertIntoDatabase(observeeId, result) {
        const insertObject = {
            observee_id: observeeId,
            full_name: result.fullName,
            biography: result.biography,
            private: result.private,
            profile_picture_photo_id: result.profilePicturePhotoId,
            posts_count: result.postsCount,
            followers_count: result.followersCount,
            followings_count: result.followingsCount,
        }
        return await this.instagramResultModel.insertOne(insertObject);
    }
}