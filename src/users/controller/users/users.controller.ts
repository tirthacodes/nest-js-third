import { Body, Controller, Get, Post, Param, Put, ParseIntPipe, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
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

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.userService.deleteUser(id);
    }

    @Post(':id/profiles')
    createUserProfile(@Param('id', ParseIntPipe) id: number,@Body() createUserProfileDto : CreateUserProfileDto){

        return this.userService.createUserProfile(id, createUserProfileDto)
    }

    @Post(':id/posts')
    createUserPost(@Param('id', ParseIntPipe) id: number){

    }
}
