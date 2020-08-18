import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Volunteer } from "../../types/api";
import { createVolunteer } from "../../lib/api";

const Contact: React.FC = () => {
  const [loading, loadingSet] = useState(false);
  const { register, handleSubmit, errors } = useForm<
    Pick<Volunteer, "name" | "email" | "phone">
  >();

  const onSubmit = async ({ name, email, phone }) => {
    loadingSet((loading) => !loading);
    await createVolunteer({
      name,
      email,
      phone,
    });
    loadingSet((loading) => !loading);
  };

  return (
    <div className="py-20">
      <div className="w-full flex justify-center">
        <h3 className="text-4xl font-semibold text-primary mx-auto mb-5">
          Quer fazer parte deste projeto?
        </h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md shadow-primary w-full max-w-md mx-auto rounded px-8 pt-6 pb-8 mb-4"
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
            disabled={loading}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
