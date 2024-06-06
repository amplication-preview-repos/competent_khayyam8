import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMPAIGN_TITLE_FIELD } from "./CampaignTitle";

export const CampaignShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CampaignReport"
          target="campaignId"
          label="CampaignReports"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
