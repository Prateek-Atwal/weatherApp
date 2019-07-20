const axios = require("axios");
const getLocation = require("./location");
module.exports=async function helper(city) {
  var location = city;
  var response = await axios.get(
    `https://www.metaweather.com/api/location/search/?query=${location}`
  );
  var respdata = response["data"];
  var woeid = respdata[0]["woeid"];
  //console.log(woeid);
  var weatherresp = await axios.get(
    `https://www.metaweather.com/api/location/${woeid}`
  );
  var weather = weatherresp["data"];
  // console.log(weather);
  var weatherarr = weather["consolidated_weather"];
  // console.log(weatherarr);
  return weatherarr;
}
    //using openweathermap API
    // var temp = await axios.get("http://api.openweathermap.org/data/2.5/weather?q="+loc+"&appid=33822f1189557eb51474aa1a7de27d08");
    // console.log("Forecast : "+temp["data"]["weather"][0]["description"]);
    // console.log("Min Temperature : "+(temp["data"]["main"]["temp_min"]-273.15)+"^C");
    // console.log("Max Temperature : "+(temp["data"]["main"]["temp_max"]-273.15)+"^C");