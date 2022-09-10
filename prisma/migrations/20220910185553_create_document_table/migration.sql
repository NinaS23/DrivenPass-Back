-- CreateEnum
CREATE TYPE "Document" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "docType" "Document" NOT NULL DEFAULT 'RG',
    "fullName" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "issueDate" TEXT NOT NULL,
    "registerNumber" TEXT NOT NULL,
    "issuingBody" TEXT NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "documents_registerNumber_key" ON "documents"("registerNumber");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
