import { Router } from 'express';
import { verifyUserJwt } from './../passport/passport.js';
import { postCategory } from './../controllers/categoriesController.js';

const categoriesRouter = Router();

categoriesRouter.post('/', verifyUserJwt, postCategory);

export default categoriesRouter;