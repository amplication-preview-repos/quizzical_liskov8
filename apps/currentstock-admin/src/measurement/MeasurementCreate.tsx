import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const MeasurementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <NumberInput label="percentChange" source="percentChange" />
      </SimpleForm>
    </Create>
  );
};
