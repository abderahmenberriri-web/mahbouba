import { PartialType } from '@nestjs/mapped-types';
import { CreateMeklaDto } from './create-mekla.dto';

export class UpdateMeklaDto extends PartialType(CreateMeklaDto) {}
