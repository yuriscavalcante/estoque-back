import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/typeorm/database.module';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
