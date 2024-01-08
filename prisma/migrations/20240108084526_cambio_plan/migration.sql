/*
  Warnings:

  - You are about to alter the column `fecha` on the `asistencia` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `asistencia` MODIFY `fecha` DATETIME NOT NULL;
