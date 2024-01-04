import { Module } from '@nestjs/common';
import { FlakeService } from './service/flake.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [FlakeService],
  exports: [FlakeService],
})
export class FlakeModule {}
