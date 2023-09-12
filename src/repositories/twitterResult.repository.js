const TwitterResultData = require("../data/twitterResult.data");
const TwitterResult = require("../entities/twitterResult");

module.exports = class TwitterResultRepository {
    async fetchSourceUserData(username) {
        const result = await new TwitterResultData().fetchUserData(username);
        const resultUser = result.data.user.result;
        const data = new TwitterResult();
        data.username = username;
        data.name = resultUser.legacy.name;
        data.description = resultUser.legacy.description;
        data.location = resultUser.legacy.location;
        data.protected = resultUser.legacy.protected ?? false;
        data.statussesCount = resultUser.legacy.statuses_count;
        data.mediasCount = resultUser.legacy.media_count;
        data.followersCount = resultUser.legacy.followers_count;
        data.followingsCount = resultUser.legacy.friends_count;
        data.favoritesCount = resultUser.legacy.favourites_count;
        data.bannerPictureUrl = resultUser.legacy.profile_banner_url;
        data.profilePictureUrl = resultUser.legacy.profile_image_url_https;
        data.birthdayDay = resultUser.legacy_extended_profile.day;
        data.birthdayMonth = resultUser.legacy_extended_profile.month;
        data.birthdayYear = resultUser.legacy_extended_profile.year;
        return data;
    }
}