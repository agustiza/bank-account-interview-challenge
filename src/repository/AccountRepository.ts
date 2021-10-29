import {BankAccount} from "../model/BankAccount";
import {Invalid} from "../model/Transaction";


export class AccountRepository {

    private store: {[k:string]: BankAccount} = {}

    get(id: string): BankAccount | null {
        const acc = this.store[id];
        if (!acc) {
            return null
        }
        return acc;
    }

    add(acc: BankAccount): Invalid | void {
        const id = acc.getId()
        const existing = this.store[id]
        if (!existing) {
            this.store[id] = acc
        }

    }
}