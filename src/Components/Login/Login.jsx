import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
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
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center text-white border border-transparent">
        <div>
          <div className="pt-2 text-5xl ml-[40%]">
            <FaRegCircleUser />
          </div>
          <div className="pt-10 text-3xl ml-[44%]">
            <FaLock />
          </div>
        </div>

        <h2 className="font-bold text-lg pt-6">Login</h2>
        <form
          className="rounded p-6 text-arial text-base"
          onSubmit={handleSubmit}
        >
          <div>
            <div>
              <label className="block text-white mb-2 text-left ">User</label>
              <input
                type="text"
                name="username"
                value={input.username}
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
                className="border rounded p-3 w-full bg-white  focus:outline-none text-black"
              />
            </div>
            <button
              type="submit"
              className="bg-grey text-black mt-6 py-3 px-6 rounded-full w-full"
            >
              Enviar
            </button>
            <div></div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
