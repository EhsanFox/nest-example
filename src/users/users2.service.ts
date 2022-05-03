import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../database/model";

@Injectable()
export class Users2Service {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>
  ) {}

  public async getUser(name: string) {
    return await this.repo.findOne({ name });
  }

  public async updateUser(oldName: string, newName: string) {
    const user = await this.repo.findOne({ name: oldName });
    if (user) {
      user.name = newName;
      const result = await this.repo.update(user.id, user);
      if (result.affected) return true;
      else return false;
    } else return false;
  }

  public async removeUser(name: string) {
    const result = await this.repo.delete({ name });
    if (result.affected) return true;
    else return false;
  }

  public async createUser(name: string) {
    const newUser = new UserEntity();
    newUser.name = name;
    return await this.repo.save(newUser);
  }
}
