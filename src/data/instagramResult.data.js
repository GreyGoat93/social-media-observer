module.exports = class InstagramResultData {
    fetchUserData(username) {
        return new Promise((resolve, reject) => {
            fetch(
                `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
                {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en-US,en;q=0.9",
                        "cache-control": "no-cache",
                        "dpr": "2",
                        "pragma": "no-cache",
                        "sec-ch-prefers-color-scheme": "dark",
                        "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
                        "sec-ch-ua-full-version-list": "\"Chromium\";v=\"116.0.5845.179\", \"Not)A;Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"116.0.5845.179\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-model": "\"\"",
                        "sec-ch-ua-platform": "\"macOS\"",
                        "sec-ch-ua-platform-version": "\"12.6.4\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "viewport-width": "929",
                        "x-asbd-id": "129477",
                        "x-csrftoken": "WmMeurfB5whHGUGfqdtPLUS6FBjXBPiA",
                        "x-ig-app-id": "936619743392459",
                        "x-ig-www-claim": "hmac.AR2a233s0LaGp5QEx5S8OJT1vgti0DnBQIwq2I5fQTADGZhH",
                        "x-requested-with": "XMLHttpRequest"
                    },
                    "referrer": `https://www.instagram.com/${username}/`,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": null,
                    "method": "GET",
                    "mode": "cors",
                    "credentials": "include"
                }
            )
            .then(res => res.json())
            .then(result => resolve(result))
            .catch(err => reject(err));
        })
    }
}