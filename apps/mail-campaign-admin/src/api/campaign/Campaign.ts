import { CampaignReport } from "../campaignReport/CampaignReport";

export type Campaign = {
  campaignReports?: Array<CampaignReport>;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
