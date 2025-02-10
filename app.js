const express = require('express');
const app = express();
const path = require('path');






app.get('/calculator',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});
app.use((req,res)=>{
    res.status(404).send("Page Not Found ! ");
});
module.exports = app;