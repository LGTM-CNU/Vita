/*
  Warnings:

  - Made the column `adminId` on table `Relation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Relation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Relation` DROP FOREIGN KEY `Relation_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `Relation` DROP FOREIGN KEY `Relation_userId_fkey`;

-- AlterTable
ALTER TABLE `Relation` MODIFY `adminId` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
