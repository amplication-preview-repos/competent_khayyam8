import * as graphql from "@nestjs/graphql";
import { CampaignReportResolverBase } from "./base/campaignReport.resolver.base";
import { CampaignReport } from "./base/CampaignReport";
import { CampaignReportService } from "./campaignReport.service";

@graphql.Resolver(() => CampaignReport)
export class CampaignReportResolver extends CampaignReportResolverBase {
  constructor(protected readonly service: CampaignReportService) {
    super(service);
  }
}
