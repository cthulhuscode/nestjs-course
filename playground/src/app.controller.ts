import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('products/:id')
  // getProducts(@Param() params) {
  //   return `Product ${params.id}`;
  // }

  @Get('products/:id')
  getProducts(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategories(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `Category ${categoryId}, Product ${productId}`;
  }
}
