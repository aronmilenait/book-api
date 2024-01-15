import { Injectable } from '@nestjs/common';
import { BookRepository } from 'src/infrastructure/book.repository';
import { Book } from '../domain/book.entity';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}
  async getAll(): Promise<Book[]> {
    return this.bookRepository.getAll();
  }
  async create(book: Book): Promise<Book> {
    return this.bookRepository.create(book);
  }

  async getById(id: number): Promise<Book | undefined> {
    return this.bookRepository.getById(id);
  }

  async update(book: Book): Promise<Book> {
    return this.bookRepository.update(book);
  }

  async delete(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
