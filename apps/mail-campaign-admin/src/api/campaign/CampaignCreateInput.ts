import { CampaignReportCreateNestedManyWithoutCampaignsInput } from "./CampaignReportCreateNestedManyWithoutCampaignsInput";

export type CampaignCreateInput = {
  campaignReports?: CampaignReportCreateNestedManyWithoutCampaignsInput;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
