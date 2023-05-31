import express from "express";
import { generateHash, compareHash } from "../controllers/bcryptController.js";

const router = express.Router();

router.post("/hash", generateHash);
router.post("/compare", compareHash);

export default router;
