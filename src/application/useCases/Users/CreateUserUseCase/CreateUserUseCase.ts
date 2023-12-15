import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/application/dtos/CreateUserDto';
import { UserRepositoryProps } from 'src/application/repositories/UsersRepositoryProps';
import { hash } from 'bcrypt';

@Injectable()
export class CreateUsersUseCase {
  constructor(private readonly usersRepositoryProps: UserRepositoryProps) {}
  async execute({
    full_name,
    birth_date,
    // company,
    confirm_password,
    email,
    password,
    phone_number,
    user_type,
  }: CreateUserDto) {
    if (password === confirm_password) {
      password = await hash(password, 8);
    } else {
      console.log('Senhas não conferem');
      return;
    }

    const isExistingEmail =
      await this.usersRepositoryProps.getUserByEmail(email);

    if (isExistingEmail) {
      console.log('Email já cadastrado');
      return;
    }

    return await this.usersRepositoryProps.create({
      full_name,
      birth_date,
      // company,
      confirm_password,
      email,
      password,
      phone_number,
      user_type,
    });
  }
}
