const axios = require('axios');
const api = axios.create({
    baseURL:'https://guarded-reaches-12590.herokuapp.com/',
});

export default api;