-- AlterTable
ALTER TABLE "BuildOrder" ALTER COLUMN "author" SET DEFAULT 'Unknown',
ALTER COLUMN "desc" SET DEFAULT 'description',
ALTER COLUMN "title" DROP DEFAULT;
