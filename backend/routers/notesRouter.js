import { Router } from "express";
import { postNote } from './../controllers/notesController.js';

const notesRouter = Router();

notesRouter.post('/', postNote);

export default notesRouter;

