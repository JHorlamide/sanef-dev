import React, { useState } from "react";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomTextarea from "components/widgets/CustomInput/CustomTextarea";
// import Image from "components/widgets/Image/Image";
// import { VERTICAL_LINE } from "assets/icons";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
}

export const MobileForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative overflow-hidden flex flex-col space-y-5 pt-20 px-5">
      <div className="">
        <h1 className="text-[24px] leading-[32px] font-bold">
          Send Us a Message
        </h1>
      </div>

      <form action="" className="flex flex-col space-y-4">
        <label className="" htmlFor="firstName">
          First Name
        </label>
        <CustomInput
          id="firstName"
          className="rounded-full border border-gray-300 py-3 px-24"
          inputProps={{
            type: "text",
            name: "firstName",
            value: formData.firstName,
            onChange: handleChange
          }}
        />

        <label className="" htmlFor="lastName">
          Last Name
        </label>
        <CustomInput
          id="lastName"
          className="rounded-full border border-gray-300 py-3 px-24"
          inputProps={{
            type: "text",
            name: "lastName",
            value: formData.lastName,
            onChange: handleChange
          }}
        />

        <label className="" htmlFor="email">
          Email Address
        </label>
        <CustomInput
          id="email"
          className="rounded-full border border-gray-300 py-3 px-24"
          inputProps={{
            type: "text",
            name: "email",
            value: formData.email,
            onChange: handleChange
          }}
        />

        <label className="" htmlFor="phoneNumber">
          Phone Number
        </label>

        <div>
          {/* <CustomBtn className="z-50 bg-gray-200 ml-1 mt-1 py-[9px] px-6 rounded-full relative">
            +234
          </CustomBtn>

          <CustomInput
            id="phoneNumber"
            className="absolute right-3 rounded-full border border-gray-300 py-3 px-24"
            inputProps={{
              type: "text",
              name: "phoneNumber",
              value: formData.phoneNumber,
              onChange: handleChange
            }}
          /> */}
          <CustomBtn className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
            +234
          </CustomBtn>
          <CustomInput
            id="phoneNumber"
            className="relative rounded-full border border-gray-300 py-3 w-full px-24"
            inputProps={{
              type: "text",
              name: "phoneNumber",
              value: formData.phoneNumber,
              onChange: handleChange
            }}
          />
        </div>

        <label className="" htmlFor="businessName">
          Business Name
        </label>
        <CustomInput
          id="businessName"
          className="rounded-full border border-gray-300 py-3 px-24"
          inputProps={{
            type: "text",
            name: "businessName",
            value: formData.businessName,
            onChange: handleChange
          }}
        />

        <CustomBtn className="text-white bg-buttonColor rounded-full py-3 px-5 w-60">
          Send Message
        </CustomBtn>
      </form>

      <div className="pt-12">
        <h1 className="font-bold text-[24px]">Contact Details</h1>
        <p className="mt-3 text-start">
          SANEF Limited, NCWS House, 2nd Floor, Plot 14B Ahmed Onibudo Street,
          Victoria Island, Lagos
        </p>
        <p className="mt-3 font-medium">info@sanefng.com</p>
        <p className="mt-3 font-medium">+234 909 555 7912</p>
        <h1
          className={
            "py-10 text-buttonColor text-2xl tracking-widest font-medium"
          }
        >
          E D Q P C
        </h1>
      </div>
    </section>
  );
};

export const DesktopForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="z-50 container mx-auto -mt-32 lg:-mt-[170px] mb-40 flex justify-center items-center md:flex-col md:space-y-6 lg:space-y-0 lg:flex-row space-x-14 bg-white py-12 px-10 rounded-xl shadow-lg w-[1179px]">
      {/* <div id="form" className="container"> */}
      <div id="form" className="">
        <form action="" className="relative flex flex-col space-y-8">
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <label className="" htmlFor="firstName">
                First Name
              </label>
              <CustomInput
                id="firstName"
                className="rounded-full border border-gray-300 py-3 px-1 w-80"
                inputProps={{
                  type: "text",
                  name: "firstName",
                  value: formData.firstName,
                  onChange: handleChange
                }}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="" htmlFor="lastName">
                Last Name
              </label>
              <CustomInput
                id="lastName"
                className="rounded-full border border-gray-300 py-3 px-1 w-80"
                inputProps={{
                  type: "text",
                  name: "lastName",
                  value: formData.lastName,
                  onChange: handleChange
                }}
              />
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <label className="" htmlFor="email">
                Email Address
              </label>
              <CustomInput
                id="email"
                className="rounded-full border border-gray-300 py-3 px-1 w-80"
                inputProps={{
                  type: "text",
                  name: "email",
                  value: formData.email,
                  onChange: handleChange
                }}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="" htmlFor="phoneNumber">
                Phone Number
              </label>

              <div className="">
                <CustomBtn className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                  +234
                </CustomBtn>
                <CustomInput
                  id="phoneNumber"
                  className="relative rounded-full border border-gray-300 py-3 px-24 w-80"
                  inputProps={{
                    type: "text",
                    name: "phoneNumber",
                    value: formData.phoneNumber,
                    onChange: handleChange
                  }}
                />
              </div>
            </div>
          </div>

          <CustomTextarea
            id="message"
            className="container w-full rounded-2xl border border-gray-300"
            boxProps={{
              rows: 3
            }}
          />

          <CustomBtn className="text-white bg-buttonColor rounded-full py-3 px-5 w-60">
            Send Message
          </CustomBtn>
        </form>
      </div>

      <div className="pt-6 relative md:w-full">
        <h1 className="font-bold text-[24px]">Contact Us</h1>

        <div className="md:flex md:space-x-5 lg:block lg:space-x-0">
          <div className="">
            <p className="text-[18px] text-start w-64 mt-6">
              SANEF Limited, NCWS House, 2nd Floor, Plot 14B Ahmed Onibudo
              Street, Victoria Island, Lagos
            </p>
          </div>

          <div className="flex flex-col space-y-3 md:mt-3 lg:mt-10">
            <p className="mt-3 font-medium">info@sanefng.com</p>
            <p className="mt-3 font-medium">+234 909 555 7912</p>
          </div>

          <div className="">
            <h1
              className={
                "md:py-4.5 py-5 lg:py-16 text-buttonColor text-2xl tracking-widest font-medium"
              }
            >
              E D Q P C
            </h1>
          </div>
        </div>
      </div>

      {/* <Image image={VERTICAL_LINE} parentClassName="absolute left-[780px]" /> */}
    </section>
  );
};
