import { IsString, IsEmail } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'The email address is specified incorrectly' })
	email: string;

	@IsString({ message: 'No password specified' })
	password: string;

	@IsString({ message: 'No name specified' })
	name: string;
}
