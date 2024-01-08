import {http} from '../common/http'
import {GameDto} from "../dto/game.dto";
import {wait} from "../common/wait";
import {UserDto} from "../dto/user.dto";

export class GameService {
  static async join(
    user: UserDto,
    code: string,
  ): Promise<GameDto> {
    // const loginResponse = await http.post<UserDto>("/api/auth/login", {
    //   name,
    // });
    //
    // return loginResponse.data;

    await wait(1000);

    return {
      id: code,
      players: [user],
      host: {
        id: '',
        name: 'name'
      }
    }
  }
  static async create(
    user: UserDto,
  ): Promise<GameDto> {
    // const loginResponse = await http.post<UserDto>("/api/auth/login", {
    //   name,
    // });
    //
    // return loginResponse.data;

    await wait(1000);

    return {
      id: '123',
      players: [user],
      host: {
        id: '',
        name: 'name'
      }
    }
  }
}
