import Express from 'express';
import { port } from './args/args.js';
import cors from './cors/cors.js';
import bodyParser from 'body-parser';
import notesRouter from './routers/notesRouter.js';

const app = Express();

app.use(bodyParser.json());
app.use(cors);

app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log('Server is running on port', port);
})