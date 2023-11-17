/*
  Warnings:

  - You are about to drop the column `authorId` on the `book` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Book_authorId_fkey` ON `book`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `authorId`;
