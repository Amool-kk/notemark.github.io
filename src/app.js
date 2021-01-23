const express = require('express');
const { join } = require('path');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');
const view_path = path.join(__dirname, '../views');

app.set("views", view_path);
app.set("view engine", "hbs");
app.use(express.static(static_path))


app.get('/', (req,res)=>{
    // res.send("welcome here");
    res.render("index.hbs");
});




app.listen(port, ()=>{
    console.log("connection is done");
})