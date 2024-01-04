import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import ProcessEnv = NodeJS.ProcessEnv;

interface Config {
  APP_BASE_URL: string;
  VER: string;
  PROD: string;
  INSTANCE_ID: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: Config = {
    APP_BASE_URL: 'https://ac0labs.com',
    VER: 'default',
    PROD: 'false',
    INSTANCE_ID: 'instance_id',
  };

  constructor(env: ProcessEnv) {
    dotenv.config();
    for (const key in this.envConfig) {
      if (env[key]) {
        this.envConfig[key] = env[key];
      }
    }
  }

  get(key: keyof Config): string {
    return this.envConfig[key];
  }

  getBoolean(key: keyof Config): boolean {
    const value = this.envConfig[key];

    if (value === 'false' || value === 'true') {
      return value === 'true';
    }

    return !!value;
  }
}
