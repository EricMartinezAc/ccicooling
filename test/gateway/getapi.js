// Archivo: getapi.js

// Importación dinámica de 'node-fetch'
(async () => {
  const fetch = (await import('node-fetch')).default;

  const url = "https://ccicooling-1.onrender.com/api/getProductInfo";

  // Función para realizar la solicitud GET
  async function getProductInfo() {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Datos recibidos:", data);
    } catch (error) {
      console.error("Hubo un problema al obtener los datos:", error.message);
    }
  }

  // Ejecutar la función
  getProductInfo();
})();
