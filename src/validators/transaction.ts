import {Transaction} from "../model/Transaction";


export function validate(t: Transaction): t is Transaction {
    return (
        Object.keys(t).length == 3
        && t.amount >= 0
        && Number.isInteger(t.amount)
        // @ts-ignore next-line
        && typeof t.account == "string"
        && t.account.length > 0
        && (t.command == "DEBIT" || t.command == "CREDIT")
    )
}