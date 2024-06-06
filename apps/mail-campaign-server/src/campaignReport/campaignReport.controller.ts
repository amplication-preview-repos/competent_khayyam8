import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampaignReportService } from "./campaignReport.service";
import { CampaignReportControllerBase } from "./base/campaignReport.controller.base";

@swagger.ApiTags("campaignReports")
@common.Controller("campaignReports")
export class CampaignReportController extends CampaignReportControllerBase {
  constructor(protected readonly service: CampaignReportService) {
    super(service);
  }
}
