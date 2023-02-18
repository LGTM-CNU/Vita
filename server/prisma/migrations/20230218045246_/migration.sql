/*
  Warnings:

  - You are about to drop the column `patientId` on the `Relation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Relation` DROP FOREIGN KEY `Relation_patientId_fkey`;

-- AlterTable
ALTER TABLE `Relation` DROP COLUMN `patientId`,
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
