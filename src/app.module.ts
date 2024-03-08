import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

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
        entities: [User],
        synchronize: configService.get('dataBaseSettings.mysql.synchronize'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
