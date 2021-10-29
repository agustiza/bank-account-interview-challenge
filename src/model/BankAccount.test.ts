import {BankAccount} from "./BankAccount";

describe('bank account', () => {

    test('should create a bank account', () => {
        const b = new BankAccount('12345', 1000)

        expect(b).toBeInstanceOf(BankAccount)
    });

    test('should not allow creating a bank account with negative balance', () => {

        expect(()=>new BankAccount('12345', -1000)).toThrow()
    });

    test('should allow to deposit', () => {
        const b = new BankAccount("12345", 1000)

        b.deposit(1000)

        expect(b.getCurrentBalance()).toBe(2000)
    });

    test('should allow to withdraw', () => {
        const b = new BankAccount("12345", 1000)

        b.withraw(1000)

        expect(b.getCurrentBalance()).toBe(0)
    });

    test('should not allow overdraw', () => {
        const b = new BankAccount("12345", 1000)

        expect(()=> b.withraw(10000)).toThrow()
    });

    test('should not allow negative deposit', () => {
        const b = new BankAccount("12345", 1000)

        expect(()=> b.deposit(-1)).toThrow()
    });

    test('should not allow negative withdraw', () => {
        const b = new BankAccount("12345", 1000)

        expect(()=> b.withraw(-1)).toThrow()
    });
});