import { Controller, OnModuleInit, Logger, Post, Body } from "@nestjs/common";
import { Client, ClientGrpc } from "@nestjs/microservices";
import { GRPCInterfaces, GRPCOptions } from "./microservices";

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger(AppController.name);

  @Client(GRPCOptions.createUserGRPCOptions)
  private client: ClientGrpc;

  private grpcService: GRPCInterfaces.ICreateUser;

  onModuleInit() {
    this.grpcService =
      this.client.getService<GRPCInterfaces.ICreateUser>("AppController");
  }

  @Post("add")
  async accumulate(@Body("data") data: number[]) {
    this.logger.log("Adding " + data.toString());
    return this.grpcService.test();
  }
}
