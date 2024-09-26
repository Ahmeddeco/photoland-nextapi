import { DataSource } from "typeorm"
import { Photo } from "./entity/user"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: [Photo],
  subscribers: [],
  migrations: [],
})