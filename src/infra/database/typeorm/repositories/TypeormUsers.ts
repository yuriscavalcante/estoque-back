import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/application/dtos/CreateUserDto';
import { Users } from 'src/application/entities/Users.entity';
import { UserRepositoryProps } from 'src/application/repositories/UsersRepositoryProps';
import { Repository } from 'typeorm';

@Injectable()
export class TypeormUsers implements UserRepositoryProps {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepositoryProps: Repository<Users>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    return await this.usersRepositoryProps.save(createUserDto);
  }
  async getUsers(query: any): Promise<Users[]> {
    return await this.usersRepositoryProps
      .createQueryBuilder('Users')
      .where(query)
      .getMany();
  }
  async getUserById(userId: number): Promise<Users> {
    return await this.usersRepositoryProps
      .createQueryBuilder('Users')
      .where({ id: userId })
      .getOne();
  }
  async getUserByEmail(email: string): Promise<Users | null> {
    return await this.usersRepositoryProps
      .createQueryBuilder('Users')
      .where({ email })
      .getOne();
  }
  async update(updateUserDto: Users): Promise<Users> {
    return await this.usersRepositoryProps.save(updateUserDto);
  }
  async delete(users: Users): Promise<Users> {
    return await this.usersRepositoryProps.save(users);
  }
}
