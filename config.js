const prod = process.env.NODE_ENV === "production";

export default {
  production: prod,
  development: !prod,
  apiEndpoint: process.env.API_ENDPOINT
};
