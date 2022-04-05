import { ConnectionOptions } from "typeorm";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const developmentEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  ssl: false,
  entities: ["./src/entities/*.ts"],
  migrations: ["./src/migrations/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
}

const productionEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["./build/entities/*.js"],
  migrations: ["./build/migrations/*.js"],
  cli: {    
    migrationsDir: "./build/migrations",
  },
  extra: {
  ssl: { rejectUnauthorized: false },
  }
}


module.exports = process.env.NODE_ENV === "production" ? productionEnv : developmentEnv;
