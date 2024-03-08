import { Module } from '@nestjs/common';
import { OpenTransactionsService } from './open-transactions.service';
import { OpenTransactionsController } from './open-transactions.controller';

@Module({
  controllers: [OpenTransactionsController],
  providers: [OpenTransactionsService],
})
export class OpenTransactionsModule {}
