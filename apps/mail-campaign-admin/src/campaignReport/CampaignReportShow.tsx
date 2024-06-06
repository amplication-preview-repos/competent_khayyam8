import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CAMPAIGN_TITLE_FIELD } from "../campaign/CampaignTitle";

export const CampaignReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bounceCount" source="bounceCount" />
        <ReferenceField
          label="campaign"
          source="campaign.id"
          reference="Campaign"
        >
          <TextField source={CAMPAIGN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="clickCount" source="clickCount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="openCount" source="openCount" />
        <TextField label="sentCount" source="sentCount" />
        <TextField label="spamCount" source="spamCount" />
        <TextField label="unsubscribedCount" source="unsubscribedCount" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
