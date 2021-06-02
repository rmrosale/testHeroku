const request = require('request')
//por nombre de escuela
const forecast = (name, callback) => {
    const url = 'http://universities.hipolabs.com/search?country=United+States&name='+name
    request({ url: url, json: true }, (error, response) => {
        //console.log(response.body.length)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body[0])
        }
    })
}

module.exports = forecast