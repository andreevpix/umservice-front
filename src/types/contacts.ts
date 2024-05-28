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
