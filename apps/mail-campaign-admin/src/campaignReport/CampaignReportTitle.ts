import { CampaignReport as TCampaignReport } from "../api/campaignReport/CampaignReport";

export const CAMPAIGNREPORT_TITLE_FIELD = "id";

export const CampaignReportTitle = (record: TCampaignReport): string => {
  return record.id?.toString() || String(record.id);
};
