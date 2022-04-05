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
  entities: [path.join(__dirname, "../entities/**/*.*")],
  migrations: [path.join(__dirname, "../migrations/**/*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "../entities"),
    migrationsDir: path.join(__dirname, "../migrations"),
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
  ssl: { rejectUnauthorized: false },
}

module.exports = process.env.NODE_ENV === "production" ? productionEnv : developmentEnv;
