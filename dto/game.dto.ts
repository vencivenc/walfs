import {PlayerDto} from "./player.dto";

export class GameDto {
  id?: string

  players?: PlayerDto[];

  host?: PlayerDto;
}
