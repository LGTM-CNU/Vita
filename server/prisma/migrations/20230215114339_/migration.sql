/*
  Warnings:

  - You are about to alter the column `isVoice` on the `Chat` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Chat` MODIFY `isVoice` VARCHAR(191) NULL;
