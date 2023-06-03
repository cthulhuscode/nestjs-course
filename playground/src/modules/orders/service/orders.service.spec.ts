import { Test, TestingModule } from '@nestjs/testing';
import { OrderssService } from './orders.service';

describe('OrderssService', () => {
  let service: OrderssService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderssService],
    }).compile();

    service = module.get<OrderssService>(OrderssService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
