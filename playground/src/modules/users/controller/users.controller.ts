import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
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
