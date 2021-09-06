var button = document.querySelector(".btn")
var inputValue = document.querySelector(".inputValue")
var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var uvIndex = document.querySelector(".uv-index");





button.addEventListener("click", function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=95ce02ab9c38e7546c35a13777f50cf6')
    .then(response => response.json())
    .then(data => {


      var cityValue = data["name"];
      var tempValue = data['main']['temp'];
      tempValue = Math.round(((tempValue - 273.15) * 1.8) + 32);
      var humidityValue = data["main"]['humidity'];

      var windValue = data["wind"]["speed"];

      console.log(data);


      city.innerHTML = cityValue;
      temp.innerHTML = "Temp: " + tempValue + "&#xb0; F";
      humidity.innerHTML = "Humidty: " + humidityValue + "%";
      wind.innerHTML = "Wind: " + windValue + " mph";

      updateSearchHistory(cityValue);




    })
    .catch(err => alert("Please enter a valid city!"))

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=95ce02ab9c38e7546c35a13777f50cf6")
    .then(response => response.json())
    .then(data => {
      let j = 1;
      console.log(data);
      for (let i = 0; i < data.list.length; i++) {
       if (data.list[i].dt_txt.substring(10, 13) == 12) {
          console.log("found element " + data.list[i].dt_txt);
          var cardTitle = document.querySelector("h5.card-title" + j); 
          var cardText = document.querySelector("p.card-text" + j);
          var tempValue = data.list[i].main.temp;
          tempValue = Math.round(((tempValue - 273.15) * 1.8) + 32);
          cardTitle.innerHTML = data.list[i].dt_txt.substring(0, 11);


          var picture_url;
          var nomatch = false;
          if (data.list[i].weather[0].description == "clear sky") {
            picture_url = "http://openweathermap.org/img/wn/01d@2x.png"

          } else if (data.list[i].weather[0].description == "few clouds") {
            picture_url = "http://openweathermap.org/img/wn/02d@2x.png"

          } else if (data.list[i].weather[0].description == "scattered clouds") {
            picture_url = "http://openweathermap.org/img/wn/03d@2x.png"

          } else if (data.list[i].weather[0].description == "broken clouds") {
            picture_url = "http://openweathermap.org/img/wn/04d@2x.png"

          } else if (data.list[i].weather[0].description == "shower rain") {
            picture_url = "http://openweathermap.org/img/wn/05d@2x.png"

          } else if (data.list[i].weather[0].description == "rain") {
            picture_url = "http://openweathermap.org/img/wn/06d@2x.png"

          } else if (data.list[i].weather[0].description == "thunderstorm") {
            picture_url = "http://openweathermap.org/img/wn/07d@2x.png"

          } else if (data.list[i].weather[0].description == "snow") {
            picture_url = "http://openweathermap.org/img/wn/08d@2x.png"


          } else if (data.list[i].weather[0].description == "mist") {
            picture_url = "http://openweathermap.org/img/wn/09d@2x.png"

          } else { nomatch = true; }

          if (!nomatch) {
            cardText.innerHTML = "<img src=" + picture_url + "><br/> Temp: " + tempValue + "<br/> Wind: " + data.list[i].wind.speed + "<br/> Humidity: " + data.list[i].main.humidity;
          } else {
            cardText.innerHTML = "Temp: " + tempValue + "<br/> Wind: " + data.list[i].wind.speed + "<br/> Humidity: " + data.list[i].main.humidity;
          }







          j = j + 1;



        }
      }

    })
})




function updateSearchHistory(city) {




  var searchHistory = localStorage.getItem(city);

  if (searchHistory === null) {
    localStorage.setItem(city, "0")

  }



  if (localStorage.length > 0) {



   
    var myStorage = window.localStorage;

    for (let i = 0; i < localStorage.length; i++) {
     var searchHistoryBtn = document.getElementsByClassName("historyBtns");
      searchHistoryBtn[i].innerHTML = myStorage.key(i);

    }
  }


}





