const buscaCep = require('./src/requests/buscaCep');

async function returnCep() {
  const endereco = await buscaCep.buscarCep('29140844');
  console.log(endereco)
}

returnCep()