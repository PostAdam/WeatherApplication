const API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_ADDRESS = "http://api.openweathermap.org/data/2.5/weather?";

function cityUrl(city) {
    return `${API_ADDRESS}q=${city}&APPID=${API_KEY}&lang=pl`;
}

function getForecast(url) {
    return fetch(url)
        .then(response => response.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                icon: responseJSON.weather[0].icon,
                temp: responseJSON.main.temp
            };
        })
        .catch(error => {
            console.error(error);
        });
}

function getForecastForCity(city) {
    return getForecast(cityUrl(city));
}

export default {
    getForecastForCity: getForecastForCity
};
