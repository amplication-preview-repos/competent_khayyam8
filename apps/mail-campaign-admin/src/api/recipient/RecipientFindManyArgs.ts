import { RecipientWhereInput } from "./RecipientWhereInput";
import { RecipientOrderByInput } from "./RecipientOrderByInput";

export type RecipientFindManyArgs = {
  where?: RecipientWhereInput;
  orderBy?: Array<RecipientOrderByInput>;
  skip?: number;
  take?: number;
};
