import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeklaService } from './mekla.service';
import { CreateMeklaDto } from './dto/create-mekla.dto';
import { UpdateMeklaDto } from './dto/update-mekla.dto';

@Controller('mekla')
export class MeklaController {
  constructor(private readonly meklaService: MeklaService) {}

  @Post()
  create(@Body() createMeklaDto: CreateMeklaDto) {
    return this.meklaService.create(createMeklaDto);
  }

  @Get()
  findAll() {
    return this.meklaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meklaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeklaDto: UpdateMeklaDto) {
    return this.meklaService.update(+id, updateMeklaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meklaService.remove(+id);
  }
}
