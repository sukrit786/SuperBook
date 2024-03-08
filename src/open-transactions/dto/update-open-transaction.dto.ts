import { PartialType } from '@nestjs/mapped-types';
import { CreateOpenTransactionDto } from './create-open-transaction.dto';

export class UpdateOpenTransactionDto extends PartialType(CreateOpenTransactionDto) {}
