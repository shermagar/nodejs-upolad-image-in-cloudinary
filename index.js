const express = require('express');
require('dotenv').config()


const app = express();
const PORT = 5000;

//the route 
const router = require("./routes/api")
app.use("/api", router);


//posrt connection 
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});

//cloudinary account:  https://cloudinary.com/signup