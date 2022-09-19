import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  
  test("Debe devolver un string y un número", () => {

    const retorno = retornaArreglo(); // ['ABC', 123]
    expect(retorno).toEqual(['ABC', 123]);
    expect(typeof retorno[0]).toBe('string');
    expect(typeof retorno[1]).toBe('number');

    const [letters, numbers] = retornaArreglo(); // ['ABC', 123]
    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');
    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');

  });

});