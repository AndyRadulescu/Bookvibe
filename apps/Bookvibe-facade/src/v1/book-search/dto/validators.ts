import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class IdParam {
  @IsNotEmpty()
  id: string;
}

export class NameParam {
  @IsNotEmpty()
  @Length(3)
  name: string;
}
