import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-desestructuracion", () => {
  
  test("usContext debe devolver un objeto", () => {
    const clave = "mayor";
    const edad = 22;

    const getContext = usContext({ clave, edad });

    const testContext = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    expect(getContext).toEqual(testContext);
  });
});
