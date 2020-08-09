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
  <div className="bg-white shadow-md rounded-lg mt-2 xl:mt-0 max-w-md w-full sm:w-72 mx-auto">
    <div className="px-4 py-2 mt-2">
      <h3 className="font-bold text-md text-yellow-300 tracking-normal">
        My Journey to the Mountains.
      </h3>
      <small className="text-gray-400">20/04/2020 - Florianópolis</small>

      <p className="text-sm text-gray-700 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        reiciendis ad architecto at aut placeat quia, minus dolor.
      </p>

      <div className="flex justify-end mt-2">
        <button className="font-semibold text-yellow-300 hover:opacity-75 focus:outline-none ">
          Saiba mais
        </button>
      </div>
    </div>
  </div>
);

const News: React.FC = () => {
  return (
    <div className="md:container mx-auto p-4 my-14">
      <h2 className="text-yellow-300 font-semibold text-2xl">Notícias</h2>
      <div className="flex flex-col flex-wrap justify-between sm:flex-row items-center mt-4">
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
