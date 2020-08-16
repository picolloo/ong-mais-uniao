import React from "react";
import { GetStaticProps } from "next";

import { HomeProps } from "../types/components";
import { Hero, News, Socials, Testimonials, About } from "../components";
import { getNews } from "../lib/api";

export default function Home({ news }: HomeProps) {
  return (
    <div>
      <Hero />
      <About />
      <News news={news} />
      <Socials />
      <Testimonials />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const news = await getNews();

  return {
    props: { news },
  };
};
