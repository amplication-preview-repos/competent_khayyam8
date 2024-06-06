import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CampaignReportTitle } from "../campaignReport/CampaignReportTitle";

export const CampaignCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="campaignReports"
          reference="CampaignReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CampaignReportTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
