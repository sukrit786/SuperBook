import { registerAs } from '@nestjs/config';

export interface DatabaseSettings {
  mysql: {
    host: string;
    user: string;
    password: string;
    database: string;
    multipleStatements: boolean;
    port: number;
  };
}

export interface LogConfig {
  publishMertices: boolean;
  includeHeaders: boolean;
  log422Errors: boolean;
  info: boolean;
  access: boolean;
  error: boolean;
  debug: boolean;
  isRotate: boolean;
  secretsHide: boolean;
  errcount: boolean;
  compress: boolean;
  eventCount: boolean;
  enableCallStack: boolean;
  logFolder: string;
  specificApiErrorLog: boolean;
  layout: {
    type: string;
    pattern: string;
  };
  callStackLayout: {
    type: string;
    pattern: string;
  };
  maxLogSize: string;
  pattern: string;
  patternErrcount: string;
  daysToKeep: number;
  backups: number;
  numBackups: number;
  secrets: {
    keys: string[];
    stringLogRegExp: Record<string, RegExp>;
  };
}

export interface Config {
  configVer: string;
  port: number;
  Allow_Origin: string[];
  maxPayloadSize: string;
  Allow_Headers: string;
  Allow_Methods: string;
  Allow_Credentials: boolean;
  PRE_FLIGHT_CONTINUE: boolean;
  OPTIONS_SUCCESS_STATUS: number;
  dataBaseSettings: DatabaseSettings;
  logConfig: LogConfig;
}

export default registerAs('devConfig', () => ({
  configVer: '1.0.0',
  port: 7096,
  Allow_Origin: [],
  maxPayloadSize: '50kb',
  Allow_Headers: 'Origin, X-Requested-With, Content-Type, Accept',
  Allow_Methods: 'OPTIONS, POST',
  Allow_Credentials: true,
  PRE_FLIGHT_CONTINUE: false,
  OPTIONS_SUCCESS_STATUS: 204,
  dataBaseSettings: {
    mysql: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'hisabKitab',
      multipleStatements: true,
      port: 3306,
      synchronize: true,
    },
  },
  logConfig: {
    publishMertices: false,
    includeHeaders: true,
    log422Errors: false,
    info: true,
    access: true,
    error: true,
    debug: false,
    isRotate: true,
    secretsHide: false,
    errcount: false,
    compress: false,
    eventCount: true,
    enableCallStack: false,
    logFolder: 'logs-super',
    specificApiErrorLog: true,
    layout: {
      type: 'pattern',
      pattern: '%d %X{user} %x{message}',
    },
    callStackLayout: {
      type: 'pattern',
      pattern: '%d %f{1}:%l:%o %X{user} %x{message}',
    },
    maxLogSize: '10M',
    pattern: 'yyyy-MM-dd',
    patternErrcount: 'yyyy-MM',
    daysToKeep: 0,
    backups: 1000,
    numBackups: 300,
    secrets: {
      keys: [
        'email',
        'emailid',
        'emailids',
        'createdby',
        'modifiedby',
        'lastupdatedby',
        'deletedby',
        'phone',
        'mobile no',
        'mobilenumbers',
        'mobile',
        'mobileno',
        'mobile number',
        'firstname',
        'first name',
        'lastname',
        'last name',
        'lastname',
        'password',
        'password',
        'pass',
        'token',
        'auth',
        'secret',
        'x-access-token',
        'authorization',
        'oldpassword',
        'newpassword',
        'accesstoken',
        'refreshtoken',
        'access_token',
      ],
      stringLogRegExp: {
        email: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g,
      },
    },
  },
}));
