import axios from "axios";

import { New, Testimonial } from "../types/api";
import { NewsItem, TestimonialItem } from "../types/components";

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

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  const { data } = await api.get<Testimonial[]>("/testimonials");

  const testimonials = data.map((testimonialItem) => {
    return {
      id: testimonialItem.id,
      name: testimonialItem.name,
      role: testimonialItem.role,
      statement: testimonialItem.statement,
      imageUrl: testimonialItem.image.url,
    };
  });

  return testimonials;
};
