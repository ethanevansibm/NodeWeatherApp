const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZXRoYW5zZXZhbnMiLCJhIjoiY2xqNG9vYXZ6MDNldDNlbHd6a3BpNHBrYSJ9.YdYBP1D91_6Q8EUUuhP6ig`

    request({url, json: true}, (error, response, body) => {
        if(error) {
            callback("Server Error: could not reach geolocation service", undefined)
        } else if(body.features.length == 0) {
            callback("No results found", undefined)
        } else {
            const feature = body.features[0]
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode