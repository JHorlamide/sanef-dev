import React, { useState } from "react";
import { LOGIN_LOGO } from "assets/images";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import NavLink from "components/layout/Navbar/NavLink/NavLink";
import { useNavigate } from "react-router-dom";

type SignFormType = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState<SignFormType>({
    email: "",
    password: ""
  });

  const togglePasswordShow = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (authData.email && authData.password) {
      console.log(authData);
      navigate("/dashboard");
    }
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="container mx-auto">
      <div className="container mx-auto my-20 bg-white rounded-xl w-[580px] h-[530px] shadow-lg">
        <div className="px-20 py-10">
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-1">
              <h1 className="font-bold text-[24px]">Login</h1>
              <p className="text-[14px]">sign into an existing account</p>
            </div>

            <div className="mx-5 w-[90.79px] h-[74px] mb-8">
              <img src={LOGIN_LOGO} alt="..." className="w-full h-full" />
            </div>
          </div>
        </div>

        <form className="px-16 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text[12px]" htmlFor="firstName">
                Email Address
              </label>
              <CustomInput
                id="email"
                className="rounded-full border border-gray-300 outline-buttonColor 
                focus:border-buttonColor focus:ring-buttonColor py-2 px-5 w-[431px]"
                inputProps={{
                  type: "email",
                  name: "email",
                  value: authData.email,
                  onChange: handleChange
                }}
              />
            </div>

            <div className="relative flex flex-col space-y-2">
              <label className="text[12px]" htmlFor="firstName">
                Password
              </label>
              <CustomInput
                id="password"
                className="rounded-full border border-gray-300 outline-buttonColor 
                focus:border-buttonColor focus:ring-buttonColor py-2 px-5 w-[431px]"
                inputProps={{
                  type: `${showPassword ? "text" : "password"}`,
                  name: "password",
                  value: authData.password,
                  onChange: handleChange
                }}
              />

              <div className="absolute inset-y-0 top-9 right-10">
                <h1
                  className="text-[12px] cursor-pointer"
                  onClick={togglePasswordShow}
                >
                  {showPassword ? "Hide" : "Show"}
                </h1>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col space-y-5">
            <NavLink
              path="/forgot-password"
              title="Forgot Password?"
              className="text-[14px] text-black hover:text-buttonColor"
            />

            <CustomBtn
              className="text-white font-semibold bg-buttonColor rounded-full py-3 px-5 w-[431px]
             hover:bg-lightGreen"
              onKeyPress={handlePress}
            >
              Login
            </CustomBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
