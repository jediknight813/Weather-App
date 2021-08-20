
let weather_location = "texas"

  async function getWeather() {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${weather_location}`,
        {
          mode: 'cors',
        }
      );
      if (response.status === 404) {
          console.log("error")
      }
      else {

      }


    let data = await response.json()
    return data
  }

  getWeather().then(data => console.log(data))


  

  