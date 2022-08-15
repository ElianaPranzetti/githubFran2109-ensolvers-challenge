import { notes, categories, notesCategories } from './../daos/index.js';
import { getDate } from '../utils/utils.js';

export const postNote = async (req, res, next) => {
    const { title, content, archived, categories } = req.body;
    try {
        if( !req.body.title || !req.body.content ) {
            res.status(400).send('Title and content are required');
        } else {
            const created_at = getDate();
            const noteId = await notes.save({ title, content, archived, created_at, updated_at: created_at });
            notesCategories.saveMultiple({ noteId, categories });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getNotesAndCategories = async (req, res, next) => {
    try{
        const allNotes = await notes.getAll();
        const allCategories = await categories.getAll();
        res.status(200).json({ notes: allNotes, categories: allCategories });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteNote = async (req, res, next) => {
    const { noteId } = req.params;
    try {
        await notesCategories.deleteMultiple(noteId);
        const idDeleted = await notes.delete(noteId);
        res.status(200).json(idDeleted);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const archiveNote = async (req, res, next) => {
    const { note } = req.body;
    try {
        const idArchived = await notes.archive(note.id, note.archived);
        res.status(200).json(idArchived);
    } catch (error) {
        res.status(500).send(error);
    }
}