import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailTemplateWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
