import 'dotenv/config';
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT ? Number(process.env.POSTGRES_PORT) : 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    logging: true,
    entities: [".src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/typeorm/migrations/*.ts"],
})

export default AppDataSource;
