import { Body, Controller, Delete, Get, ParseIntPipe, Patch, Post, Put, Param } from "@nestjs/common";
import { CreateHardwareDTO } from "./dto/create-hardware-dto";
import { HardwareService } from "./hardware.service";
import { UpdateHardwareDTO } from "./dto/update-hardware-dto";
import { UpdaatePatchHardwareDTO } from "./dto/update-patch-hardware-dto";

@Controller('hardware')
export class HardwareController {
    constructor(private readonly hardwareService: HardwareService) {

    }

    @Post()
    create(@Body() data: CreateHardwareDTO) {
        return this.hardwareService.create(data)
    }

    @Get()
    async read() {
        return this.hardwareService.list()
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe)id: number) {
        return this.hardwareService.show(id)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe)id: number, @Body() data: UpdateHardwareDTO) {
        return this.hardwareService.update(id, data)
    }

    @Patch(':id')
    async updatePartial(@Param('id', ParseIntPipe)id: number, @Body() data: UpdaatePatchHardwareDTO) {
        return this.hardwareService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe)id: number) {
        return this.hardwareService.delete(id)
    }

}
