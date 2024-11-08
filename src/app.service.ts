import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  savePassword(inData) {
    return inData;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
