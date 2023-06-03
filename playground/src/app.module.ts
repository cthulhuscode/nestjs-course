import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsModule } from './modules/products/module/products.module';
import { ProductsService } from './modules/products/service/products.service';
import { CategoriesModule } from './modules/categories/module/categories.module';
import { CategoriesService } from './modules/categories/service/categories.service';
import { OrderssService } from './modules/orders/service/orders.service';
import { OrdersController } from './modules/orders/controller/orders.controller';
import { OrdersModule } from './modules/orders/module/orders.module';
import { UsersModule } from './modules/users/module/users.module';
import { UsersController } from './modules/users/controller/users.controller';
import { UsersService } from './modules/users/service/users.service';
import { CustomersModule } from './modules/customers/module/customers.module';
import { CustomersService } from './modules/customers/service/customers.service';
import { CustomersController } from './modules/customers/controller/customers.controller';
import { BrandsModule } from './modules/brands/module/brands.module';
import { BrandsController } from './modules/brands/controller/brands.controller';
import { BrandsService } from './modules/brands/service/brands.service';

@Module({
  imports: [ProductsModule, CategoriesModule, OrdersModule, UsersModule, CustomersModule, BrandsModule],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController, UsersController, CustomersController, BrandsController],
  providers: [AppService, ProductsService, CategoriesService, OrderssService, UsersService, CustomersService, BrandsService],
})
export class AppModule {}
