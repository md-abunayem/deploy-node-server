require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {            //http://localhost:4000
  res.send("Hello World!");
});

app.get("/twitter", (req, res)=>{       //http://localhost:4000/twitter
    res.send("Twitter is here.....");
})

app.get("/login",(req, res)=>{          //http://localhost:4000/login
    res.send("<h1>Log In</h1>")
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
