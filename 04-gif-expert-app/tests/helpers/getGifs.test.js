import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs.js', () => {
  
  test('Debe devolver un array de gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });

  test('Debe devolver 0 elementos', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });

})