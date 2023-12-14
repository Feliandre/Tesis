/*
  Warnings:

  - You are about to alter the column `fecha` on the `asistencia` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `email` on the `member` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(100)`.
  - A unique constraint covering the columns `[email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `asistencia` MODIFY `fecha` DATETIME NOT NULL;

-- AlterTable
ALTER TABLE `member` MODIFY `email` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Member_email_key` ON `Member`(`email`);

-- AddForeignKey
ALTER TABLE `Member` ADD CONSTRAINT `Member_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Asistencia` ADD CONSTRAINT `Asistencia_miembroId_fkey` FOREIGN KEY (`miembroId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pago` ADD CONSTRAINT `Pago_miembroId_fkey` FOREIGN KEY (`miembroId`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
