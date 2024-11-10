/*
  Warnings:

  - You are about to drop the column `BusinessUnitScopes` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `ITApplications` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `LegalFrameworks` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `Products` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `Systems` on the `Policy` table. All the data in the column will be lost.
  - You are about to drop the column `Websites` on the `Policy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Policy" DROP COLUMN "BusinessUnitScopes",
DROP COLUMN "ITApplications",
DROP COLUMN "LegalFrameworks",
DROP COLUMN "Products",
DROP COLUMN "Systems",
DROP COLUMN "Websites",
ADD COLUMN     "businessScopes" "BusinessUnitScopes"[],
ADD COLUMN     "itApplications" "ITApplications"[],
ADD COLUMN     "legalFrameworks" "LegalFramework"[],
ADD COLUMN     "products" "Product"[],
ADD COLUMN     "systems" "System"[],
ADD COLUMN     "websites" "Website"[];
