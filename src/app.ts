import express from "express";
import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import {routes} from "./routes";

import {AccountRepository} from "./repository/AccountRepository";
import {TransactionLog} from "./services/TransactionLog";
import {TransactionService} from "./services/TransactionService";
import {BankAccount} from "./model/BankAccount";

export class App {
    public app: express.Application;

    constructor() {
        this.app = express(); // run the express instance and store in app
        this.config();
    }

    private config(): void {

        const ar = new AccountRepository()
        ar.add(new BankAccount("12345", 1000))

        const log = new TransactionLog()
        const transactionService = new TransactionService(log, ar)

        this.app.set('ts', transactionService)
        this.app.set('ar', ar)

        this.app.use(bodyParser.json());
        this.app.use(
            bodyParser.urlencoded({
                extended: false
            })
        );

        this.app.use("/api/v1", routes);
    }
}