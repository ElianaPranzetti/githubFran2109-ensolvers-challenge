import { categories } from "../daos/index.js";

export const postCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const categoryId = await categories.save({ name });
        res.status(200).json({ id: categoryId, name });
    }
    catch(err){
        res.status(500).json(err);
    }
}