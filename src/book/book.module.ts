import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './domain/book.entity';
import { BookController } from './interface/book.controller';
import { BookService } from './services/book.service';
import { BookRepository } from 'src/infrastructure/book.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService, BookRepository],
  exports: [BookService],
})
export class BookModule {}
