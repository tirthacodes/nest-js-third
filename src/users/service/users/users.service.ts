import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){

    }
    findUsers(){

    }

    createUser(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({ ...userDetails, createdAt: new Date()
        });
        return this.userRepository.save(newUser);
    }
}
