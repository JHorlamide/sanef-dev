import React, { ChangeEvent, FormEvent } from "react";
import { MOBILE_LINE } from "assets/icons";
import { Logo } from "assets/index";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { FOOTER_NAVIGATION } from "utils/constants";
import FooterContentOne from "./FooterContentOne";
import FooterContentTwo from "./FooterContentTwo";
import FooterCopyright from "./FooterCopyright";
import RouterLink from "components/Navbar/NavLink/RouterLink";

interface FooterMobileProps {
  email: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubscription: (e: FormEvent<HTMLFormElement>) => void;
}

const FooterMobile = ({
  email,
  handleChange,
  handleSubscription
}: FooterMobileProps) => {
  return (
    <section className="md:hidden lg:hidden bg-footer-image-mobile bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center pt-10">
      <div className="">
        <img className="w-28" src={Logo} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center space-y-2.5 mt-12">
        <h1 className="text-white text-2xl font-bold">SANEF</h1>
        {FOOTER_NAVIGATION.FIRST_LINKS.map(({ id, title, path }) => (
          <RouterLink
            className="text-white"
            key={id}
            path={path}
            title={title}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mt-12">
        <h1 className="text-white text-2xl font-bold">Quick Actions</h1>
        {FOOTER_NAVIGATION.SECOND_LINKS.map(({ id, title, path }) => (
          <RouterLink
            className="text-white"
            key={id}
            path={path}
            title={title}
          />
        ))}
      </div>

      <FooterContentOne
        parentClassName="flex flex-col justify-center items-center space-y-1 mt-12"
        headingClassName="text-white text-xl font-bold"
        contentClassName="text-white text-xs"
      />

      <div className="mt-4">
        <form className="relative" onSubmit={handleSubscription}>
          <CustomInput
            id=""
            className="text-xs placeholder:text-white pl-[14px] text-left px-48 py-4 rounded-full bg-transparent border-2 border-white"
            inputProps={{
              type: "email",
              name: "email",
              placeholder: "Your Email",
              value: email,
              onChange: handleChange
            }}
          />

          <div className="absolute inset-y-0 right-0 flex items-center">
            <CustomBtn
              className={
                "text-white font-medium px-8 py-3 border-r-2 rounded-full bg-buttonColor"
              }
            >
              Get Started
            </CustomBtn>
          </div>
        </form>
      </div>

      <div className="mt-10">
        <img src={MOBILE_LINE} alt="horizontal-line" />
      </div>

      <div className="mt-10 text-white font-semibold flex flex-col justify-center items-center space-y-9">
        <p>Terms and Condition</p>
        <p>Privacy Policy</p>
        <p>info@sanefng.com</p>
        <p>+234 909 555 7912</p>
      </div>

      <div className="mt-10">
        <img src={MOBILE_LINE} alt="horizontal-line" />
      </div>

      <FooterContentTwo
        parentClassName="flex flex-col justify-center items-center space-y-1 mt-12"
        contentClassName="text-white text-xs mb-5"
        headingClassName="text-white text-2xl tracking-widest font-medium"
      />

      <FooterCopyright
        parentStyle="flex justify-center items-center mt-10 mb-10"
        contentStyle="text-white text-center"
      />
    </section>
  );
};

export default FooterMobile;
