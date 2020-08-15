import React from "react";
import faker from "faker";

interface NewsCardProps {
  title?: string;
  date?: string;
  description?: string;
  href?: string;
}

const NewsCard = ({
  title,
  date,
  description,
  href,
}: NewsCardProps): React.ReactElement => (
  <div className="bg-white overflow-hidden hover:bg-yellow-100 border border-gray-200 p-3 cursor-pointer">
    <div className="m-2 text-sm">
      <span className="text-right text-xs">Jan 17, 2020</span>
      <h2 className="font-bold text-lg h-2 mb-8">
        My Journey to the Mountains
      </h2>

      <p className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div className="w-full text-right mt-4">
      <a className="text-yellow-400 uppercase font-bold text-sm" href="#">
        Saiba mais
      </a>
    </div>
  </div>
);

const News: React.FC = () => {
  return (
    <div className="md:container mx-auto p-4 my-14">
      <h2 className="text-yellow-300 font-semibold text-2xl">Notícias</h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default News;

export const getStaticProps = () => {
  const news = [...Array(5).keys()].map((_) => ({
    title: faker.name.title(),
    date: faker.date.past().toString(),
    description: faker.lorem.sentences(2),
    href: faker.internet.url(),
  }));

  return {
    props: { news },
  };
};
