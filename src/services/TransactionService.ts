import {Invalid, Transaction} from "../model/Transaction";
import {validate} from "../validators/transaction";
import {TransactionLog} from "./TransactionLog";
import {AccountRepository} from "../repository/AccountRepository";


export class TransactionService {

    constructor(private log: TransactionLog, private accRepo: AccountRepository) {

    }

    doTransaction(t: Transaction): Invalid | void {
        if (!validate(t)) {
            return {reason: "Invalid transaction"}
        }

        const acc = this.accRepo.get(t.account);

        if (!acc) {
            return {reason: "Invalid account"}
        }

        try {
            if (t.command == "CREDIT") {
                acc.deposit(t.amount)
            } else if (t.command == "DEBIT") {
                acc.withraw(t.amount)
            } else {
                return {reason: "Invalid transaction type"}
            }
            this.log.append(t)
        } catch (e) {
            return (e instanceof Error)  ? {reason: e.message} : {reason: "unknown"}
        }
    }

}