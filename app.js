import express from "express";
import bookroutes from './routes/bookroutes.js';
import studentroutes from './routes/studentroutes.js';

const app = express();

app.use('/books', bookroutes);
app.use('/student', studentroutes);

try{
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
}