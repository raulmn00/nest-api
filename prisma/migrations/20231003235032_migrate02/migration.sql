-- DropForeignKey
ALTER TABLE `stacks` DROP FOREIGN KEY `stacks_pessoaId_fkey`;

-- AlterTable
ALTER TABLE `stacks` MODIFY `pessoaId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `stacks` ADD CONSTRAINT `stacks_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `pessoas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
