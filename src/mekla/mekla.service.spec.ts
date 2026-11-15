import { Test, TestingModule } from '@nestjs/testing';
import { MeklaService } from './mekla.service';

describe('MeklaService', () => {
  let service: MeklaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeklaService],
    }).compile();

    service = module.get<MeklaService>(MeklaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