function updateSearch() {
  var newSearch = this.innerHTML;

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + newSearch + '&appid=95ce02ab9c38e7546c35a13777f50cf6')
    .then(response => response.json())
    .then(data => {


      var cityValue = data["name"];
      var tempValue = data['main']['temp'];
      tempValue = ((tempValue - 273.15) * 1.8) + 32;
      var humidityValue = data["main"]['humidity'];

      var windValue = data["wind"]["speed"];

      console.log(data);


      city.innerHTML = cityValue;
      temp.innerHTML = "Temp: " + tempValue + "&#xb0; F";
      humidity.innerHTML = "Humidty: " + humidityValue + "%";
      wind.innerHTML = "Wind: " + windValue + " mph";
    })

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + newSearch + "&appid=95ce02ab9c38e7546c35a13777f50cf6")
    .then(response => response.json())
    .then(data => {
      let j = 1;
      console.log(data);
      for (let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.substring(10, 13) == 12) {
          console.log("found element " + data.list[i].dt_txt);
          var cardTitle = document.querySelector("h5.card-title" + j); 
          var cardText = document.querySelector("p.card-text" + j);
          var tempValue = data.list[i].main.temp;
          tempValue = Math.round(((tempValue - 273.15) * 1.8) + 32);
          cardTitle.innerHTML = data.list[i].dt_txt.substring(0, 11);
          var picture_url;
          var nomatch = false;
          if (data.list[i].weather[0].description == "clear sky") {
            picture_url = "http://openweathermap.org/img/wn/01d@2x.png"

          } else if (data.list[i].weather[0].description == "few clouds") {
            picture_url = "http://openweathermap.org/img/wn/02d@2x.png"

          } else if (data.list[i].weather[0].description == "scattered clouds") {
            picture_url = "http://openweathermap.org/img/wn/03d@2x.png"

          } else if (data.list[i].weather[0].description == "broken clouds") {
            picture_url = "http://openweathermap.org/img/wn/04d@2x.png"

          } else if (data.list[i].weather[0].description == "shower rain") {
            picture_url = "http://openweathermap.org/img/wn/05d@2x.png"

          } else if (data.list[i].weather[0].description == "rain") {
            picture_url = "http://openweathermap.org/img/wn/06d@2x.png"

          } else if (data.list[i].weather[0].description == "thunderstorm") {
            picture_url = "http://openweathermap.org/img/wn/07d@2x.png"

          } else if (data.list[i].weather[0].description == "snow") {
            picture_url = "http://openweathermap.org/img/wn/08d@2x.png"


          } else if (data.list[i].weather[0].description == "mist") {
            picture_url = "http://openweathermap.org/img/wn/09d@2x.png"

          } else { nomatch = true; }

          if (!nomatch) {
            cardText.innerHTML = "<img src=" + picture_url + "><br/> Temp: " + tempValue + "<br/> Wind: " + data.list[i].wind.speed + "<br/> Humidity: " + data.list[i].main.humidity;
          } else {
            cardText.innerHTML = "Temp: " + tempValue + "<br/> Wind: " + data.list[i].wind.speed + "<br/> Humidity: " + data.list[i].main.humidity;
          }







          j = j + 1;



        }
      }

    })
}

function getHistoryValue() {
  document.getElementById("historyBtn1").addEventListener("click", updateSearch, false);
  document.getElementById("historyBtn2").addEventListener("click", updateSearch, false);
  document.getElementById("historyBtn3").addEventListener("click", updateSearch, false);
  document.getElementById("historyBtn4").addEventListener("click", updateSearch, false);
  document.getElementById("historyBtn5").addEventListener("click", updateSearch, false);
  document.getElementById("historyBtn6").addEventListener("click", updateSearch, false);
  document.getElementById("historyBtn7").addEventListener("click", updateSearch, false);
  document.getElementById("historyBtn8").addEventListener("click", updateSearch, false);



  var myStorage = window.localStorage;

  for (let i = 0; i < localStorage.length; i++) {
    var searchHistoryBtn = document.getElementsByClassName("historyBtns");
    searchHistoryBtn[i].innerHTML = myStorage.key(i);

  }


}












getHistoryValue();


