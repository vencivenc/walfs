enum PlayerState {
  ALIVE = 'ALIVE',
  DEAD = 'DEAD',
}

enum Character {
  WOLVERINE = 'WOLVERINE',
  VILLAGER = 'VILLAGER',
  SEER = 'SEER',
  WITCH = 'WITCH',
  HEALER = 'HEALER',
  HUNTER = 'HUNTER',
  LITTLE_RED_RIDING_HOOD = 'LITTLE_RED_RIDING_HOOD',
  CUPID = 'CUPID',
  MAYOR = 'MAYOR',
}

export class PlayerDto {
  id?: string;
  name?: string;
  character?: Character;
  state?: PlayerState;
}
