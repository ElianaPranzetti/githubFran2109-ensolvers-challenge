import { notes, notesCategories } from './../daos/index.js';

export const postNote = (req, res, next) => {
    const { title, content, archived, categories } = req.body;
            console.log({ title, content, archived, categories });
    try {
        if( !req.body.title || !req.body.content ) {
            res.status(400).send('Title and content are required');
        } else {
            
            notes.save({ title, content });
        }
    } catch (error) {
        console.log(error);
    }
}