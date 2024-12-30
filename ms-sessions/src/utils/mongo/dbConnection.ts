const mongoose = require("mongoose");


const Conexiondb = (dominio:string) => {
  mongoose
    .connect(
      `${process.env.MONGODB_URI}${dominio}${process.env.MONGODB_URI_config}`
    )
    .then(async () => {
      console.log("Database is connected");
    })
    .catch((error:any) => console.error("Connection error:", error));

  mongoose.set("strictQuery", true);
};

module.exports = Conexiondb;
