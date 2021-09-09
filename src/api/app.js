express = require("express");
const app = express();
const fn = require("../utils");

app.get("/", (req, res) => {
  res.status(200).json({ message: "Funcionando!" });
});

app.get("/invert/:param", (req, res) => {
  const { param } = req.params;
  const resultado = fn.invertePalavraRecebida(param);
  res.status(200).json({ palavraInvertida: resultado });
});

module.exports = app;
