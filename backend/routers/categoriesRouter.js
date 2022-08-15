import { Router } from 'express';
import { verifyUserJwt } from './../passport/passport.js';
import { postCategory, getCategories } from './../controllers/categoriesController.js';

const categoriesRouter = Router();

categoriesRouter.post('/', verifyUserJwt, postCategory);
categoriesRouter.get('/', getCategories);

export default categoriesRouter;