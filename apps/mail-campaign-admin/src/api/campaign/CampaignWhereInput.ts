import { CampaignReportListRelationFilter } from "../campaignReport/CampaignReportListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CampaignWhereInput = {
  campaignReports?: CampaignReportListRelationFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
