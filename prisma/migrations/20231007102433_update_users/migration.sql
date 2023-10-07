/*
  Warnings:

  - You are about to drop the column `isDark` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "isDark",
ALTER COLUMN "password" DROP DEFAULT;
