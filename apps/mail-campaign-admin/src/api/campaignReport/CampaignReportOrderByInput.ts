import { SortOrder } from "../../util/SortOrder";

export type CampaignReportOrderByInput = {
  bounceCount?: SortOrder;
  campaignId?: SortOrder;
  clickCount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  openCount?: SortOrder;
  sentCount?: SortOrder;
  spamCount?: SortOrder;
  unsubscribedCount?: SortOrder;
  updatedAt?: SortOrder;
};
