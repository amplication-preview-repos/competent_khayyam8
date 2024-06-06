import { Module } from "@nestjs/common";
import { CampaignReportModuleBase } from "./base/campaignReport.module.base";
import { CampaignReportService } from "./campaignReport.service";
import { CampaignReportController } from "./campaignReport.controller";
import { CampaignReportResolver } from "./campaignReport.resolver";

@Module({
  imports: [CampaignReportModuleBase],
  controllers: [CampaignReportController],
  providers: [CampaignReportService, CampaignReportResolver],
  exports: [CampaignReportService],
})
export class CampaignReportModule {}
