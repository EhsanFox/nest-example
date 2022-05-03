import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/model';
import { Users2Service } from './users2.service';

@Module({
    imports:[Users2Service, TypeOrmModule.forFeature([UserEntity])],
    providers: [Users2Service],
    exports: [Users2Service],
})
export class UsersModule {}
