import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeklaModule } from './mekla/mekla.module';

@Module({
  imports: [MeklaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
