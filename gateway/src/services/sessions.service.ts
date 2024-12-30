import axios from 'axios';

const BASE_URL = 'http://localhost:1992/';

export const userAuth = async (user: string, psw: string) => {
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
  } catch (error: any) {
    throw new Error(`Error consultando API de clima: ${error.message}`);
  }
};
export const userRegister = async (email: string, user: string, psw: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        email,
        user,
        psw
      },
    });

    const { emailResponse, userResponse } = response.data;

    // Extraccion de datos relevantes
    const resolve = {
      code: 200, // http
      email: emailResponse,
      user: userResponse
    };

    return resolve;
  } catch (error: any) {
    throw new Error(`Error consultando API de clima: ${error.message}`);
  }
};


