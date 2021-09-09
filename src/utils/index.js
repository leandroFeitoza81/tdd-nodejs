const invertePalavraRecebida = (palavra) => {
  if (typeof palavra != "string") return "Informe um parametro do tipo string";

  let palavraInvertida = "";

  for (i = palavra.length; i > 0; i--) {
    palavraInvertida += palavra[i - 1];
  }
  return palavraInvertida;
};

module.exports = {
  invertePalavraRecebida,
};
