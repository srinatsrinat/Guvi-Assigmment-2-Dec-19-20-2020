var request = new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send()
request.onload=function(){
    var data = JSON.parse(this.response)

//accepting capital city name from the user
var capitalcityname = prompt('enter the capital city name of the country to check weather')

//retrieving corresponding latitude and longitude
for(i=0;i<data.length;i++)
{
if(data[i].capital == capitalcityname)
{
    var latlong = data[i].latlng
}
}
var lat = latlong[0]
var long = latlong[1]

//calling letscheckweather function and passing latitude longitude and capitalcityname as arguments
letsCheckWeatherCity(capitalcityname)
letsCheckWeatherCoord(lat,long)

}

function letsCheckWeatherCity(capitalcityname)
{   var request = new XMLHttpRequest()
    //opening weather data by capital city name
    request.open('GET',"https://api.openweathermap.org/data/2.5/weather?q="+ capitalcityname+"&appid=f00d082228db9016bff947081a913fe0", true)
    request.send()
    request.onload=function(){   
    var weatherCity = JSON.parse(this.response)
    console.log(weatherCity)
    }


}

function letsCheckWeatherCoord(lat,long)
{
    var request = new XMLHttpRequest()
    //opening weather data by capital city coordinates - latitude & longitude
    request.open('GET',"https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon="+ long + "&appid=f00d082228db9016bff947081a913fe0", true)
    request.send()
    request.onload=function(){   
    var weatherLatLong = JSON.parse(this.response)
    console.log(weatherLatLong)
    }
}
