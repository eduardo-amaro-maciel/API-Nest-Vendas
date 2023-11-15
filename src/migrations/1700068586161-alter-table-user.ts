import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1700068586161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      ALTER TABLE PUBLIC.user ADD UNIQUE(email);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
