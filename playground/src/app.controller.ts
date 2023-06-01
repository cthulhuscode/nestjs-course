import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * Using params
   */

  // @Get('products/:id')
  // getProducts(@Param() params) {
  //   return `Product ${params.id}`;
  // }

  @Get('products/:id')
  getProducts(@Param('id') id: string) {
    return `Product ${id}`;
  }

  // @Get('categories/:categoryId/products/:productId')
  // getCategories(
  //   @Param('categoryId') categoryId: string,
  //   @Param('productId') productId: string,
  // ) {
  //   return `Category ${categoryId}, Product ${productId}`;
  // }

  @Get('categories/:categoryId/products/:productId')
  getCategories(
    @Param()
    { categoryId, productId }: { categoryId: string; productId: string },
  ) {
    return `Category ${categoryId}, Product ${productId}`;
  }

  /**
   * Using Query params
   */
  // @Get('products')
  // getProducts2(@Query() params) {
  //   const { limit, offset } = params;
  //   return `limit: ${limit}, offset: ${offset}`;
  // }

  @Get('products')
  getProducts2(
    @Query()
    { limit, offset, order }: { limit: string; offset: string; order: string },
  ) {
    return `limit: ${limit}, offset: ${offset}, order: ${order}`;
  }
}
