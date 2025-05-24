import { IsNotEmpty, IsNumberString, IsOptional, Length, IsInt, Min } from 'class-validator';

export class IdParam {
  @IsNotEmpty()
  id: string;
}

export class NamePageParam {
  @IsNotEmpty()
  @Length(3)
  name: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;
}
