import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CampaignWhereUniqueInput } from "../campaign/CampaignWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CampaignReportWhereInput = {
  bounceCount?: IntNullableFilter;
  campaign?: CampaignWhereUniqueInput;
  clickCount?: IntNullableFilter;
  id?: StringFilter;
  openCount?: IntNullableFilter;
  sentCount?: IntNullableFilter;
  spamCount?: IntNullableFilter;
  unsubscribedCount?: IntNullableFilter;
};
