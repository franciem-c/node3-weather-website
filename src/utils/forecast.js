const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/75e63ff081b2f040f7ef98f1c5735fb8/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    
    request({ url, json: true }, (error, { body } )=> {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out.  There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast