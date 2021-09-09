const request = require("supertest");
const app = require("../src/api/app");

describe("Testa o app", () => {
  it("Testa se ao chamar a rota /invert/palavra-a-ser-invertida", async () => {
    const response = await request(app).get("/invert/gato");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("palavraInvertida");
    expect(response.body.palavraInvertida).toEqual("otag");
  });
});
