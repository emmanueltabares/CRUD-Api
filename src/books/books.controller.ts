import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service'; //Importación del servicio que proporciona los datos

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {} //	Constructor con el servicio inyectado

  @Get() // Decorador para indicar la ruta atendida y el método HTTP
  findAll() {
    //	Método asociado a la petición
    return this.bookService.findAll(); //	Llamada al método del servicio que resuelve la petición
  }
}
