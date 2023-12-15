import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/typeorm/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [
    // controllers here
  ],
  providers: [
    // useCases here
  ],
})
export class HttpModule {}
