import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
