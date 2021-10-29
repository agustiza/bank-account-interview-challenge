


export class BankAccount {

    private balance = 0;

    constructor(private id: string, initialBalance: number) {
        if (initialBalance > 0) {
            this.balance = initialBalance;
        } else {
            throw Error("Balance cannot have a negative balance");
        }

        if (!(typeof id == "string" && id)) {
            throw Error("Invalid id");
        }
    }

    withraw(amount: number) {
        if (amount <= 0) {
            throw Error("Withraw can't be negative");
        }

        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            throw Error("Insuficient funds");
        }
    }

    deposit(amount: number) {
        if (amount <= 0) {
            throw Error("Deposit can't be negative");
        }

        this.balance += amount;
    }

    getCurrentBalance() {
        return this.balance;
    }

    getId(): string {
        return this.id;
    }
}