import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  ProductsController,
  ProductsModule,
  ProductsService,
} from './modules/products';
import {
  CategoriesController,
  CategoriesModule,
  CategoriesService,
} from './modules/categories';
import {
  OrdersService,
  OrdersController,
  OrdersModule,
} from './modules/orders';
import { UsersModule, UsersController, UsersService } from './modules/users';
import {
  CustomersModule,
  CustomersService,
  CustomersController,
} from './modules/customers';
import {
  BrandsModule,
  BrandsController,
  BrandsService,
} from './modules/brands';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    OrdersModule,
    UsersModule,
    CustomersModule,
    BrandsModule,
  ],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    CustomersController,
    BrandsController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    OrdersService,
    UsersService,
    CustomersService,
    BrandsService,
  ],
})
export class AppModule {}
