import { Controller, Get, Post } from '@nestjs/common';
import { Connection } from 'typeorm';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(): Promise<User> {
    return this.usersService.createUser();
  }

  @Get()
  fetchAll(): Promise<User[]> {
    return this.usersService.fetchAll();
  }
}
