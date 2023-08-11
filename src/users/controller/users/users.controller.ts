import { Body, Controller, Get, Post, Param, Put, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }

    @Get()
    async getUsers(){
        return this.userService.findUsers();
        
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto){
        await this.userService.updateUser(id, updateUserDto);
    }
}
