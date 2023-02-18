-- DropForeignKey
ALTER TABLE `Relation` DROP FOREIGN KEY `Relation_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `Relation` DROP FOREIGN KEY `Relation_patientId_fkey`;

-- AlterTable
ALTER TABLE `Relation` MODIFY `patientId` VARCHAR(191) NULL,
    MODIFY `adminId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relation` ADD CONSTRAINT `Relation_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
