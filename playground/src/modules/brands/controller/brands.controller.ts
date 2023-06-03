import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return JSON.stringify({ msg: 'Brands' });
  }
}
