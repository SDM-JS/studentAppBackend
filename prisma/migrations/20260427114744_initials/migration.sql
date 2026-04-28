-- AlterEnum
ALTER TYPE "Difficulty" ADD VALUE 'master';

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "level" "Difficulty" NOT NULL DEFAULT 'easy',
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Notes" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
