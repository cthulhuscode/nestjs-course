import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll() {
    return JSON.stringify({ msg: 'Customers' });
  }

  @Post()
  create(@Body() payload) {
    return {
      msg: 'Created',
      payload,
    };
  }
}
