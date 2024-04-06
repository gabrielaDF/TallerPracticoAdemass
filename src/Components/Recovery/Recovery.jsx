import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Recovery = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Usuario enviado"); // reemplazar con endpoint al back
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-white border border-greyBlue shadow-darkPurple shadow-xl rounded-xl">
        <div>
          <div className="pt-2 text-5xl ml-[45%] ">
            <FaRegCircleUser />
          </div>
        </div>

        <h2 className="font-bold text-lg pt-6">Recovery Password</h2>
        <form
          className="rounded p-6 text-arial text-base"
          onSubmit={handleSubmit}
        >
          <div>
            <div>
              <label className="block text-white mb-2 text-left ">Email</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="border rounded p-3 w-full bg-white focus:outline-none text-black"
              />
            </div>
            <div>
              <label className="block text-white mb-2 text-left pt-4">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="border rounded p-3 w-80 bg-white  focus:outline-none text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-grey text-black mt-6 py-3 px-6 rounded-full w-full font-bold hover:bg-darkPurple hover:text-white"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Recovery;
