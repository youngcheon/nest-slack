import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
    @ApiProperty({
        example: 'kimyoungcheon97@gmail.com',
        description: '이메일',
        required: true,
    })
    public email: string;

    @ApiProperty({
        example: 'youngcheon',
        description: '닉네임',
        required: true,
    })
    public nickname: string;

    @ApiProperty({
        example: 'password',
        description: '패스워드',
        required: true,
    })
    public password: string;
}
