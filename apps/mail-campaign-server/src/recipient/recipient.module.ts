import { Module } from "@nestjs/common";
import { RecipientModuleBase } from "./base/recipient.module.base";
import { RecipientService } from "./recipient.service";
import { RecipientController } from "./recipient.controller";
import { RecipientResolver } from "./recipient.resolver";

@Module({
  imports: [RecipientModuleBase],
  controllers: [RecipientController],
  providers: [RecipientService, RecipientResolver],
  exports: [RecipientService],
})
export class RecipientModule {}
