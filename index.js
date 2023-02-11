const express=require('express');
const fs=require('fs');
const app=express();
const port=3000 || process.env.port

app.get('/',(req,res)=>{
    fs.readFile('./home.html','utf-8',(err,html)=>{
        if(err){
            res.send('service not available')
        }
        res.send(html)

    })
})



app.listen(3001,()=>{
    console.log(`Listening on 3000`)
});