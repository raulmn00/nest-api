/*
  Warnings:

  - You are about to drop the `stacks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `stacks` to the `pessoas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `stacks` DROP FOREIGN KEY `stacks_pessoaId_fkey`;

-- AlterTable
ALTER TABLE `pessoas` ADD COLUMN `stacks` JSON NOT NULL;

-- DropTable
DROP TABLE `stacks`;
