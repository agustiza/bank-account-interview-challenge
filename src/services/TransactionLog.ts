import {Transaction} from "../model/Transaction";


export class TransactionLog {

    private log: Array<Transaction> = []

    append(t: Transaction) {
        this.log.push(t);
    }
}