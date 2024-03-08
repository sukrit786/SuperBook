import { Injectable } from '@nestjs/common';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { createExpense } from 'src/utils/types';

@Injectable()
export class ExpenseService {
  create(expense: createExpense) {
    console.log('this api is used to create expense');
    return 'This action adds a new expense';
  }

  findAll() {
    return `This action returns all expense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
