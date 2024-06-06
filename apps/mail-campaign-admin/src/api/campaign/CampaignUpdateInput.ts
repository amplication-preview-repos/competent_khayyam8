import { CampaignReportUpdateManyWithoutCampaignsInput } from "./CampaignReportUpdateManyWithoutCampaignsInput";

export type CampaignUpdateInput = {
  campaignReports?: CampaignReportUpdateManyWithoutCampaignsInput;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
};
