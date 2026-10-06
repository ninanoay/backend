import express from "express";
import bookRoutes from './routes/bookroutes.js';

const app = express();

app.use('/books', bookRoutes);

try{
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}