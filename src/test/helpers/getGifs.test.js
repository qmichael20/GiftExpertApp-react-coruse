import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getFifd fetch", () => {
  test("Traer 10 elementos", async () => {
    const gifs = await getGifs("Goku");
    expect(gifs.length).toBe(10);
  });
});
