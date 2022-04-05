import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import dbConfig from './db/ormconfig';

createConnection(dbConfig)
  .then(() => {
    const PORT = process.env.PORT ?? 3000;
    console.log("Database running");
    app.listen(PORT, () => console.log(`App is running at localhost:${PORT}`));
  })
  .catch((err) => console.log(err));
