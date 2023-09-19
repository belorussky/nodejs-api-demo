import { IsString, IsEmail } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'The email address is specified incorrectly' })
	email: string;

	@IsString({ message: 'No password specified' })
	password: string;
}
