import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.reqeust.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOkResponse()
    @ApiResponse({
        description: '성공',
        type: UserDto,
    })
    @ApiOperation({ summary: '내 정보 조회' })
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @ApiOperation({ summary: '회원가입' })
    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.userService.postUsers(data.email, data.nickname, data.password);
    }

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    login(@Req() req) {
        return req.user;
    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }
}
