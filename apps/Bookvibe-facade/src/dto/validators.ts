import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export class IsbnParam {
  @IsNotEmpty()
  isbn: string;
}

export class NameParam {
  @IsNotEmpty()
  @Length(3)
  name: string;
}
