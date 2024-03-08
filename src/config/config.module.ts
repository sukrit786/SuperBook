import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import localConfig from './local.config';
import devConfig from './dev.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => {
          console.log(process.env.NODE_ENV);
          if (process.env.NODE_ENV == 'dev') {
            return devConfig();
          } else {
            return localConfig();
          }
        },
      ],
    }),
  ],
})
export class ConfigurationModule {
  constructor() {
    // console.log(localConfig());
  }
}
