import axios from "axios";

const API_KEY = "3KFVSGWFHWSTVXMJKQRFX4GMC";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
export const fetchLocationId = async (city) => {
  return city;
};

export const fetchWeather = async (location) => {
  try {
    const url = `${BASE_URL}/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    const response = await axios.get(url);
    const data = response.data;

    // Extracting current weather conditions
    const currentConditions = data.currentConditions || data.days[0];
    const hourlyForecast = data.days[5].hours;

    return {
      location: data.address,
      resolvedAddress: data.resolvedAddress,
      timezone: data.timezone,
      datetime: data.datetime,
      weather: currentConditions.conditions,
      temperature: currentConditions.temp,
      windSpeed: currentConditions.windspeed,
      humidity: currentConditions.humidity,
      feelslike: currentConditions.feelslike,
      precipProb: currentConditions.precipprob,
      cloudcover: currentConditions.cloudcover,
      solarradiation: currentConditions.solarradiation,
      uvindex: currentConditions.uvindex,
      sunrise: currentConditions.sunrise,
      sunset: currentConditions.sunset,
      winddir: currentConditions.winddir,
      forecast: data.days.slice(1, 6).map((day) => ({
        date: day.datetime,
        temp: day.temp,
        conditions: day.conditions,
        windSpeed: day.windspeed,
        humidity: day.humidity,
        precipprob: day.precipprob,
        cloudcover: day.cloudcover,
        solarradiation: day.solarradiation,
        uvindex: day.uvindex,
        sunrise: day.sunrise,
        sunset: day.sunset,
        winddir: day.winddir,
        icon: day.icon,
      })),
      // hourlyForecast: processedHourlyForecast

      hourlyForecast,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
