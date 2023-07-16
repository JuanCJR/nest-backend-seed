import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1689527879607 implements MigrationInterface {
    name = 'Init1689527879607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "generic_entity" ("id" SERIAL NOT NULL, "description" character varying(100) NOT NULL, "created_at" character varying NOT NULL DEFAULT now(), "updated_at" character varying NOT NULL DEFAULT now(), CONSTRAINT "PK_bdb04d45a035438024da770d2ab" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "generic_entity"`);
    }

}
