let now = new Date();

    
        let dateElement = document.querySelector("#date");
    

        let date = now.getDate();
        let hours = now.getHours() % 12 || 12;;
        let minutes = now.getMinutes();
        let year = now.getFullYear();
        

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        days
        let day = days[now.getDay()]; 

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[now.getMonth()];
       


        dateElement.innerHTML = `${day} ${month} ${date}, ${year} ${hours}:0${minutes}`;


function displayTemperature(response) {

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    
     let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML =Math.round (response.data.main.humidity);
    
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
    
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

    iconElement.setAttribute("alt, response.data.weather[0].description);")
   
}

function search(city) {
    let apiKey = "8f64ba8aed726b6e04d4af5e8025ebf4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);