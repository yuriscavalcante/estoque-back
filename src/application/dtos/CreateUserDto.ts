import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsString()
  full_name: string;

  @IsOptional()
  @IsNumber()
  user_type: number;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  confirm_password: string;

  @IsOptional()
  @IsString()
  new_password?: string;

  @IsOptional()
  @IsString()
  birth_date: string;

  @IsOptional()
  @IsNumber()
  company?: number;

  @IsOptional()
  @IsString()
  phone_number: string;
}
