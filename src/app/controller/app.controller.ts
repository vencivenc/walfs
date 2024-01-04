import {Body, Controller, Get, Header, Param, Post, Query} from '@nestjs/common';
import {StartDto} from "../dto/start.dto";
import {StateDto} from "../dto/state.dto";

@Controller('app')
export class AppController {
  private state: StateDto;

  @Get('health')
  getHealth(): string {
    return 'OK';
  }

  @Get('state')
  @Header('Cache-Control', 'no-cache')
  getState(@Query('name') name: string): StateDto {
    this.addPlayer(name);

    return this.state;
  }

  addPlayer(name: string): void {
    if (name == "" || name == "main") {
      return
    }

    if (!this.state || !this.state.players || this.state.players.length <= 0) {
      return
    }

    if (this.state.players.find(player =>
      player.name === name
    )) {
      return
    }

    const players = this.state.players;
    let found = false;

    do {
      const index = this.getRandomInt(players.length);
      if (players[index].name == "") {
        this.state.players[index].name = name;
        found = true;
      }
    } while (!found);

  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }


  @Post('start')
  start(@Body() body: StartDto): StateDto {
    const players = body.characters.map((char) => ({
      name: "", character:
      char
    }));

    this.state = {players}

    return this.state;
  }

}
