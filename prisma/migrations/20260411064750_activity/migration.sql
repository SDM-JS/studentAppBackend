/*
  Warnings:

  - You are about to drop the column `studentActivitieId` on the `Homework` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Homework" DROP CONSTRAINT "Homework_studentActivitieId_fkey";

-- AlterTable
ALTER TABLE "Homework" DROP COLUMN "studentActivitieId",
ADD COLUMN     "studentActivityId" TEXT;

-- AddForeignKey
ALTER TABLE "Homework" ADD CONSTRAINT "Homework_studentActivityId_fkey" FOREIGN KEY ("studentActivityId") REFERENCES "StudentActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
