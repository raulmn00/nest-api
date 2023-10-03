-- CreateTable
CREATE TABLE `pessoas` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `nascimento` DATETIME(3) NOT NULL,
    `apelido` VARCHAR(32) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stacks` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(32) NOT NULL,
    `pessoaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stacks` ADD CONSTRAINT `stacks_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
