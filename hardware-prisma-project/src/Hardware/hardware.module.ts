import { Module } from "@nestjs/common";
import { HardwareController } from "./hardware.controller";
import { HardwareService } from "./hardware.service";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    exports: [HardwareService],
    providers: [HardwareService, PrismaService],
    controllers: [HardwareController],
})
export class HardwareModule {

}
