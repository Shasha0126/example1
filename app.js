const express=require('express');
const app=express();
const port=4000;

require('dotenv').config();


app.listen(process.env.PORT,()=>{
    console.log(`listening in ${port}`);
})