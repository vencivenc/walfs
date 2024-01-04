import { Test, TestingModule } from '@nestjs/testing';
import { FlakeService } from './flake.service';

describe('FlakeService', () => {
  let service: FlakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlakeService],
    }).compile();

    service = module.get<FlakeService>(FlakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
