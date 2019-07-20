const axios = require("axios");
module.exports = async function location() {
    // async function helper(loc){
    var ip;
    var city;
    ip=await axios.get("http://ip-api.com/json/");
    city = ip["data"]["city"];
    return city;
    // console.log(ip);
}
