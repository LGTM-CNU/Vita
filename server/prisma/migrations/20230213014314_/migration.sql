/*
  Warnings:

  - You are about to drop the column `created_at` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `medicine_id` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Alarm` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `manager` on the `Medicine` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Alarm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managerId` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Alarm` DROP COLUMN `created_at`,
    DROP COLUMN `medicine_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Chat` DROP COLUMN `created_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `isVoice` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Medicine` DROP COLUMN `manager`,
    ADD COLUMN `managerId` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NULL;
