import {Request, Response, Router} from "express";
import {AccountRepository} from "../repository/AccountRepository";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    const accId: string = req.query.id as string

    if (!accId) {
        res.status(400).json( {
            error: true,
            reason: "Missing id query params"
        })
    }

    const ar: AccountRepository = req.app.get('ar')

    const acc = ar.get(accId);

    if (!acc) {
        return res.status(400).json( {
            error: true,
            reason: "No account found with id"
        })
    }

    return res.json({
        currentBalance: acc.getCurrentBalance()
    });


});


export {router as AccountController}