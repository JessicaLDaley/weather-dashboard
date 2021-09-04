var button = document.querySelector(".btn")
var inputValue = document.querySelector(".inputValue")
var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var uvIndex = document.querySelector(".uv-index");



button.addEventListener("click",function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=95ce02ab9c38e7546c35a13777f50cf6')
  .then(response => response.json())
  .then(data => {

 
var cityValue = data["name"];
var tempValue = data['main']['temp'];
tempValue = ((tempValue-273.15)*1.8)+32;
var humidityValue = data["main"]['humidity'];

var windValue = data["wind"]["speed"];

console.log(data);


city.innerHTML = cityValue;
temp.innerHTML = "Temp: " + tempValue;
humidity.innerHTML = "Humidty: " + humidityValue;
wind.innerHTML = "Wind: " + windValue;




})
.catch(err => alert("Please enter a valid city!"))

})

















    
   

   
   

           


