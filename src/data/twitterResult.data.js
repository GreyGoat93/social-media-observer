const EnvValues = require("../constants/envValues");

module.exports = class TwitterResultData {
    constructor() {
        this.env = new EnvValues();
    }

    fetchUserData(username) {
        return new Promise((resolve, reject) => {
            var myHeaders = new Headers();
            myHeaders.append("authority", "twitter.com");
            myHeaders.append("accept", "*/*");
            myHeaders.append("accept-language", "en-US,en;q=0.9");
            myHeaders.append("authorization", this.env.TWITTER_AUTHORIZATION);
            myHeaders.append("cache-control", "no-cache");
            myHeaders.append("content-type", "application/json");
            myHeaders.append("cookie", "guest_id=v1%3A169433170220079548; _gid=GA1.2.950638170.1694331702; g_state={\"i_l\":0}; kdt=PKiLUV8BbtW1IBJUB64Hj2l9KvjQvIrYeJ9UiTQP; auth_token=2d4c03a208b424e6d70d88a33a7f617921b33d09; ct0=0ddb4bd07c795597482a8234f7319d2b873483c97af393a9fc7c86f145ffea705ba198185f373fc7f45b14e907db69024f1839e4f40b67371b726733c8528d674f75c353ebb01a65aaeb081987c9c238; guest_id_ads=v1%3A169433170220079548; guest_id_marketing=v1%3A169433170220079548; lang=en; twid=u%3D1562395468294156296; att=1-NeVrcSc0zDGVQ7hEk9SXbd8y8m4uJUqszP3j3EYh; at_check=true; twtr_pixel_opt_in=Y; _gcl_au=1.1.1204321969.1694351245; des_opt_in=Y; mbox=session#396d49cb741b4c0796f14327c2147865#1694353766|PC#396d49cb741b4c0796f14327c2147865.37_0#1757596706; _ga_34PHSZMC42=GS1.1.1694351245.1.1.1694351914.0.0.0; _ga=GA1.2.753903008.1694331702; personalization_id=\"v1_UoQmMnoCrvvZoOZNpNm1Iw==\"; guest_id=v1%3A169428297804662493; guest_id_ads=v1%3A169428297804662493; guest_id_marketing=v1%3A169428297804662493; personalization_id=\"v1_mM1qvZGXQOBJlsJeK3JcIg==\"");
            myHeaders.append("pragma", "no-cache");
            myHeaders.append("referer", "https://twitter.com/");
            myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"");
            myHeaders.append("sec-ch-ua-mobile", "?0");
            myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
            myHeaders.append("sec-fetch-dest", "empty");
            myHeaders.append("sec-fetch-mode", "cors");
            myHeaders.append("sec-fetch-site", "same-origin");
            myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36");
            myHeaders.append("x-client-transaction-id", "Zwimvz4R5yrR8EkekYhgTQ8DDtGq+QkmUWHEsG3sUxQQLdraIW+eAJEA8FhGe8nwi1cHyWdvIRbz49VW8YqZnvy4bA0HZg");
            myHeaders.append("x-csrf-token", "0ddb4bd07c795597482a8234f7319d2b873483c97af393a9fc7c86f145ffea705ba198185f373fc7f45b14e907db69024f1839e4f40b67371b726733c8528d674f75c353ebb01a65aaeb081987c9c238");
            myHeaders.append("x-twitter-active-user", "yes");
            myHeaders.append("x-twitter-auth-type", "OAuth2Session");
            myHeaders.append("x-twitter-client-language", "en");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(`https://twitter.com/i/api/graphql/G3KGOASz96M-Qu0nwmGXNg/UserByScreenName?variables=%7B%22screen_name%22%3A%22${username}%22%2C%22withSafetyModeUserFields%22%3Atrue%7D&features=%7B%22hidden_profile_likes_enabled%22%3Atrue%2C%22hidden_profile_subscriptions_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22subscriptions_verification_info_is_identity_verified_enabled%22%3Afalse%2C%22subscriptions_verification_info_verified_since_enabled%22%3Atrue%2C%22highlights_tweets_tab_ui_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D&fieldToggles=%7B%22withAuxiliaryUserLabels%22%3Afalse%7D`, requestOptions)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject(error));
        })
    }
}