
// Archivo: postapi.js

(async () => {
  const fetch = (await import('node-fetch')).default;

  const url = "https://ccicooling-ms-sessions.onrender.com/api/ms-session/regtrSession";

  const regtrUser = async () => {

    const owner = 'arcontroller@climatecontrolsing.com'
    const clav_prodct = 'Arc2025*'

    const user = 'User1*';
    const pswLogin = 'Passw@1';
    const data = JSON.stringify({ owner, clav_prodct, user, pswLogin });



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
  regtrUser();
})();
