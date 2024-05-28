// Types
import type { THeaderMenuResponse } from "~/types";

export default defineEventHandler((event): THeaderMenuResponse[] => {
  return [
    {
      id: 1,
      name: "О нас",
      link: "#",
    },
    {
      id: 2,
      name: "Умный софт",
      link: "#",
    },
    {
      id: 3,
      name: "Контакты",
      link: "#",
    },
    {
      id: 4,
      name: "Доставка",
      link: "#",
    },
    {
      id: 5,
      name: "Портфолио",
      link: "#",
    },
  ];
});
