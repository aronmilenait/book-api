import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const AppDataSource: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'books.sqlite',
  synchronize: false,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
};
