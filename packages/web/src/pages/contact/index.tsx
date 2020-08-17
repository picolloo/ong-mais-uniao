import React from "react";
import { useForm } from "react-hook-form";
import { Volunteer } from "../../types/api";
import { createVolunteer } from "../../lib/api";

const Contact: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<
    Pick<Volunteer, "name" | "email" | "phone">
  >();

  const onSubmit = async ({ name, email, phone }) => {
    await createVolunteer({
      name,
      email,
      phone,
    });
  };

  console.log(errors);

  return (
    <div className="w-full max-w-sm mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            name="name"
            id="name"
            ref={register({
              required: true,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nome"
          ></input>
          {errors.name && "First name is required"}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            ref={register({
              required: true,
            })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Telefone
          </label>
          <input
            id="phone"
            name="phone"
            type="number"
            ref={register}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="(00) 00000-0000"
          ></input>
        </div>

        <div className="flex items-center justify-end">
          <button
            className="bg-primary hover:opacity-75 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
