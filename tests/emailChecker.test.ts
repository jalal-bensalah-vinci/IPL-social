import emailChecker from "../src/emailChecker";

describe("Test de la fonction emailChecker",() => {

    test("Email ne contenant pas '@': email invalide",() =>{
        expect(emailChecker("abcgmail.com")).toBe(false);
    });

    test("Email ne contenant pas de point dans le nom de domaine: email invalide",() =>{
        expect(emailChecker("abc@gmailcom")).toBe(false);
    });

    test("Email ayant comme dernier caractère un point: email invalide",() =>{
        expect(emailChecker("abc@gmailcom")).toBe(false);
    });

    test("Email contenant des espace: email invalide",() =>{
        expect(emailChecker("abc @ gmail.com")).toBe(false);
    });

    test("Email ne contient pas de texte avant le '@': email invalide",() =>{
        expect(emailChecker("@gmail.com")).toBe(false);
    });

    test("Email ne contient pas de texte après le '@': email invalide",() =>{
        expect(emailChecker("abc@")).toBe(false);
    });

    test("Email valide",() =>{
        expect(emailChecker("abc@gmail.com")).toBe(true);
    });
});