
const apikey="a1d0863d42eb6e1ea87b89c7ee457797";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector('.search input');
const searchbtn=document.querySelector('.search button');

const weathericon=document.querySelector('.weather-icon')



async function checkweather(city){
    const response=await fetch(apiurl+ city +`&appid=${apikey}`)

    if(response.status==404){
        document.querySelector(".error").style.display="block"
    }else{
        var data=await response.json();
        document.querySelector(".error").style.display="none"

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").textContent=Math.round(data.main.temp )+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").textContent=data.wind.speed + "km/hr";



        if(data.weather[0].main=="Clouds"){
            weathericon.src="weather-app-img/images/clouds.png"
        }
        else if (data.weather[0].main=="Clear"){
            weathericon.src="weather-app-img/images/clear.png"
        }
        else if (data.weather[0].main=="Rain"){
            weathericon.src="weather-app-img/images/rain.png"
        }
        else if (data.weather[0].main=="Drizzle"){
            weathericon.src="weather-app-img/images/drizzle.png"
        }
        else if (data.weather[0].main=="Mist"){
            weathericon.src="weather-app-img/images/mist.png"
        }
        else if (data.weather[0].main=="Snow"){
            weathericon.src="weather-app-img/images/snow.png"
        }
    } 
    console.log(data)   
}


searchbtn.onclick=()=>{
    checkweather(searchbox.value)

}