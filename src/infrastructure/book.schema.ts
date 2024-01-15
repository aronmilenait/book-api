import { Book } from 'src/book/domain/book.entity';
import { EntitySchema } from 'typeorm';

export const BookSchema = new EntitySchema<Book>({
  name: 'Book',
  target: Book,
  tableName: 'books',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    title: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      nullable: true,
    },
  },
});
