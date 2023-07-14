const mongoose = require("mongoose");


const connection = () => {
  mongoose
    .connect(
      "mongodb+srv://kishor7008:kishor7008@cluster0.k8gtsqc.mongodb.net/shunyeka",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((res) => {
      console.log("connections is succesfully");
    })
    .catch((error) => {
      console.log("connecton if fail ", error);
    });
};
module.exports=connection
