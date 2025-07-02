export interface Event {
  name: string;
  time: string;
  description: string;
}

export interface Festival {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  region: string;
  date: Date;
  image: string;
  events: Event[];
  dataAiHint?: string;
}
