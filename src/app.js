const express=require("express");
const path=require("path");
const app=express();
require("./db/conn");

const ststic_path=path.join
app.use(express.static())

const port=process.envPORT || 3000;

app.get("/",(req,res) => {
    res.send("hello")
});

app.listen(port,() => {
    console.log(`server is running at port no ${port}`);
})