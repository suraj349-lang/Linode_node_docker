const express=require('express');
const fs=require('fs');
const app=express();
const port= process.env.PORT || 5000

app.get('/',(req,res)=>{
    fs.readFile('./home.html','utf-8',(err,html)=>{
        if(err){
            res.send('service not available')
        }
        res.send(html)

    })
})



app.listen(3001,()=>{
    console.log(`Listening on ${port}`)
});