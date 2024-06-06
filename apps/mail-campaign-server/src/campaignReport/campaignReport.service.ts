import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CampaignReportServiceBase } from "./base/campaignReport.service.base";

@Injectable()
export class CampaignReportService extends CampaignReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
