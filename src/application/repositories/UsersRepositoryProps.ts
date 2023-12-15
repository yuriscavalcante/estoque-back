import { CreateUserDto } from '../dtos/CreateUserDto';
import { Users } from '../entities/Users.entity';

export abstract class UserRepositoryProps {
  abstract create(createUserDto: CreateUserDto): Promise<Users>;
  abstract getUsers(query: any): Promise<Users[]>;
  abstract getUserById(userId: number): Promise<Users | null>;
  abstract getUserByEmail(email: string): Promise<Users | null>;
  abstract update(updateUserDto: Users): Promise<Users>;
  abstract delete(users: Users): Promise<Users | null>;
}
