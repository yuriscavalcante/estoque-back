import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
  })
  full_name: string;

  @Column()
  user_type: number;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    length: 500,
  })
  password: string;

  @Column({
    length: 50,
  })
  birth_date: string;

  //   @IsOptional()
  //   @IsNumber()
  //   company: number;

  @Column({
    length: 50,
  })
  phone_number: string;
}
