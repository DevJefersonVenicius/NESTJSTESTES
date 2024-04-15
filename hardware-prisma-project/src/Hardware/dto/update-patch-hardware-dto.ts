import { PartialType } from "@nestjs/mapped-types";
import { CreateHardwareDTO } from "./create-hardware-dto";

export class UpdaatePatchHardwareDTO extends PartialType(CreateHardwareDTO) {

}
