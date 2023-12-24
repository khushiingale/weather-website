
let weather = 
{
    
    "apiKey" : "fa1fd897bd21a8aeec16bf517c841f9b",

    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        +city+ 
        "&units=metric&appid="+this.apiKey)
        
        .then((response) => {
            if (!response.ok) {
              alert("Check Your city name!");
              throw new Error("No Data found.");
            }
            return response.json();
          })
        .then((data)=>this.displayWeather(data))

    },
    
    displayWeather : function(data){
        const name = data.name;
        const weatherDes = data.weather[0].description;
        const temp = data.main.temp;
        const iconUrl = data.weather[0].icon;
        
        document.querySelector('.city').innerHTML = "Weather in " + name;
        document.querySelector('.temp').innerHTML = "Temperature : " + temp+"°C";
        document.querySelector('.desc').innerHTML = "Description : " + weatherDes;
        document.querySelector('.logo').hidden = false;
        
        document.querySelector('.logo').src  = "https://openweathermap.org/img/wn/" + iconUrl + ".png";
        document.querySelector('.country').innerHTML = "Country : " + data.sys.country;
        document.querySelector('.pressure').innerHTML = "Pressure : " + data.main.pressure + "Pa";
        document.querySelector('.humidity').innerHTML = "Humidity : " + data.main.humidity +" g/m3";
        document.querySelector('.wind-speed').innerHTML = "Wind Speed :  " + data.wind.speed + "m/s";
        
        
    }

}



const btn = document.querySelector('.btn');

btn.addEventListener("click",()=>{
    const value = document.querySelector('.search-bar').value;
    weather.fetchWeather(value);
})

const input = document.querySelector('.search-bar');

input.addEventListener("keypress", function(event) {
   
    if (event.key === "Enter") {
        const value = document.querySelector('.search-bar').value;
        weather.fetchWeather(value);
    }
  });