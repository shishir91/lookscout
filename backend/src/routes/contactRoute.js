import { Router } from "express";
import ContactController from "../controllers/contactController.js";

const router = new Router();
const contactController = new ContactController();

router.post("/addContact", contactController.addContact);

export default router;
