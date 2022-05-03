import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const createUserGRPCOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: "cuser",
    protoPath: join(__dirname, "./microservices/protos/cuser.proto"),
  },
};
