import { Router, Request, Response} from "express";
import {validate} from "../validators/transaction";

import {TransactionService} from "../services/TransactionService";

const router = Router();


router.post("/", (req: Request, res: Response) => {


    const t = req.body;
    if (!validate(t)) {
        return res.status(400).json({
            error: true,
            reason: "bad request data"
        });
    }

    const ts: TransactionService = req.app.get('ts');

    const error = ts.doTransaction(t);


    if (error) {
        return res.status(400).json({
            error: true,
            reason: error.reason
        });
    }

    return res.json({
        ok: true,
    });
});


export {router as DebitController}