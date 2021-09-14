import express from 'express';
import bodyParser from "body-parser";
import users from './routes/user.js'

const app = express ();
const PORT =5000;

app.use(bodyParser.json());

app.use('/users',users);

app.get('/', (req,res)=>{
    res.send('home page');
})
 

app.listen (PORT, ()=>console.log(`Server running on port : http://localhost:${PORT}`))
