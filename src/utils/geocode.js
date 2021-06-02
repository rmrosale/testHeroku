const request = require('request')
//por año https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=2014
const geocode = (year, callback) => {
    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=' + year

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.data.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                year:response.body.data[0].Year,
                population:response.body.data[0].Population,
                nation:response.body.data[0].Nation,
                name:'Monroe College'
                
            } )
        }
    })

}

module.exports = geocode