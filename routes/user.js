import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router=express.Router();

let users=[
    // {
    //     fname:"ali", 
    //     lname:"hassan",
    //     age:25
    // }
];

// for get request
router.get('/', (req,res)=>{
    res.send(users);
});

// for post request
router.post('/', (req,res)=>{

    // gets the posted data as json file
    const userraw= req.body
    // includes user id from uuid npm library
    // adds the externol data to json file
    const user={...userraw,id:uuidv4()}
    // pushes the posted data to the json array
    users.push(user)
    res.send(`User with name ${user.fname} has been added to database`);
});

// for get request by id 
router.get('/:id', (req,res)=>{
    const {id} =req.params
    const findid = users.find((user)=>user.id==id);
    res.send(findid);
});

router.delete('/:id', (req,res)=>{
    const {id} =req.params
    users = users.filter((user)=>user.id != id);
    res.send(`User with id ${id} has been deleted`);
});

router.patch('/:id', (req,res)=>{
    const {id} =req.params
    const user = users.find((user)=>user.id==id);
    const {fname , lname , age}= req.body

    if(fname){
        user.fname=fname;
    }
    if(lname){
         user.lname=lname;
    }
    if(age){
         user.age=age; 
    }
    res.send(`User with id ${id} has been updated`);
});

export default router;