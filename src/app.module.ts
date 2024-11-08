import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environment/password.manager.environment';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...environment.dataSources],
})
export class AppModule {}
