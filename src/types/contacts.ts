export type TContactsCardData = {
  id: number;
  text: string;
  link?: string;
  note?: string;
};

export type TContactsCardDocument = {
  name: string;
  link: string;
  icon: Element;
};

export type TContactsCard = {
  id: number;
  title: string;
  data: TContactsCardData[];
  icon: Element;
  document?: TContactsCardDocument;
};

export type TContactsRouteGeo = {
  lon: string;
  lat: string;
};

export type TContactsRouteMetro = {
  id: number;
  name: string;
  linkRoute: string;
  color: string;
  distance: string;
};
