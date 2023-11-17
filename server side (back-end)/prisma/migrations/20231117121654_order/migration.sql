/*
  Warnings:

  - You are about to drop the column `age` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `order` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `age`,
    DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `link` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(255) NOT NULL,
    ADD COLUMN `subscribers` INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `Order_name_key` ON `Order`(`name`);
