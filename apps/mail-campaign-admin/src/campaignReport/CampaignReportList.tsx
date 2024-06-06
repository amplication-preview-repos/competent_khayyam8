import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CAMPAIGN_TITLE_FIELD } from "../campaign/CampaignTitle";

export const CampaignReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CampaignReports"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
