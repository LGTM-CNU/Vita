/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `Relation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Relation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Relation_adminId_key` ON `Relation`(`adminId`);

-- CreateIndex
CREATE UNIQUE INDEX `Relation_userId_key` ON `Relation`(`userId`);
