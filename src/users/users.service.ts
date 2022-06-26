import { Injectable } from '@nestjs/common';
export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
}
@Injectable()
export class UsersService {

  private readonly users: User[] = [
    {
      id: 1,
      name: "faraz",
      username: "faraz",
      password: "faraz"
    },
    {
      id: 2,
      name: "malik",
      username: "malik",
      password: "malik"
    }
  ]

  async findOne(username: string): Promise<User | undefined>{
    return this.users.find(user => user.username === username)
  }
}
