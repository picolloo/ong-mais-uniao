import React from "react";
import faker from "faker";

interface TestimonialCardProps {
  classes?: string;
}

const TestimonialCard = ({ classes }: TestimonialCardProps) => (
  <div className={`rounded-lg shadow-md w-3/5 overflow-hidden ${classes}`}>
    <div
      className="h-36 bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80)",
      }}
    />
    <div className="p-3 flex flex-col justify-center">
      <span className="text-xl text-primary font-semibold">Jon Doe</span>
      <small className="text-gray-400 mb-2">Voluntário</small>
      <span className="text-gray-600 italic text-xs">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        incidunt quis fugiat accusamus. Dignissimos, beatae."
      </span>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex justify-center bg-primary text-white pt-5">
        <div className="flex flex-col justify-center items-center h-64 w-11/12">
          <h3 className="text-lg mb-6 font-bold uppercase">
            Como você pode ajudar?
          </h3>
          <span className="text-md text-center mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            numquam!
          </span>

          <div className="flex justify-between w-4/5">
            <button className="px-3 py-2 rounded-md bg-white text-black">
              Seja um voluntário
            </button>
            <button className="px-3 py-2 rounded-md bg-white text-black">
              Seja um doador
            </button>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="flex justify-around flex-col items-center">
          <TestimonialCard classes="mb-6" />
          <TestimonialCard classes="mb-6" />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

export const getStaticProps = () => {
  const testimonials = [...Array(3).keys()].map((_) => ({
    id: faker.name.title(),
    name: faker.name.findName(),
    role: faker.company.companyName(),
    quote: faker.lorem.sentences(2),
  }));

  return {
    props: { testimonials },
  };
};
