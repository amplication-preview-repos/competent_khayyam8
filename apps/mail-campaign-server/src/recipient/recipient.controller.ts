import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecipientService } from "./recipient.service";
import { RecipientControllerBase } from "./base/recipient.controller.base";

@swagger.ApiTags("recipients")
@common.Controller("recipients")
export class RecipientController extends RecipientControllerBase {
  constructor(protected readonly service: RecipientService) {
    super(service);
  }
}
