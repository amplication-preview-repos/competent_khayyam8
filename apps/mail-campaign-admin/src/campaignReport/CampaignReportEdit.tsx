import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CampaignTitle } from "../campaign/CampaignTitle";

export const CampaignReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="bounceCount" source="bounceCount" />
        <ReferenceInput
          source="campaign.id"
          reference="Campaign"
          label="campaign"
        >
          <SelectInput optionText={CampaignTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="clickCount" source="clickCount" />
        <NumberInput step={1} label="openCount" source="openCount" />
        <NumberInput step={1} label="sentCount" source="sentCount" />
        <NumberInput step={1} label="spamCount" source="spamCount" />
        <NumberInput
          step={1}
          label="unsubscribedCount"
          source="unsubscribedCount"
        />
      </SimpleForm>
    </Edit>
  );
};
