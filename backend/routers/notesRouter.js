import { Router } from "express";
import { postNote, getNotesAndCategories, deleteNote, archiveNote } from './../controllers/notesController.js';
import { verifyUserJwt } from './../passport/passport.js';

const notesRouter = Router();

notesRouter.post('/', verifyUserJwt, postNote);
notesRouter.get('/all', getNotesAndCategories);
notesRouter.delete('/:noteId', verifyUserJwt, deleteNote);
notesRouter.put('/archive', verifyUserJwt, archiveNote);

export default notesRouter;

