import Express from 'express';
// Args
import { port } from './args/args.js';
// Cors
import cors from './cors/cors.js';
import bodyParser from 'body-parser';
import { cookieSecret } from './configs/configs.js';
import cookieParser from 'cookie-parser';
import passport from './passport/passport.js';

//Routers
import notesRouter from './routers/notesRouter.js';
import userRouter from './routers/userRouter.js';

const app = Express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(cookieSecret));
app.use(cors);
app.use(passport.initialize());

app.use('/api/notes', notesRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log('Server is running on port', port);
})