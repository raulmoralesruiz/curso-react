import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe devolver "Hola Juan"', () => {
    const name = "Juan";
    const saludo = getSaludo(name);
    expect(saludo).toBe(`Hola ${name}`);
  });
});
