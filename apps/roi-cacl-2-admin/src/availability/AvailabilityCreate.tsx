import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";

export const AvailabilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Days" source="days" />
        <DateTimeInput label="Start Time" source="startTime" />
        <DateTimeInput label="End Time" source="endTime" />
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
