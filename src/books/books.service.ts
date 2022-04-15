import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll(params): any {
    let msg = `findAll funcionando. Parámetros:`;

    if (params.order !== undefined) {
      msg = msg + ` order: ${params.order}`;
    }

    if (params.limit !== undefined) {
      msg = msg + ` limit: ${params.limit}`;
    }

    return msg;
  }

  findBook(bookId: string): any {
    return `findBook funcionando con bookId: ${bookId}`;
  }
}
