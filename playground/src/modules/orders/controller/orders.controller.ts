import { Controller, Get, Body, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll() {
    return 'Orders';
  }

  @Post()
  create(@Body() payload) {
    return {
      msg: 'Created',
      payload,
    };
  }
}
