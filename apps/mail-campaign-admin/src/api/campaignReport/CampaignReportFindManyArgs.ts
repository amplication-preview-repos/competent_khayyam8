import { CampaignReportWhereInput } from "./CampaignReportWhereInput";
import { CampaignReportOrderByInput } from "./CampaignReportOrderByInput";

export type CampaignReportFindManyArgs = {
  where?: CampaignReportWhereInput;
  orderBy?: Array<CampaignReportOrderByInput>;
  skip?: number;
  take?: number;
};
