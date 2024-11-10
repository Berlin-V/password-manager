import { Inject, Injectable, Logger } from '@nestjs/common';
import { ISavePassword } from './utils/password.manager.interface';
import { passwordSaverEntity } from './entity/password.manager.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  private logger: Logger;

  constructor(
    @Inject(passwordSaverEntity)
    private BE: Repository<passwordSaverEntity>,
  ) {
    this.logger = new Logger('PASSWORD-MANAGER-SERVICE');
  }
  async savePassword(inData: ISavePassword) {
    this.logger.log(
      `Request received for save password, with data ${JSON.stringify(inData)}`,
    );
    if (inData.password !== inData.confirmPassword)
      throw new Error(
        `Passwords do not match. Please check both entries and try again`,
      );
    return inData;
  }

  getAllPassword(): string {
    return 'Hello World!';
  }
}
