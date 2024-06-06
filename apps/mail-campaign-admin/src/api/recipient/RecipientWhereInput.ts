import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecipientWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
