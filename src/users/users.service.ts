import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  createUser(): Promise<User> {
    const user = this.usersRepository.create({
      email: 'p@p.com',
      password: '123',
    });

    return this.usersRepository.save(user);
  }

  fetchAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
