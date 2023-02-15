-- DropForeignKey
ALTER TABLE `Chat` DROP FOREIGN KEY `Chat_medicineId_fkey`;

-- AlterTable
ALTER TABLE `Chat` MODIFY `medicineId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_medicineId_fkey` FOREIGN KEY (`medicineId`) REFERENCES `Medicine`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
