

var city_data

let weather_location = "texas"

  async function getWeather() {
    const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${weather_location}`,
        {
          mode: 'cors',
        }
      );
      if (response.status == 404) {
          console.log("error")
          return "None"
      }
      if (response.status == 1006) {
        console.log("unknown location")
        return "None"
      }

      if (response.status == 400) {
        console.log("unknown location")
        return "None"
      }

      else {

      }


    let data = await response.json()
    return data
  }

  

function check_weather_in_city() {
  weather_location = document.getElementById('search_box_input').value
  getWeather().then(data => display_data(data))
}


function display_data(data) {
  console.log(data)
  city_data = data
  document.getElementById('city_name_text').innerHTML = (data['location']['country'])

  document.getElementById('temp_name_text').innerHTML = "current temp: " + (data['current']['temp_f']) + "°"
  document.getElementById('wind_name_text').innerHTML = "wind: " + (data['current']['wind_mph']) + " mph"
  document.getElementById('condtion_name_text').innerHTML = "condition: " + (data['current']['condition']['text'])
  document.getElementById('humidity_name_text').innerHTML = "humidity: " + (data['current']['humidity'])
  document.getElementById('feels_like_name_text').innerHTML = "feels like: " + (data['current']['feelslike_f']) + "°"
}

function c_f_temp(temp_type) {
if (temp_type == "c") {
  document.getElementById('temp_name_text').innerHTML = "current temp: " + (city_data['current']['temp_c']) + "°"
  document.getElementById('feels_like_name_text').innerHTML = "feels like: " + (city_data['current']['feelslike_c']) + "°"
}  

if (temp_type == "f") {
  document.getElementById('temp_name_text').innerHTML = "current temp: " + (city_data['current']['temp_f']) + "°"
  document.getElementById('feels_like_name_text').innerHTML = "feels like: " + (city_data['current']['feelslike_f']) + "°"
}  



}