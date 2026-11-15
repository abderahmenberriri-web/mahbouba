import { Module } from '@nestjs/common';
import { MeklaService } from './mekla.service';
import { MeklaController } from './mekla.controller';

@Module({
  controllers: [MeklaController],
  providers: [MeklaService],
})
export class MeklaModule {}
