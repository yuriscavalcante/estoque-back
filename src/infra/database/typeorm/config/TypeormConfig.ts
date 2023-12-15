import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

const typeormConfigs: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  ssl: true,
  synchronize: false,
  migrationsRun: true,
  entities: ['dist/application/entities/*{.ts,.js}'],
  migrations: ['dist/infra/database/typeorm/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
};
export { typeormConfigs };
