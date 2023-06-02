import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  /**
   * Route params
   * and Query params
   */
  @Get(':id')
  getProducts(
    @Param('id') id: string,
    @Query()
    { limit, offset, order }: { limit: string; offset: string; order: string },
  ) {
    return `Product ${id}. Limit: ${limit}, offset: ${offset}, order: ${order}`;
  }
}
