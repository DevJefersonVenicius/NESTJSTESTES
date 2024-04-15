import { IsNumberString, IsString } from "class-validator";

export class CreateHardwareDTO {
    @IsString()
    name: string // NOME

    @IsString()
    brand: string // MARCA

    @IsString()
    manuFacturer: string // FABRICANTE

    @IsString()
    model: string // MODELO

    @IsString()
    type: string // TIPO

    @IsNumberString()
    version: string // VERSÃO
    
    @IsNumberString()
    serialNumber: string // NÚMERO DE SERIE
    
    @IsNumberString()
    price: string // PREÇO

}
