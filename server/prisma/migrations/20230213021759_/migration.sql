/*
  Warnings:

  - You are about to drop the column `managerId` on the `Medicine` table. All the data in the column will be lost.
  - Added the required column `medicineId` to the `Alarm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Alarm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Alarm` ADD COLUMN `medicineId` INTEGER NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Medicine` DROP COLUMN `managerId`;

-- CreateTable
CREATE TABLE `Relation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patientId` VARCHAR(191) NOT NULL,
    `adminId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alarm` ADD CONSTRAINT `Alarm_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alarm` ADD CONSTRAINT `Alarm_medicineId_fkey` FOREIGN KEY (`medicineId`) REFERENCES `Medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
