
describe("Test de la fonction mailChecker",() => {

    test("Email ne contenant pas '@': email invalide",() =>{
        expect(mailChecker("abcgmail.com")).toBe(false);
    });

});