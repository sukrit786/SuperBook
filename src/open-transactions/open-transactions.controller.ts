import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenTransactionsService } from './open-transactions.service';
import { CreateOpenTransactionDto } from './dto/create-open-transaction.dto';
import { UpdateOpenTransactionDto } from './dto/update-open-transaction.dto';

@Controller('open-transactions')
export class OpenTransactionsController {
  constructor(private readonly openTransactionsService: OpenTransactionsService) {}

  @Post()
  create(@Body() createOpenTransactionDto: CreateOpenTransactionDto) {
    return this.openTransactionsService.create(createOpenTransactionDto);
  }

  @Get()
  findAll() {
    return this.openTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpenTransactionDto: UpdateOpenTransactionDto) {
    return this.openTransactionsService.update(+id, updateOpenTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openTransactionsService.remove(+id);
  }
}
