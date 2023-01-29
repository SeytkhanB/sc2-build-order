/*
  Warnings:

  - Made the column `author` on table `BuildOrder` required. This step will fail if there are existing NULL values in that column.
  - Made the column `desc` on table `BuildOrder` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BuildOrder" ALTER COLUMN "style" DROP DEFAULT,
ALTER COLUMN "author" SET NOT NULL,
ALTER COLUMN "author" DROP DEFAULT,
ALTER COLUMN "desc" SET NOT NULL,
ALTER COLUMN "desc" DROP DEFAULT,
ALTER COLUMN "build" DROP DEFAULT;
