/*
  Warnings:

  - You are about to alter the column `fecha` on the `Asistencia` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Asistencia` MODIFY `fecha` DATETIME NOT NULL;
