

// Archivo: postapi.js

(async () => {
  const fetch = (await import('node-fetch')).default;

  const url = "https://ccicooling-ms-sessions.onrender.com/api/ms-session/authSession";

  const authUser = async () => {

    const id = '67736988a5da74e14a20da90'
    const user = 'User1*';
    const pswLogin = 'Passw@1';
    const data = JSON.stringify({ id, user, pswLogin });
  

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
  authUser();
})();
