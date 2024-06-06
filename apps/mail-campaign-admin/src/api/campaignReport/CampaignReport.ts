import { Campaign } from "../campaign/Campaign";

export type CampaignReport = {
  bounceCount: number | null;
  campaign?: Campaign | null;
  clickCount: number | null;
  createdAt: Date;
  id: string;
  openCount: number | null;
  sentCount: number | null;
  spamCount: number | null;
  unsubscribedCount: number | null;
  updatedAt: Date;
};
