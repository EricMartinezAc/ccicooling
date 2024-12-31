const http = require('http'); 

const findProduct = async () => {
  const _id = '67736fb6a5da74e14a20da91';
  const data = JSON.stringify({ _id });

  const options = {
    hostname: 'localhost',
    port: 1992, 
    path: '/api/ms/products/findProduct',
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

findProduct();
