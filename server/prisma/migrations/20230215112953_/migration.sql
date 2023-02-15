/*
  Warnings:

  - Added the required column `destination` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Chat` ADD COLUMN `destination` VARCHAR(191) NOT NULL,
    MODIFY `isVoice` BOOLEAN NULL DEFAULT false;
