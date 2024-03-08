import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ExpenseModule } from './expense/expense.module';
import { OpenTransactionsModule } from './open-transactions/open-transactions.module';
import { Expense } from './expense/entities/expense.entity';
import { OpenTransaction } from './open-transactions/entities/open-transaction.entity';

@Module({
  imports: [
    UserModule,
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('dataBaseSettings.mysql.host'),
        port: configService.get<number>('dataBaseSettings.mysql.port'),
        username: configService.get('dataBaseSettings.mysql.user'),
        password: configService.get('dataBaseSettings.mysql.password'),
        database: configService.get('dataBaseSettings.mysql.database'),
        entities: [User, Expense, OpenTransaction],
        synchronize: configService.get('dataBaseSettings.mysql.synchronize'),
      }),
      inject: [ConfigService],
    }),
    ExpenseModule,
    OpenTransactionsModule,
  ],
})
export class AppModule {}
