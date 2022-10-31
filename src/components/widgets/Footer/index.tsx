import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { Logo } from "assets/index";
import { DESKTOP_LINE } from "assets/icons";
import { FOOTER_NAVIGATION } from "utils/constants";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import FooterContentOne from "./FooterContentOne";
import FooterContentTwo from "./FooterContentTwo";
import FooterCopyright from "./FooterCopyright";
import FooterMobile from "./FooterMobile";
import RouterLink from "components/Navbar/NavLink/RouterLink";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscription = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <Fragment>
      <section className="z-50 hidden bg-footer-image-desktop bg-cover bg-center bg-no-repeat px-20 md:block">
        <div className="pt-10 flex flex-col justify-center items-center space-y-8">
          <FooterContentOne
            headingClassName="text-white text-2xl text-center font-semibold"
            contentClassName="text-white text-md text-center hover:text-buttonColor"
          />

          <form
            className="flex justify-center items-center space-x-5"
            onSubmit={handleSubscription}
          >
            <CustomInput
              id=""
              className="text-xs text-white placeholder:text-white rounded-full bg-transparent border-2 border-white md:pl-[28px] md:py-4 px-72"
              inputProps={{
                type: "email",
                name: "email",
                placeholder: "Your Email",
                value: email,
                onChange: handleChange
              }}
            />

            <div className="inset-y-0 right-0 flex items-center">
              <CustomBtn
                className={
                  "text-white font-medium px-8 py-3 rounded-full bg-buttonColor hover:bg-lightGreen"
                }
              >
                Get Started
              </CustomBtn>
            </div>
          </form>
        </div>

        {/* HORIZONTAL LINE */}
        <div className="pt-16">
          <img src={DESKTOP_LINE} alt="long-horizontal-lin" width={"100%"} />
        </div>

        <div className="grid grid-cols-4 md:gap-10 lg:gap-6 pt-10">
          <div>
            <img className="w-28" src={Logo} alt="" />
          </div>

          {/* NAV ITEM ONE */}
          <div className="">
            <h1 className="text-white font-bold">SANEF</h1>

            <div className="flex flex-col space-y-3 mt-3 ">
              {FOOTER_NAVIGATION.FIRST_LINKS.map(({ id, title, path }) => (
                <RouterLink
                  className="text-white text-sm font-medium hover:text-buttonColor"
                  key={id}
                  path={path}
                  title={title}
                />
              ))}
            </div>
          </div>

          {/* NAV ITEM TWO */}
          <div className="">
            <h1 className="text-white font-bold">Quick Actions</h1>

            <div className="flex flex-col space-y-3 mt-3 ">
              {FOOTER_NAVIGATION.SECOND_LINKS.map(({ id, title, path }) => (
                <RouterLink
                  className="text-white text-sm font-medium hover:text-buttonColor"
                  key={id}
                  path={path}
                  title={title}
                />
              ))}
            </div>
          </div>

          {/* NAV ITEM THREE */}
          {/* <div className="">
            <h1 className="text-white font-bold">Legal</h1>

            <div className="flex flex-col space-y-3 mt-3 ">
              {FOOTER_NAVIGATION.THIRD_LINKS.map(({ id, title, path }) => (
                <RouterLink
                  className="text-white text-sm font-medium hover:text-buttonColor"
                  key={id}
                  path={path}
                  title={title}
                />
              ))}
            </div>
          </div> */}

          {/* NAV ITEM FOUR */}
          <div className="">
            <h1 className="text-white font-bold">Contact Us</h1>

            <div className="flex flex-col space-y-3 mt-3">
              <a
                href="mailto:info@sanef.com"
                className="text-white text-sm font-medium hover:text-buttonColor"
              >
                info@sanefng.com
              </a>
              <a
                href="tel:+234 909 555 7912"
                className="text-white text-sm font-medium hover:text-buttonColor"
              >
                +234 909 555 7912
              </a>
            </div>
          </div>
        </div>

        <FooterContentTwo iconSize={50} />

        {/* HORIZONTAL LINE */}
        <div className="pt-16">
          <img src={DESKTOP_LINE} alt="long-horizontal-lin" width={"100%"} />
        </div>

        <FooterCopyright
          parentStyle="flex justify-center items-center py-10"
          contentStyle="text-white text-center"
        />
      </section>

      <FooterMobile
        email={email}
        handleChange={handleChange}
        handleSubscription={handleSubscription}
      />
    </Fragment>
  );
};

export default Footer;
