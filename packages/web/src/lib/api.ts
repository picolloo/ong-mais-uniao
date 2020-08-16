import axios from "axios";

import { New, Testimonial, GetNewsProps } from "../types/api";
import { NewsItem, TestimonialItem } from "../types/components";

const api = axios.create({ baseURL: "http://localhost:1337" });

export const getNews = async ({
  ordered = true,
  limit = 6,
}: GetNewsProps = {}): Promise<NewsItem[]> => {
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

  const queryString = `?${ordered && "_sort=created_at:desc"}${
    limit && `&_limit=${limit}`
  }`;

  const { data } = await api.get<New[]>(`/news${queryString}`);

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

export const getNew = async ({
  slug,
}: Pick<New, "slug">): Promise<New | undefined> => {
  const { data } = await api.get<New>(`/news?slug=${slug}`);

  return data[0];
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
