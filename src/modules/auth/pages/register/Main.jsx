import { Input, Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import {Login} from '..'
import Logo from "../../../../assets/img/logo.png";

export default function Main() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const onChange = ({ target }) => setPassword(target.value);

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <a href="#" className="absolute mt-6">
          <img src={Logo} alt="logo" className="mx-4" />
        </a>
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-16 rounded-xl shadow-xl bg-white/95">
            {/* <h1 className="text-3xl pb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main to-second">Synes</h1> */}
            <h1 className="text-3xl text-center pb-6 font-bold text-second">
              <span className="bg-main rounded-lg px-1">Sy</span> nes
            </h1>
            <form action="">
              <div className="flex mx-6 flex-col justify-center items-center">
                <h1 className="text-2xl mb-12 font-bold">Register</h1>
                <p className="text-xl mb-6 w-9/12 text-center">
                  Hey, enter your details to create your account
                </p>
                <div className="w-full my-1">
                  <Input label="Username" color="amber" className="py-6" />
                </div>
                <div className="w-full my-12">
                  <div className="relative flex">
                    <Input
                      type={show ? "text" : "password"}
                      label="Password"
                      value={password}
                      onChange={onChange}
                      className="py-6"
                      containerProps={{
                        className: "",
                      }}
                    />
                    <IconButton
                      variant="text"
                      size="md"
                      disabled={!password}
                      color="white"
                      className={`${
                        password ? "text-amber-400" : ""
                      } !absolute right-1 top-1 bg-transparent rounded cursor-pointer`}
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <FiEyeOff className="text-2xl" />
                      ) : (
                        <FiEye className="text-2xl" />
                      )}
                    </IconButton>
                  </div>

                  <div className="relative flex mt-12">
                    <Input
                      type={show ? "text" : "password"}
                      label="Confirm Password"
                      value={password}
                      onChange={onChange}
                      className="py-6"
                      containerProps={{
                        className: "",
                      }}
                    />
                    <IconButton
                      variant="text"
                      size="md"
                      disabled={!password}
                      color="white"
                      className={`${
                        password ? "text-amber-400" : ""
                      } !absolute right-1 top-1 bg-transparent rounded cursor-pointer`}
                      onClick={() => setShow(!show)}
                    >
                      {show ? (
                        <FiEyeOff className="text-2xl" />
                      ) : (
                        <FiEye className="text-2xl" />
                      )}
                    </IconButton>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <Button
                    color="pink"
                    className="bg-main normal-case text-xl text-black mx-auto w-10/12 py-3"
                    size="lg"
                  >
                    Register
                  </Button>
                </div>

                <div className="text-xl text-center mt-6">
                  Already have an account?{" "}
                  </div>
                    <a href="/login" className="text-main">
                    Login
                  </a>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
