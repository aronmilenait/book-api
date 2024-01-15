import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { BookRepository } from 'src/infrastructure/book.repository';
import { Book } from '../domain/book.entity';
import { Param } from '@nestjs/common';

@Controller('book')
export class BookController {
  constructor(private readonly bookRepository: BookRepository) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return this.bookRepository.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Book> {
    const book = await this.bookRepository.getById(id);

    if (!book) {
      throw new NotFoundException('Book with this ID was not found');
    }

    return book;
  }

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return this.bookRepository.create(book);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() book: Book): Promise<Book> {
    return this.bookRepository.update(book);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
