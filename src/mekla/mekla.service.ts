import { Injectable } from '@nestjs/common';
import { CreateMeklaDto } from './dto/create-mekla.dto';
import { UpdateMeklaDto } from './dto/update-mekla.dto';

@Injectable()
export class MeklaService {
  create(createMeklaDto: CreateMeklaDto) {
    return 'This action adds a new mekla';
  }

  findAll() {
    return `This action returns all mekla`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mekla`;
  }

  update(id: number, updateMeklaDto: UpdateMeklaDto) {
    return `This action updates a #${id} mekla`;
  }

  remove(id: number) {
    return `This action removes a #${id} mekla`;
  }
}
