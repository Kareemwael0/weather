let apikey = "d4f98c6cd2fe5af9f77011c475b455d4 "
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    let response = await fetch ( apiUrl + city + `&appid=${apikey}`)
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + 'km/h';


    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "img\clouds.png";
    }
    else if (data.weather[0].main == "sun"){
        weatherIcon.src = "img\sun.png";

    }else if (data.weather[0].main == "storm"){
        weatherIcon.src = "img\storm.png";

    }else if (data.weather[0].main == "drizzle"){
        weatherIcon.src = "img\drizzle.png";

    }else if (data.weather[0].main == "mist"){
        weatherIcon.src = "img\mist.png";

    } else if (data.weather[0].main == "snow"){
        weatherIcon.src = "img\snow.png";

    }else if (data.weather[0].main == "296"){
        weatherIcon.src = "images/296.png";
    }

}
searchbtn.addEventListener("click", function (){
    checkweather(searchBox.value);
})


checkweather("Saudi Arabia")
