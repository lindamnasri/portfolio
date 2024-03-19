const express = require("express");
const app = express();
const sequelize=require("./database/index.js")




app.listen(3000, () => {
  console.log("app listening");
});
