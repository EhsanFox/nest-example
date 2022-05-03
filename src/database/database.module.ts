import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfig } from ".";

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig)],
  exports: [DatabaseModule],
})
export class DatabaseModule {}
