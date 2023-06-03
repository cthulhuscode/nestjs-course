import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll() {
    return { msg: 'Brands' };
  }

  @Post()
  create(@Body() payload) {
    return {
      msg: 'Created',
      payload,
    };
  }
}
