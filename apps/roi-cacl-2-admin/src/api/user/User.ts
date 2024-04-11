import { JsonValue } from "type-fest";
import { EventType } from "../eventType/EventType";
import { Credential } from "../credential/Credential";
import { DestinationCalendar } from "../destinationCalendar/DestinationCalendar";
import { Membership } from "../membership/Membership";
import { Booking } from "../booking/Booking";
import { Schedule } from "../schedule/Schedule";
import { Availability } from "../availability/Availability";
import { SelectedCalendar } from "../selectedCalendar/SelectedCalendar";
import { Webhook } from "../webhook/Webhook";
import { Impersonation } from "../impersonation/Impersonation";
import { ApiKey } from "../apiKey/ApiKey";
import { Account } from "../account/Account";
import { Session } from "../session/Session";
import { Feedback } from "../feedback/Feedback";
import { Workflow } from "../workflow/Workflow";

export type User = {
  id: number;
  username: string | null;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  password: string | null;
  bio: string | null;
  avatar: string | null;
  timeZone: string;
  weekStart: string;
  startTime: number;
  endTime: number;
  bufferTime: number;
  hideBranding: boolean;
  theme: string | null;
  createdDate: Date;
  trialEndsAt: Date | null;
  defaultScheduleId: number | null;
  completedOnboarding: boolean;
  locale: string | null;
  timeFormat: number | null;
  twoFactorSecret: string | null;
  twoFactorEnabled: boolean;
  identityProvider?: "CAL" | "GOOGLE" | "SAML";
  identityProviderId: string | null;
  invitedTo: number | null;
  plan?: "FREE" | "TRIAL" | "PRO";
  brandColor: string;
  darkBrandColor: string;
  away: boolean;
  allowDynamicBooking: boolean | null;
  metadata: JsonValue;
  verified: boolean | null;
  role?: "USER" | "ADMIN";
  disableImpersonation: boolean;
  eventTypes?: Array<EventType>;
  credentials?: Array<Credential>;
  destinationCalendar?: DestinationCalendar | null;
  teams?: Array<Membership>;
  bookings?: Array<Booking>;
  schedules?: Array<Schedule>;
  availability?: Array<Availability>;
  selectedCalendars?: Array<SelectedCalendar>;
  webhooks?: Array<Webhook>;
  impersonatedUsers?: Array<Impersonation>;
  impersonatedBy?: Array<Impersonation>;
  apiKeys?: Array<ApiKey>;
  accounts?: Array<Account>;
  sessions?: Array<Session>;
  feedback?: Array<Feedback>;
  workflows?: Array<Workflow>;
};
