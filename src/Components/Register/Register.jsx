import React, { useState } from "react";
import validation from "./Validation";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validationErrors = validation({ ...input, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validation(input);
    try {
      setErrors(validationErrors);
      setInput({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
      });

      setErrors({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
      });
      Swal.fire({
        title: "¡Éxito!",
        text: "Usuario creado con éxito",
        icon: "success",
        confirmButtonColor: "#512DA8",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: "Error al enviar el formulario",
        icon: "error",
        confirmButtonColor: "#757575",
      });
      navigate("/");
    }
  };
  return (
    <div className="flex items-center justify-center h-full mt-4">
      <div className="text-center text-white border border-greyBlue shadow-darkPurple shadow-xl rounded-xl">
        <h2 className="font-bold text-2xl pt-6">Register</h2>
        <form
          className="rounded p-6 text-arial text-base"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-white mb-2 text-left ">Nombre:</label>
            <input
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              value={input.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="border rounded p-3 w-full  focus:outline-none"
            />
            <div className="h-4">
              <span className=" text-opacity-60 items-center flex text-sm">
                {errors?.name}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2 text-left ">
              Apellidos:
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Ingrese sus apellidos"
              value={input.lastname}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="border rounded p-3 w-full  focus:outline-none"
            />
            <div className="h-4">
              <span className=" text-opacity-60 items-center flex text-sm">
                {errors?.lastname}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2 text-left ">
              Correo Electrónico:
            </label>
            <input
              type="text"
              name="email"
              placeholder="Ingrese su correo electrónico"
              value={input.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className="border rounded p-3 w-full  focus:outline-none"
            />
            <div className="h-4">
              <span className=" text-opacity-60 items-center flex text-sm">
                {errors?.email}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2 text-left ">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={input.password}
              onChange={handleInputChange}
              className="border rounded p-3 w-80 bg-white  focus:outline-none text-black"
            />
            <ul className="list-disc  pl-6 mt-2 border rounded-md p-2">
              <li className="rounded-md text-sm">
                Debe tener una longitud mínima de 8 caracteres
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos una minúscula
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos una mayúscula
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos un dígito
              </li>
              <li className="rounded-md text-sm">
                Debe contener al menos un símbolo
              </li>
            </ul>

            <div className="h-4">
              <span className=" text-opacity-60 items-center flex text-sm">
                {errors?.password}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2 text-left ">
              Contraseña:
            </label>
            <input
              type="password"
              name="password2"
              placeholder="Repita su contraseña"
              value={input.password2}
              onChange={handleInputChange}
              className="border rounded p-3 w-80 bg-white  focus:outline-none text-black"
            />
            <div className="h-4">
              <span className=" text-opacity-60 items-center flex text-sm">
                {errors?.password2}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className=" bg-grey text-black mt-6 py-3  px-6 rounded-full w-full font-bold hover:bg-darkPurple 
              hover:text-white"
            >
              Regístrate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
