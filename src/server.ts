import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import { productionEnv, developmentEnv } from '../ormconfig'

// createConnection();
createConnection()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    console.log("Database running");
    app.listen(PORT, () => console.log(`App is running at localhost:${PORT}`));
  })
  .catch((err) => console.log(err));

// app.listen(process.env.PORT || 3000, () => console.log(`${process.env.PORT}`)); 
