import emailChecker from "../src/emailChecker";

describe("Testing the emailChecker function",() => {

    test("Email does not contain '@': invalid email",() =>{
        expect(emailChecker("abcgmail.com")).toBe(false);
    });

    test("Email does not contain a dot in the domain name: invalid email",() =>{
        expect(emailChecker("abc@gmailcom")).toBe(false);
    });

    test("Email ending with a dot: invalid email",() =>{
        expect(emailChecker("abc@gmail.com.")).toBe(false);
    });

    test("Email containing spaces: invalid email",() =>{
        expect(emailChecker("abc @ gmail.com")).toBe(false);
    });

    test("Email does not contain text before the '@': invalid email",() =>{
        expect(emailChecker("@gmail.com")).toBe(false);
    });

    test("Email does not contain text after the '@': invalid email",() =>{
        expect(emailChecker("abc@")).toBe(false);
    });

    test("Valid email address",() =>{
        expect(emailChecker("abc@gmail.com")).toBe(true);
    });
});