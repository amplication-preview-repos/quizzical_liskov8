import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const MeasurementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="percentChange" source="percentChange" />
      </SimpleForm>
    </Edit>
  );
};
