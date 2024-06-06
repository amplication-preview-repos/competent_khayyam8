import { EmailTemplate as TEmailTemplate } from "../api/emailTemplate/EmailTemplate";

export const EMAILTEMPLATE_TITLE_FIELD = "name";

export const EmailTemplateTitle = (record: TEmailTemplate): string => {
  return record.name?.toString() || String(record.id);
};
