import { Injectable } from '@nestjs/common';
import { CreateOpenTransactionDto } from './dto/create-open-transaction.dto';
import { UpdateOpenTransactionDto } from './dto/update-open-transaction.dto';

@Injectable()
export class OpenTransactionsService {
  create(createOpenTransactionDto: CreateOpenTransactionDto) {
    return 'This action adds a new openTransaction';
  }

  findAll() {
    return `This action returns all openTransactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} openTransaction`;
  }

  update(id: number, updateOpenTransactionDto: UpdateOpenTransactionDto) {
    return `This action updates a #${id} openTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} openTransaction`;
  }
}
