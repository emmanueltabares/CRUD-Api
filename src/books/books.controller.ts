import { Controller, Get, Param, Req } from '@nestjs/common';
import { BooksService } from './books.service'; //Importación del servicio que proporciona los datos
import { Request } from 'express';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {} //	Constructor con el servicio inyectado

  @Get() // Decorador para indicar la ruta atendida y el método HTTP
  findAll(@Req() request: Request) {
    return this.booksService.findAll(request.query);
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.booksService.findBook(bookId);
  }
}
