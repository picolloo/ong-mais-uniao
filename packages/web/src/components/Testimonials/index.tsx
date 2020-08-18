import React from "react";
import { TestimonialProps, TestimonialItem } from "../../types/components";

const TestimonialCard = ({
  name,
  role,
  statement,
  imageUrl,
}: TestimonialItem) => (
  <div className="rounded-md shadow-md shadow-primary text-center overflow-hidden bg-white">
    <div
      className="h-36 bg-cover bg-center"
      style={{
        backgroundImage: `url(http://localhost:1337${imageUrl})`,
      }}
    />
    <div className="p-3 flex flex-col justify-center">
      <span className="text-xl text-primary font-semibold">{name}</span>
      <small className="text-gray-400 mb-2">{role}</small>
      <span className="text-gray-600 italic text-xs">"{statement}"</span>
    </div>
  </div>
);

const Testimonials: React.FC<TestimonialProps> = ({ testimonials }) => {
  return (
    <div className="pb-5">
      <div className="flex justify-center bg-primary text-white py-5 ">
        <div className="flex flex-col justify-center items-center h-96 w-11/12">
          <h3 className="text-lg mb-6 font-bold uppercase">
            Como você pode ajudar?
          </h3>
          <span className="text-md text-center mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            numquam!
          </span>

          <div className="flex flex-col sm:flex-row sm:justify-around w-4/5 md:max-w-xl">
            <button className="px-3 py-2 rounded-md bg-white text-black sm:w-44">
              Seja um voluntário
            </button>
            <button className="px-3 py-2 rounded-md bg-white text-black sm:w-44 mt-2 sm:mt-0">
              Seja um doador
            </button>
          </div>
        </div>
      </div>
      <div
        className="container h-full relative mx-auto px-1/12 md:px-0"
        style={{ top: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 lg:gap-40">
          {testimonials.map(({ id, name, role, statement, imageUrl }) => (
            <TestimonialCard
              key={id}
              id={id}
              name={name}
              role={role}
              statement={statement}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
