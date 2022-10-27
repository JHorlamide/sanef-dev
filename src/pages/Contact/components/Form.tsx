import React, { useState } from "react";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomTextarea from "components/widgets/CustomInput/CustomTextarea";
import Image from "components/widgets/Image/Image";
import { VERTICAL_LINE } from "assets/icons";
import { SOCIAL_LINK } from "../../../components/widgets/Footer/FooterContentTwo";
import useContactForm from "hooks/useContactForm";

interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface SocialIconProps {
  parentClassName: string;
}

export const SocialIcon = ({ parentClassName }: SocialIconProps) => {
  return (
    <div className={parentClassName}>
      {SOCIAL_LINK.map(({ id, link, Icon }) => (
        <a
          key={id}
          href={link}
          target={"_blank"}
          rel="noreferrer"
          className="bg-buttonColor rounded-full shadow-lg p-2 transition 
          ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Icon size={25} className="text-white" />
        </a>
      ))}
    </div>
  );
};

export const MobileForm = () => {
  const form = React.useRef<HTMLFormElement | string>("");
  const [formData, setFormData] = useState<IContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const { sendEmail } = useContactForm({
    formData: form.current
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative overflow-hidden flex flex-col space-y-5 pt-10 px-5">
      <div className="">
        <h1 className="text-[24px] leading-[32px] font-bold">
          Send Us a Message
        </h1>
      </div>

      <form
        className="flex flex-col space-y-4"
        ref={form as React.MutableRefObject<HTMLFormElement>}
        onSubmit={sendEmail}
      >
        <label className="" htmlFor="firstName">
          First Name
        </label>
        <CustomInput
          id="firstName"
          className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
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
          className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
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
          className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full"
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
          <CustomBtn className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
            +234
          </CustomBtn>
          <CustomInput
            id="phoneNumber"
            className="relative rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 w-full px-24"
            inputProps={{
              type: "text",
              name: "phoneNumber",
              value: formData.phoneNumber,
              onChange: handleChange
            }}
          />
        </div>

        <label className="" htmlFor="businessName">
          Message
        </label>
        <CustomTextarea
          id="message"
          className="container w-full rounded-2xl border border-gray-300 outline-buttonColor
          focus:border-buttonColor focus:ring-buttonColor"
          boxProps={{
            name: "message",
            rows: 3,
            value: formData.message,
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

        <div className="">
          <p className="mt-3 font-medium">info@sanefng.com</p>
          <p className="mt-3 font-medium">+234 909 555 7912</p>
        </div>

        <div className="">
          <SocialIcon parentClassName="flex space-x-5 py-10 w-full" />
        </div>
      </div>
    </section>
  );
};

export const DesktopForm = () => {
  const form = React.useRef<HTMLFormElement | string>("");
  const [formData, setFormData] = useState<IContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const { sendEmail } = useContactForm({
    formData: form.current
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      className="z-50 container mx-auto bg-white -mt-32 lg:-mt-[170px] mb-40 flex 
      justify-center items-baseline md:flex-col md:space-y-10 lg:space-y-0
      lg:flex-row lg:space-x-14 md:space-x-0 py-12 px-10 rounded-xl shadow-lg 
      w-[1179px]"
    >
      <div id="form" className="">
        <form
          className="flex flex-col space-y-8"
          ref={form as React.MutableRefObject<HTMLFormElement>}
          onSubmit={sendEmail}
        >
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <label className="" htmlFor="firstName">
                First Name
              </label>
              <CustomInput
                id="firstName"
                className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 px-5 w-80"
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
                className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 px-5 w-80"
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
                className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 px-5 w-80"
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
                  className="relative rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor focus:ring-buttonColor py-3 px-24 w-80"
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

          <div className="flex flex-col space-y-2">
            <label className="" htmlFor="businessName">
              Message
            </label>
            <CustomTextarea
              id="message"
              className="container w-full rounded-2xl border border-gray-300 
              outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
              boxProps={{
                name: "message",
                rows: 3,
                value: formData.message,
                onChange: handleChange
              }}
            />
          </div>

          <div className="pt-5">
            <CustomBtn className="text-white bg-buttonColor rounded-full py-3 px-5 w-60">
              Send Message
            </CustomBtn>
          </div>
        </form>
      </div>

      <div
        className="relative flex md:flex-row md:space-x-8 lg:space-x-0 
        lg:flex-col md:space-y-0 lg:space-y-12 md:w-full"
      >
        <div className="">
          <h1 className="font-bold text-[24px]">Contact Details</h1>
        </div>
        <div className="">
          <p className="text-[18px] text-start w-64">
            SANEF Limited, NCWS House, 2nd Floor, Plot 14B Ahmed Onibudo Street,
            Victoria Island, Lagos
          </p>
        </div>
        <div className="flex flex-col space-y-3 md:mt-3 lg:mt-0">
          <a
            href="mailto:info@sanef.com"
            className="mt-3 font-medium hover:text-buttonColor"
          >
            info@sanefng.com
          </a>
          <a
            href="tel:+234 909 555 7912"
            className="mt-3 font-medium hover:text-buttonColor"
          >
            +234 909 555 7912
          </a>
        </div>

        <SocialIcon parentClassName="md:hidden lg:flex space-x-5 py-10" />
        <Image
          image={VERTICAL_LINE}
          parentClassName="md:hidden lg:block absolute -top-14 -left-7"
        />
      </div>

      <SocialIcon parentClassName="lg:hidden md:flex justify-center space-x-5 py-4.5 w-full" />
    </section>
  );
};
