import { categories } from "../daos/index.js";

export const postCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const categoryId = await categories.saveIfDontExist(name);
        if(categoryId){
            res.status(200).json({ id: categoryId, name: name });
        } else {
            res.status(400).json({message: 'Category already exists'});
        }
    }
    catch(err){
        res.status(500).json(err);
    }
}

export const getCategories = async (req, res) => {
    try{
        const allCategories = await categories.getAll();
        res.status(200).json(allCategories);
    }
    catch(err){
        res.status(500).json(err);
    }
}