import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers() {
    return JSON.stringify({ msg: 'Customers' });
  }
}
