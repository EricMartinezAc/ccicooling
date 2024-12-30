import mongoose from "mongoose"

export default function Conexiondb () {
  console.log( `${process.env.MONGODB_URI}${process.env.MONGODB_URI_config}`)
  mongoose
    .connect(
      `${process.env.MONGODB_URI}${process.env.MONGODB_URI_config}`
    )
    .then(async () => {
      console.log("Database is connected");
    })
    .catch((error) => console.error("Connection error:", error));

  mongoose.set("strictQuery", true);
};

