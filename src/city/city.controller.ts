import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get(':id')
  async findAllCitiesByStateId(@Param('id') id: number) {
    return this.cityService.findAllCitiesByStateId(id);
  }
}
