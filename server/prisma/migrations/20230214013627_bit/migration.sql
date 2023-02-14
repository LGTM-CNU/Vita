/*
  Warnings:

  - Added the required column `repeat` to the `Alarm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Alarm` ADD COLUMN `repeat` VARCHAR(191) NOT NULL,
    MODIFY `time` VARCHAR(191) NOT NULL;
