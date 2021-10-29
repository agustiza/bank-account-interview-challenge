
export type commandType = "DEBIT" | "CREDIT";

export interface Transaction {
    account: string
    command: commandType
    amount: number
}

export interface Invalid {
    reason: string
}