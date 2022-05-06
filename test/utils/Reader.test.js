const Reader = require("../../lib/utils/Reader");

describe("Tests para Reader", () => 
{
    test("Requerimiento 1: Leer archivo", () => {
        const explorers = Reader.readJsonFile("./visualpartners.json");

        expect(explorers.length).toBe(51);
    });
});