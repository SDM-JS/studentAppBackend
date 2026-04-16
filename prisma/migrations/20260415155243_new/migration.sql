/*
  Warnings:

  - You are about to drop the column `studentId` on the `Test` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_studentId_fkey";

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "studentId",
ADD COLUMN     "submiterId" TEXT;

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_submiterId_fkey" FOREIGN KEY ("submiterId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
