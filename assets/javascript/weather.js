var button = document.querySelector(".btn")
var inputValue = document.querySelector(".inputValue")
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var uvIndex = document.querySelector(".uv-index");



button.addEventListener("click",function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=95ce02ab9c38e7546c35a13777f50cf6')
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert("Please enter a valid city!"))
})

function weatherData(data){
  
}










    
   

   
   

           


