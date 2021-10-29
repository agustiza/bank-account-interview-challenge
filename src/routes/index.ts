import {Router} from "express";

import { DebitController} from "./debit";
import { AccountController } from "./account";

const router = Router();

router.use("/account", AccountController)
router.use("/debit", DebitController);

export {router as routes};