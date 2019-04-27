// Configuring the database
import { mongoURI } from "./env";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
