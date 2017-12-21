const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=calle%20145A%2012A%2009%20bogota%20colombia',
    json:true
},(error,response,body)=>{
    console.log(body);
});