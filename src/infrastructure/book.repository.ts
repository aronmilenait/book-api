import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/book/domain/book.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async getAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async getById(id: number): Promise<Book | undefined> {
    return this.bookRepository.findOne({ where: { id } });
  }

  async create(bookData: Book): Promise<Book> {
    const book = this.bookRepository.create(bookData);
    return this.bookRepository.save(book);
  }

  async update(bookData: Book): Promise<Book> {
    const existingBook = await this.getById(bookData.id);

    if (!existingBook) {
      throw new NotFoundException('Book with this id was not found');
    }

    this.bookRepository.merge(existingBook, bookData);

    try {
      const updatedBook = await this.bookRepository.save(existingBook);
      return updatedBook;
    } catch (error) {
      console.error('Error updating book:', error);
      throw new InternalServerErrorException('Failed to update book.');
    }
  }

  async delete(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
