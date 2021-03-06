import { Body, Controller, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Put('update-db-records')
  async updateDbRecords(@Body('orgType') orgType: string) {
    return await this.appService.updateDatabaseRecords(orgType);
  }
  // @Put('update-tax-acc')
  // async updateCreatedByUpdatedBy(@Body('orgType') orgType: string) {
  //   return await this.appService.updateCreatedByUpdatedBy(orgType);
  // }
  @Put('update-m2-cust-createdby-updatedby')
  async updateM2CreatedByUpdatedByCustomer() {
    return await this.appService.updateM2CreatedByUpdatedByCustomer();
  }
}
