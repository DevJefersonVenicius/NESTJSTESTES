import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateHardwareDTO } from "./dto/create-hardware-dto";
import { UpdateHardwareDTO } from "./dto/update-hardware-dto";
import { UpdaatePatchHardwareDTO } from "./dto/update-patch-hardware-dto";

@Injectable()
export class HardwareService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({name, brand, manuFacturer, model, type, version, serialNumber, price}: CreateHardwareDTO) {
        return this.prisma.hardware.create({
            data: {
                name, 
                brand, 
                manuFacturer, 
                model, 
                type, 
                version, 
                serialNumber, 
                price,
            }
        })
    }

    async list() {
        return this.prisma.hardware.findMany()
    }

    async show(id: number) {
        return this.prisma.hardware.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, data: UpdateHardwareDTO) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário de ID ${id} não encontrado.`)
        }

        return this.prisma.hardware.update({
            data,
            where: {
                id,
            }
        })
    }

    async updatePartial(id: number, {name, brand, manuFacturer, model, type, version, serialNumber, price}: UpdaatePatchHardwareDTO) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário de ID ${id} não encontrado.`)
        }
        const data: any = {}

        if (name) {
            data.name = name
        }

        if (brand) {
            data.brand = brand
        }

        if (manuFacturer) {
            data.manuFacturer = manuFacturer
        }

        if (model) {
            data.model = model
        }

        if (type) {
            data.type = type
        }

        if (version) {
            data.version = version
        }

        if (serialNumber) {
            data.serialNumber = serialNumber
        }

        if (price) {
            data.price = price
        }

        return this.prisma.hardware.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: number) {
        if (!(await this.show(id))) { 
            throw new NotFoundException(`Usuário de Id ${id} não encontrado.`)
        }

        return this.prisma.hardware.delete({
            where: {
                id,
            }
        })
    }

}
