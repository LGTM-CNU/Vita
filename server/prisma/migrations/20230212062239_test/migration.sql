/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Alarm` table. All the data in the column will be lost.
  - Added the required column `description` to the `Medicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manager` to the `Medicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Medicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Alarm` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Medicine` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `manager` VARCHAR(191) NOT NULL,
    ADD COLUMN `thumbnail` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Chat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `medicine_id` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
