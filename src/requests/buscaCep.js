const api = require('../utils/apiCep');

const url = '/ws';

async function buscarCep(cep) {
  const response = await api.get(`${url}/${cep}/json`);
  return response.data;
}

module.exports = {
  buscarCep
}


//https://viacep.com.br/ws/29140-755/json/
//https://viacep.com.br/${}/${}/json/
