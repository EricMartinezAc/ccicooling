import axios from 'axios';

const API_KEY = '35a57fc8bd25defa7d15fa6035f20b22'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchClimateData = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const { main, wind, weather } = response.data;

    // Extraccion de datos relevantes
    const climateData = {
      temperature: main.temp, // Temperatura en Celsius
      humidity: main.humidity, // Humedad relativa (%)
      pressure: main.pressure, // Presión atmosférica (hPa)
      windSpeed: wind.speed, // Velocidad del viento (m/s)
      description: weather[0]?.description, // Descripción del clima
    };

    return climateData;
  } catch (error:any) {
    throw new Error(`Error consultando API de clima: ${error.message}`);
  }
};
