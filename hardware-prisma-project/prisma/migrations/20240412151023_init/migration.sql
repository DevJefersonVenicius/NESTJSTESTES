-- CreateTable
CREATE TABLE "hardware" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "manuFacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "hardware_pkey" PRIMARY KEY ("id")
);
