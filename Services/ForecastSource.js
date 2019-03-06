const API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_ADDRESS = "http://api.openweathermap.org/data/2.5/forecast/daily?";

const daysOfForecast = 4;

function cityUrl(city) {
  return `${API_ADDRESS}q=${city}&cnt=${daysOfForecast}&APPID=${API_KEY}&lang=pl`;
}

function getForecast(url) {
  return fetch(url)
    .then(response => response.json())
    .then(responseJSON => {
      if (responseJSON.cod !== "404") {
        let list = [];
        let today = new Date();
        console.log(today);
          for (let i = 0; i < daysOfForecast; i++) {
            let day = today.getDay() + i;
            console.log(day);
            list.push({
                main: responseJSON.list[i].weather[0].main,
                date: day,
                icon: responseJSON.list[i].weather[0].icon,
                temp: responseJSON.list[i].temp.day
            });
        }

        return list;
      } else {
        return null;
      }
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
