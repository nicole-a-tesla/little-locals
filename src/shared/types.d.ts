interface Venue {
  name: string;
  latitude: number;
  longitude: number;
  allowsBabies: boolean;
  hasTimeLimit: boolean;
  allowsBabiesUntil: number; // Datetime? Moment?
  accessible: boolean;
  changingTable: boolean;
  image?: string;
  hours?: HoursOfOperation;
  url?: string;
}

interface HoursOfOperation {
  monday: HoursOpen;
  tuesday: HoursOpen;
  wednesday: HoursOpen;
  thursday: HoursOpen;
  friday: HoursOpen;
  saturday: HoursOpen;
  sunday: HoursOpen;
}

interface OpenWindow {
  start: number;
  end: number;
}

type HoursOpen = Closed || OpenWindow;
type Closed = "Closed";
