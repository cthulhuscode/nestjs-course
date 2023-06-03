import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // It's not necessary to add '/categories' to the route
  // because of @Controller('categories')
  @Get(':categoryId/products/:productId')
  getAll(
    @Param()
    { categoryId, productId }: { categoryId: string; productId: string },
  ) {
    return `Category ${categoryId}, Product ${productId}`;
  }

  @Post()
  create(@Body() payload) {
    return {
      msg: 'Created',
      payload,
    };
  }
}
