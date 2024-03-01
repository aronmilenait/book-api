import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'books.sqlite',
  synchronize: false,
  logging: true,
  entities: ['src/typeorm/**/*.ts'],
  migrations: ['typeorm/migrations/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
});

export default AppDataSource;
