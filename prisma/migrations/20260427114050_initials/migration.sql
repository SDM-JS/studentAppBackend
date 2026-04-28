/*
  Warnings:

  - You are about to drop the column `score` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `testId` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "QuizTypes" AS ENUM ('multipleChoice', 'bugHunting', 'expectedOutput', 'missingCode');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('easy', 'medium', 'hard', 'expert');

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_testId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_testId_fkey";

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "score",
DROP COLUMN "testId",
ADD COLUMN     "quizSchemaId" TEXT;

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "QuizSchema" (
    "id" TEXT NOT NULL,
    "type" "QuizTypes" NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "difficulty" "Difficulty" NOT NULL,
    "topic" TEXT NOT NULL,
    "image" TEXT,
    "givenTime" INTEGER NOT NULL,
    "extraTime" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "isDaily" BOOLEAN NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "input" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuizSchema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Variants" (
    "id" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "isTrue" BOOLEAN NOT NULL,
    "quizSchemaId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Variants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Variants" ADD CONSTRAINT "Variants_quizSchemaId_fkey" FOREIGN KEY ("quizSchemaId") REFERENCES "QuizSchema"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_quizSchemaId_fkey" FOREIGN KEY ("quizSchemaId") REFERENCES "QuizSchema"("id") ON DELETE SET NULL ON UPDATE CASCADE;
