import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipientServiceBase } from "./base/recipient.service.base";

@Injectable()
export class RecipientService extends RecipientServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
