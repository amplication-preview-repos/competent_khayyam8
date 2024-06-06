import * as graphql from "@nestjs/graphql";
import { RecipientResolverBase } from "./base/recipient.resolver.base";
import { Recipient } from "./base/Recipient";
import { RecipientService } from "./recipient.service";

@graphql.Resolver(() => Recipient)
export class RecipientResolver extends RecipientResolverBase {
  constructor(protected readonly service: RecipientService) {
    super(service);
  }
}
