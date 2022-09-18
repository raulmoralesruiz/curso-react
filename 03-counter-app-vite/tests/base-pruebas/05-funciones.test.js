// import { getSaludo } from "../../src/base-pruebas/02-template-string";

import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {

  test('getUser debe devolver un objeto', () => {

    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(user).toEqual(userTest);

  });

  test('getUsuarioActivo debe devolver un objeto', () => {
    
    const nombre = "Juan";
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);
    expect(user).toEqual(userTest);

  });

});
