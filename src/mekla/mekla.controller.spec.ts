import { Test, TestingModule } from '@nestjs/testing';
import { MeklaController } from './mekla.controller';
import { MeklaService } from './mekla.service';

describe('MeklaController', () => {
  let controller: MeklaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeklaController],
      providers: [MeklaService],
    }).compile();

    controller = module.get<MeklaController>(MeklaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
