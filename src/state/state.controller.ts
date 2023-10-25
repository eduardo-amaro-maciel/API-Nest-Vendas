import { StateService } from './state.service';
import { Controller, Get } from '@nestjs/common';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async findAll() {
    return this.stateService.findAll();
  }
}
