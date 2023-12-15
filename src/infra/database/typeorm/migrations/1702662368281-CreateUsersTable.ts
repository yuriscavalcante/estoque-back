import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1702662368281 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'full_name',
            type: 'varchar',
            length: '500',
          },
          {
            name: 'user_type',
            type: 'int4',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'birth_date',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'phone_number',
            type: 'varchar',
            length: '20',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
