import daoNotes from "./daoNotes.js";
import daoNotesCategories from "./daoNotesCategories.js"
import db from './../knex/createDatabase.js';

export const notes = new daoNotes('notes', db)
export const notesCategories = new daoNotesCategories('notes_categories', db);