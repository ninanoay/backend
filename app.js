import express from "express"; 
import bookroutes from './routes/bookroutes.js';
import studentroutes from './routes/studentroutes.js';
import userRoute from "./routes/userRoutes.js";  

let corsOptions = {
    origin: 'http://localhost:5173',
}

const app = express();
app.use(express.json());
app.use('/book', bookroutes);
app.use('/student', studentroutes);
app.use('/user', userRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`listening to port ${port}...`);
});

