-- DropForeignKey
ALTER TABLE `Time` DROP FOREIGN KEY `Time_medicineId_fkey`;

-- AddForeignKey
ALTER TABLE `Time` ADD CONSTRAINT `Time_medicineId_fkey` FOREIGN KEY (`medicineId`) REFERENCES `Medicine`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
