const express = require("express");
const app = express();


//routes

app.get('/hello',(req,res)=>{
    res.send("Task Management Section");
})








app.listen( "3000",()=>{
    console.log("Server is Up and running");
})

/*

const PORT = 3000;
app.listen(PORT,console.log(`Server is listening on ${PORT}`));

*/

