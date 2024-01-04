import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: '/code/src/fe/build',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
