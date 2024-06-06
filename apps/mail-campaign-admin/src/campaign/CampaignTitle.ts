import { Campaign as TCampaign } from "../api/campaign/Campaign";

export const CAMPAIGN_TITLE_FIELD = "name";

export const CampaignTitle = (record: TCampaign): string => {
  return record.name?.toString() || String(record.id);
};
