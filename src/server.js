import express from "express";
import bodyParser from "body-parser";
import { port  } from "./config/env";
import routes from "./routes";
// connect to db
import "./config/db";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var routes from'./src/routes/todoListRoutes');

// config routes
app.use("/", routes);

// listen for requests
app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
