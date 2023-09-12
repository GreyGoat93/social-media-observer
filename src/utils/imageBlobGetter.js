const fetch = require('node-fetch');

module.exports = class ImageBlobGetter {
    static async getInstagramImageBlob(imageUrl, asString = true) {
        return new Promise((resolve, reject) => {
            var myHeaders = new Headers();
            myHeaders.append("authority", "instagram.fsaw1-11.fna.fbcdn.net");
            myHeaders.append("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7");
            myHeaders.append("accept-language", "en-US,en;q=0.9");
            myHeaders.append("cache-control", "no-cache");
            myHeaders.append("pragma", "no-cache");
            myHeaders.append("sec-ch-ua", "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"");
            myHeaders.append("sec-ch-ua-mobile", "?0");
            myHeaders.append("sec-ch-ua-platform", "\"macOS\"");
            myHeaders.append("sec-fetch-dest", "document");
            myHeaders.append("sec-fetch-mode", "navigate");
            myHeaders.append("sec-fetch-site", "none");
            myHeaders.append("sec-fetch-user", "?1");
            myHeaders.append("upgrade-insecure-requests", "1");
            myHeaders.append("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(imageUrl, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.buffer();
                } else {
                    throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
                }
            })
            .then(buffer => {
                if(!asString) { resolve(buffer); return; }
                const base64String = buffer.toString('base64');
                resolve(base64String);
            })
            .catch(error => reject(error));
        })
    }
}