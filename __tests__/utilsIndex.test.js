const fn = require("../src/utils");

describe("Testa o arquivo index.js em src/utils", () => {
  it("Testa a função invertePalavraRecebida retorna a palavra invertida", () => {
    const resultado = fn.invertePalavraRecebida("amarelo");
    expect(resultado).toEqual("olerama");
  });
  it("Testa se a função retorna erro cso não receba uma string como parametro", () => {
    const resultado = fn.invertePalavraRecebida(123);
    expect(resultado).toBe("Informe um parametro do tipo string");
  });
});
