/*
  Warnings:

  - You are about to drop the column `user_id` on the `Medicine` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Medicine` DROP COLUMN `user_id`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `thumbnail` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Medicine` ADD CONSTRAINT `Medicine_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
