import { Test, TestingModule } from '@nestjs/testing';
import { OpenTransactionsController } from './open-transactions.controller';
import { OpenTransactionsService } from './open-transactions.service';

describe('OpenTransactionsController', () => {
  let controller: OpenTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenTransactionsController],
      providers: [OpenTransactionsService],
    }).compile();

    controller = module.get<OpenTransactionsController>(OpenTransactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
