import {Transaction} from "../model/Transaction";
import {validate} from "./transaction";


describe('validators',()=>{

    test('should validate transaction commands',()=>{
        const t: Transaction = {
            amount: 1000,
            command: "DEBIT",
            account: "12345",
        }

        expect(validate(t)).toBe(true);
    })

    test('should only allow DEBIT CREDIT commands',()=>{
        // @ts-ignore
        const t: Omit<Transaction,'command'> & { command: "ASD" } = {
            amount: 1000,
            command: "ASD",
            account: "12345",
        }

        expect(validate(<Transaction><unknown>t)).toBe(false);
    })

    test('should only allow positive amounts',()=>{
        // @ts-ignore
        const t: Transaction = {
            amount: -1000,
            command: "DEBIT",
            account: "12345",
        }

        expect(validate(t)).toBe(false);
    })

    test('should only allow integers',()=>{
        // @ts-ignore
        const t: Transaction = {
            amount: 1000.5,
            command: "DEBIT",
            account: "12345",
        }

        expect(validate(t)).toBe(false);
    })
})