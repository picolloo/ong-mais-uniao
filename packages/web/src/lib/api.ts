import axios from "axios";

import { New } from "../types/api";
import { NewsItem } from "../types/components";

const api = axios.create({ baseURL: "http://localhost:1337" });

export const getNews = async (): Promise<NewsItem[]> => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const { data } = await api.get<New[]>("/news");

  const news = data.map((newItem) => {
    const date = new Date(newItem.created_at);

    return {
      id: newItem.id,
      title: newItem.title,
      day: date.getDate(),
      month: months[date.getMonth()],
      year: date.getFullYear(),
      description: newItem.description,
      slug: newItem.slug,
    };
  });

  return news;
};
