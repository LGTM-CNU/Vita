/*
  Warnings:

  - You are about to drop the column `medicine_id` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Chat` table. All the data in the column will be lost.
  - Added the required column `medicineId` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `talker` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Chat` DROP COLUMN `medicine_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `alarmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `medicineId` INTEGER NOT NULL,
    ADD COLUMN `talker` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_medicineId_fkey` FOREIGN KEY (`medicineId`) REFERENCES `Medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
