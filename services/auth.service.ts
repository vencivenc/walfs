import {http} from '../common/http'
import {UserDto} from "../dto/user.dto";
import {wait} from "../common/wait";

export class UserService {
  static async login(
    name: string,
  ): Promise<UserDto> {
    // const loginResponse = await http.post<UserDto>("/api/auth/login", {
    //   name,
    // });
    //
    // return loginResponse.data;
    await wait(1000);

    return {
      id: '123',
      name: name,
    }
  }
}
