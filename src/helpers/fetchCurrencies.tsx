async function fetchCurrencies() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;
  const arrayDeObjetos = Object.keys(data).map((chave) => data[chave].code);

  return arrayDeObjetos;
}

export default fetchCurrencies;
