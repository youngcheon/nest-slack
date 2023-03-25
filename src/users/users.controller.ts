import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.reqeust.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.userService.postUsers(data.email, data.nickname, data.password);
    }

    @Post('login')
    login(@Req() req) {
        return req.user;
    }

    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }
}
