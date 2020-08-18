import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

import { getNews, getNew } from "../../lib/api";
import { Navbar } from "../../components";
import { NewsDetails } from "../../types/components";

const NewDetail: React.FC<NewsDetails> = ({ title }) => {
  return <div>{title}</div>;
};

export default NewDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await getNews();

  const paths = news.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const newItem = await getNew({ slug: slug as string });

  return {
    props: {
      title: newItem.title,
    },
  };
};
