import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/service/config.service';
import * as FlakeId from 'flakeid';
import * as generateUuid from 'uuid-by-string';

@Injectable()
export class FlakeService {
  private flakeGenerator: FlakeId;

  constructor(private readonly configService: ConfigService) {
    const instanceId = generateUuid(this.configService.get('INSTANCE_ID'));
    const machineId = parseInt(/(\d+)/g.exec(instanceId).join(''), 10);
    this.flakeGenerator = new FlakeId({
      mid: machineId,
    });
  }

  generateId(): string {
    return this.flakeGenerator.gen();
  }
}
