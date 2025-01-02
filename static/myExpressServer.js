const express = require("express");
const app = express();

app.use(express.static("puppy lovers design bootstrap responsive"));

app.get("*", (req,res)=>{
    res.send("<h1>Page not found 404<h1>");
});

app.listen(5000,(err)=>{
    if(err)console.log(err);
    console.log("Server runninig on http://localhost:5000");
});