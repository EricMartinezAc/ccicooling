const http = require('http');

const sendLocationData = async () => {
  const latitude = 4.6097; // Ejemplo: Bogotá
  const longitude = -74.0817;
  const data = JSON.stringify({ latitude, longitude });

  const options = {
    hostname: 'localhost',
    port: 2026, 
    path: '/api/cpannel',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    },
  };

  const request = http.request(options, (res) => { 
    let responseData = '';

    res.on('data', (chunk) => {
      responseData += chunk;
    });

    res.on('end', () => {
      try {
        const result = JSON.parse(responseData);
        console.log('Datos climáticos:', result);
      } catch (error) {
        console.error('Error al analizar la respuesta:', error.message);
      }
    });
  });

  request.on('error', (error) => {
    console.error('Error en la solicitud:', error.message);
  });

  // Envía los datos
  request.write(data);
  request.end();
};

sendLocationData();
