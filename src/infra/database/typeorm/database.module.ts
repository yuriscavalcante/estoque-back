import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfigs } from './config/TypeormConfig';
import { Users } from 'src/application/entities/Users.entity';
import { UserRepositoryProps } from 'src/application/repositories/UsersRepositoryProps';
import { TypeormUsers } from './repositories/TypeormUsers';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfigs),
    TypeOrmModule.forFeature([
      // entities here
      Users,
    ]),
  ],
  providers: [
    /*
        {
            provide: repositoryProps,
            useClass: TypeormRepository
        }
        */
    {
      provide: UserRepositoryProps,
      useClass: TypeormUsers,
    },
  ],
  exports: [
    // RepositoryProps here
    UserRepositoryProps,
  ],
})
export class DatabaseModule {}
