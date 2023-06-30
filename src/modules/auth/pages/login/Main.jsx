import {
  Input,
  Button,
  IconButton,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import {Login} from '..'
import Logo from "../../../../assets/img/logo.png";
import axios from "../../../../config/axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  storeAllUser,
  storeToken,
  storeTokenType,
  storeUser,
} from "../../../../stores/storeAtoms";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

export default function Main() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const onChange = ({ target }) => setPassword(target.value);
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(storeToken);
  const [tokenType, setTokenType] = useRecoilState(storeTokenType);
  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    let formdata = new FormData();

    formdata.append("username", email);
    formdata.append("password", password);

    console.log(email, password);

    axios
      .post("login", formdata)
      .then((res) => {
        setShowAlertSucess(true);

        setTimeout(() => {
          setShowAlertSucess(false);
        }, 5000);
        const { access_token, token_type } = res.data;
        console.log(token_type, access_token);
        setToken(access_token);
        setTokenType(token_type);
        localStorage.setItem("userToken", access_token);
        localStorage.setItem("userTokenType", token_type);
        setLoading(false);
        navigate("/dashboard/users");
        return res.data;
      })
      .catch((err) => {
        setShowAlertDanger(true);

        setTimeout(() => {
          setShowAlertDanger(false);
        }, 5000);
        setLoading(false);
        return err;
      });
  };

  return (
    <>
      <div className="ring h-screen bg-login bg-no-repeat bg-contain bg-center">
        <div className="w-full h-full flex items-center mx-auto justify-around container">
          <div className="h-auto py-16 rounded-xl shadow-xl bg-white/95">
            {/* <h1 className="text-3xl pb-6 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main to-second">Synes</h1> */}
            <h1 className="text-3xl text-center pb-6 font-bold text-second">
              <span className="bg-main rounded-lg px-1">Sy</span> nes
            </h1>
            <Alert
              color="red"
              icon={<ExclamationTriangleIcon className="h-6 w-6" />}
              open={showAlertDanger}
              setOpen={setShowAlertDanger}
            >
              Erreur de creation d'un nouvelle Section !
            </Alert>
            <Alert
              color="green"
              icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
              open={showAlertSucess}
              setOpen={setShowAlertSucess}
            >
              Creation d'un nouvelle Section réussit !
            </Alert>
            <form onSubmit={handleSubmit} action="">
              <div className="flex mx-6 flex-col justify-center items-center">
                <h1 className="text-2xl mb-12 font-bold">Login</h1>
                <p className="text-xl mb-6 w-9/12 text-center">
                  Hey, enter your details to get sign in to your account
                </p>
                <div className="w-full my-1">
                  <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    type="email"
                    label="Adresse Mail"
                    color="amber"
                    className="py-6"
                  />
                </div>
                <div className="w-full my-12">
                  <div className="relative flex">
                    <Input
                      type={show ? "text" : "password"}
                      label="Password"
                      color="amber"
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
                <div className="w-full flex justify-center mt-12">
                  <Button
                    type="submit"
                    color="pink"
                    className="bg-main flex justify-center gap-10 normal-case text-xl text-black mx-auto w-10/12 py-3"
                    size="lg"
                  >
                    Log in {loading && <Spinner color="amber" />}
                  </Button>
                </div>

                <div className="text-xl text-center mt-6">
                  Don't have an account?
                </div>
                <a href="/register" className="text-main">
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
