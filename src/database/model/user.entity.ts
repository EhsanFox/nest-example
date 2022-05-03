import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity("user")
export class UserEntity extends BaseEntity {
  @Column({ type: "varchar", length: 50, nullable: false })
  name: string;
}
