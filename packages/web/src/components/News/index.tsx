import React from "react";

import { NewsItem, NewsProps } from "../../types/components";

const NewsCard = ({
  id,
  title,
  month,
  day,
  year,
  description,
  slug,
}: NewsItem): React.ReactElement => (
  <div className="bg-white overflow-hidden hover:bg-yellow-100 border border-gray-200 p-3 cursor-pointer">
    <div className="m-2 text-sm">
      <span className="text-right text-xs">
        {month} {day}, {year}
      </span>
      <h2 className="font-bold text-lg h-5 sm:h-2 mb-8">{title}</h2>

      <p className="text-xs">{description}</p>
    </div>
    <div className="w-full text-right mt-4">
      <a
        className="text-yellow-400 uppercase font-bold text-sm"
        href={`/news/${slug}`}
      >
        Saiba mais
      </a>
    </div>
  </div>
);

const News: React.FC<NewsProps> = ({ news }) => {
  return (
    <div className="md:container mx-auto p-4 my-14">
      <h2 className="text-yellow-300 font-semibold text-2xl">Notícias</h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
        {news.map(({ id, title, month, day, year, description, slug }) => (
          <NewsCard
            key={id}
            id={id}
            title={title}
            month={month}
            day={day}
            year={year}
            description={description}
            slug={slug}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
