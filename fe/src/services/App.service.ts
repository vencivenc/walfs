import {http} from "../common/axios";
import {StateDto} from "../dto/state.dto";

export class AppService {
  static async start(
    characters: string[],
  ): Promise<StateDto> {
    const loginResponse = await http.post<StateDto>("/api/app/start", {
      characters
    });

    return loginResponse.data;
  }

  static async get(name: string): Promise<StateDto> {
    const loginResponse = await http.get<StateDto>("/api/app/state", {params: {name}});

    return loginResponse.data;
  }

}
