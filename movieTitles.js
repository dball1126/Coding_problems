const https = require('https');

function getMovieTitles(substr) {
    const titles = [];
    // console.log(curl "https://jsonmock.hackerrank.com/api/movies/search/?Title=")
    https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

    // if (substr.data) {

    //     substr.data.forEach(e => {
    //         titles.push(e.Title);
    //     })
    // }
    // return titles.sort();
}


console.log(getMovieTitles()