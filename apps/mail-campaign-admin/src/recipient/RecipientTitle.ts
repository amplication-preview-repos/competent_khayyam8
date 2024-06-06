import { Recipient as TRecipient } from "../api/recipient/Recipient";

export const RECIPIENT_TITLE_FIELD = "firstName";

export const RecipientTitle = (record: TRecipient): string => {
  return record.firstName?.toString() || String(record.id);
};
