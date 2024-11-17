/*
  Warnings:

  - The values [HIPPA] on the enum `LegalFramework` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LegalFramework_new" AS ENUM ('NOT_AVAILABLE', 'HEADSTART', 'FERPA', 'HIPAA');
ALTER TABLE "Policy" ALTER COLUMN "legalFrameworks" TYPE "LegalFramework_new"[] USING ("legalFrameworks"::text::"LegalFramework_new"[]);
ALTER TYPE "LegalFramework" RENAME TO "LegalFramework_old";
ALTER TYPE "LegalFramework_new" RENAME TO "LegalFramework";
DROP TYPE "LegalFramework_old";
COMMIT;
