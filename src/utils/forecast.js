const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/75e63ff081b2f040f7ef98f1c5735fb8/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    
    request({ url, json: true }, (error, { body } )=> {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + '°F outside. The high today is ' + body.daily.data[0].temperatureHigh + '°F with the low of ' + body.daily.data[0].temperatureLow + '°F. There is a ' + body.daily.data[0].precipProbability * 100 + '% chance of rain today.')
        }
    })
}

module.exports = forecast