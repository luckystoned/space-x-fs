"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./src/database/spacex.sql",
    entities: ["./dist/entities/**/*{.ts,.js}"],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ["./dist/database/migrations/**/*{.ts,.js}"]
});
