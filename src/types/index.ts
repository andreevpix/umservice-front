export type THeaderMenuResponse = {
  id: number;
  name: string;
  link: string;
};

export type TFooterMenuItem = {
  id: number;
  name: string;
  link: string;
};

export type TFooterMenuResponse = {
  id: number;
  title: string;
  items: TFooterMenuItem[];
};

export type TFooterSocial = {
  id: number;
  link: string;
  icon: Element;
};

export type TSubMenuResponse = {
  id: number;
  name: string;
  link: string;
};
