const request = require("postman-request")

const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast") 

const queryLocation = process.argv[2]
if(!queryLocation){
    return console.log("No location provided")
}
geocode(queryLocation, (error, {latitude, longitude, location} = {}) => {
    if(error) {
        return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
    })
})


