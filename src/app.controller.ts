import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { frameResponse } from './utils/response.frame';

@Controller()
export class AppController {
  private logger: Logger = new Logger('PASSWORD-MANAGER');

  constructor(private readonly appService: AppService) {}

  @Post('savePassword')
  savePassword(@Body() payload) {
    try {
      this.logger.log(
        `Handling request to save password with payload, ${JSON.stringify(
          payload,
        )}`,
      );

      return frameResponse('SUCCESS', 'Password Saved Successfully');
    } catch (err) {
      this.logger.debug(
        `Save password request failed with an error message,${err.message}`,
      );
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
