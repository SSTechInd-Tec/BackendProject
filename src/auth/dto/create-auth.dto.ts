import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ example: 'john-doe' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'password123' })
  password: string;
}
