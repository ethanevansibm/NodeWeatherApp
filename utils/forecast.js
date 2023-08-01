const request = require("postman-request")

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=239f71c624c519f063891cb9bcdf2254&query=${latitude},${longitude}&units=f`

    request({url, json: true}, (error, response, body)=>{
        if(error){
            callback("Unable to connect to weather service", undefined)
        } else if(body.error) {
            callback("Unable to find location", undefined)
        } else {
            // cosole.log(body)
            const {temperature, feelslike} = body.current
            callback(undefined, `It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out`);
        }
    })
}

module.exports = forecast