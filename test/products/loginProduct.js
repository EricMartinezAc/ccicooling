const http = require('http'); 

const loginProduct = async () => {
  const owner = 'arcontroller@climatecontrolsing.com';
  const clav_prodct = 'Arc2025*';
  const data = JSON.stringify({ owner, clav_prodct });

  const options = {
    hostname: 'https://ccicooling.onrender.com',
    port: 1992, 
    path: '/api/ms/products/loginProduct',
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
        console.log('respuesta del servidor:', result);
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

loginProduct();
