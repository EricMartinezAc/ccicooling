
// Archivo: postapi.js

(async () => {
  const fetch = (await import('node-fetch')).default;

  const url = "https://ccicooling.onrender.com/api/ms/products/findProduct";

  const findProduct = async () => {

    const _id = '67736fb6a5da74e14a20da91';
    const data = JSON.stringify({ _id });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      },
      body: data
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('respuesta del servidor:', result);
    } catch (error) {
      console.error('Error al enviar los datos:', error.message);
    }
  };

  // Llamar a la función para realizar la solicitud
  findProduct();
})();
