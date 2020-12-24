var request = new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send()
request.onload=function(){
    var data = JSON.parse(this.response)

//Get all the countries from Asia continent /region using Filter function

var asianCountries = data.filter((item)=>{return item.region == 'Asia'})
console.log(asianCountries)

//Get all the countries with population of less than 2 lacs/200,00 using Filter function

var popCountry = data.filter((item)=>{return item.population < 200000})
console.log(popCountry)

// Print the following details name, capital, flag using forEach function
data.forEach((item)=>console.log(item['name'],item['capital'],item['flag']))

//Print the total population of countries using reduce function

var totalPop = data.reduce((total,item)=>{ return total = total + item.population},0)
console.log(totalPop)

//Print the country which use US Dollars as currency.

var dollarCountries = data.filter((item)=>{return item.currencies[0].code == 'USD'})
console.log(dollarCountries)

}