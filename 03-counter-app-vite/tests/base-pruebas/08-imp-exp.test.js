/*
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
*/

import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe devolver un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe devolver undefined si no existe el ID", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();
  });

  test("Debe devolver un array con los 3 héroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(heroes).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
  });

  test("Debe devolver un array con los 2 héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(heroes).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);
  });
});
