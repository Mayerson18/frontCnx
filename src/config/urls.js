// Esto es una mala practica, sin embargo para este caso la idea es asegurarme de que existe una url
// Y puedan probar el proyecto
export const ENDPOINT = process.env.REACT_APP_URL_API
  ? process.env.REACT_APP_URL_API
  : "http://localhost:7071/api";
