
describe("Test de la fonction mailChecker",() => {

    test("Email ne contenant pas '@': email invalide",() =>{
        expect(mailChecker("abcgmail.com")).toBe(false);
    });

    test("Email ne contenant pas de point dans le nom de domaine: email invalide",() =>{
        expect(mailChecker("abc@gmailcom")).toBe(false);
    });

    test("Email contenant des espace: email invalide",() =>{
        expect(mailChecker("abc @ gmail.com")).toBe(false);
    });

    test("Email ne contient pas de texte avant le '@': email invalide",() =>{
        expect(mailChecker("@gmail.com")).toBe(false);
    });

    test("Email ne contient pas de texte après le '@': email invalide",() =>{
        expect(mailChecker("abc@")).toBe(false);
    });

    test("Email valide",() =>{
        expect(mailChecker("abc@gmail.com")).toBe(true);
    });
});