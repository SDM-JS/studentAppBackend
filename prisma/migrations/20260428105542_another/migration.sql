-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "tasksId" TEXT;

-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "level" "Difficulty" NOT NULL,
    "desc" VARCHAR(255) NOT NULL,
    "correctCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Learn" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "tasksId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Learn_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_tasksId_fkey" FOREIGN KEY ("tasksId") REFERENCES "Tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Learn" ADD CONSTRAINT "Learn_tasksId_fkey" FOREIGN KEY ("tasksId") REFERENCES "Tasks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
