import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";

export type CampaignReportCreateInput = {
  bounceCount?: number | null;
  campaign?: CampaignWhereUniqueInput | null;
  clickCount?: number | null;
  openCount?: number | null;
  sentCount?: number | null;
  spamCount?: number | null;
  unsubscribedCount?: number | null;
};
