import React from "react";
import { GetStaticProps } from "next";

import { HomeProps } from "../types/components";
import {
  Hero,
  News,
  Socials,
  Testimonials,
  About,
  Navbar,
} from "../components";
import { getNews, getTestimonials } from "../lib/api";

export default function Home({ news, testimonials }: HomeProps) {
  return (
    <div>
      <Navbar absolute />
      <Hero />
      <About />
      <News news={news} />
      <Socials />
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const news = await getNews();
  const testimonials = await getTestimonials();

  return {
    props: { news, testimonials },
  };
};
