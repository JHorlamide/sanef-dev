import React, { Fragment } from "react";
import { Logo } from "assets/images";
import { DESKTOP_LINE } from "assets/icons";
import { FOOTER_NAVIGATION } from "utils/constants";
import FooterContentOne from "./FooterContentOne";
import FooterContentTwo from "./FooterContentTwo";
import FooterCopyright from "./FooterCopyright";
import FooterMobile from "./FooterMobile";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  const MAILCHIMP_URL = String(process.env.REACT_APP_MAILCHIMP_URL);

  return (
    <Fragment>
      <section className="z-50 hidden px-20 bg-center bg-no-repeat bg-cover bg-footer-image-desktop md:block">
        <div className="flex flex-col items-center justify-center pt-10 space-y-8">
          <FooterContentOne
            headingClassName="text-white text-2xl text-center font-semibold"
            contentClassName="text-white text-md text-center"
          />

          <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={({ subscribe, status, message }) => (
              <NewsLetterForm
                status={status}
                message={message as string | Node}
                onValidated={(formData: { EMAIL: string }) =>
                  subscribe(formData)
                }
              />
            )}
          />
        </div>

        {/* HORIZONTAL LINE */}
        <div className="pt-16">
          <img src={DESKTOP_LINE} alt="long-horizontal-lin" width={"100%"} />
        </div>

        <div className="grid grid-cols-4 pt-10 md:gap-10 lg:gap-6">
          <div>
            <img className="w-28" src={Logo} alt="" />
          </div>

          {/* NAV ITEM ONE */}
          <div className="">
            <h1 className="font-bold text-white">SANEF</h1>

            <div className="flex flex-col mt-3 space-y-3 ">
              {FOOTER_NAVIGATION.FIRST_LINKS.map(({ id, title, path }) => (
                <RouterLink
                  className="text-sm font-medium text-white hover:text-buttonColor"
                  key={id}
                  path={path}
                  title={title}
                />
              ))}
            </div>
          </div>

          {/* NAV ITEM TWO */}
          <div className="">
            <h1 className="font-bold text-white">Quick Actions</h1>

            <div className="flex flex-col mt-3 space-y-3 ">
              {FOOTER_NAVIGATION.SECOND_LINKS.map(({ id, title, path }) => (
                <RouterLink
                  className="text-sm font-medium text-white hover:text-buttonColor"
                  key={id}
                  path={path}
                  title={title}
                />
              ))}
            </div>
          </div>

          {/* NAV ITEM THREE */}
          {/* <div className="">
            <h1 className="font-bold text-white">Legal</h1>

            <div className="flex flex-col mt-3 space-y-3 ">
              {FOOTER_NAVIGATION.THIRD_LINKS.map(({ id, title, path }) => (
                <RouterLink
                  className="text-sm font-medium text-white hover:text-buttonColor"
                  key={id}
                  path={path}
                  title={title}
                />
              ))}
            </div>
          </div> */}

          {/* NAV ITEM FOUR */}
          <div className="">
            <h1 className="font-bold text-white">Contact Us</h1>

            <div className="flex flex-col mt-3 space-y-3">
              <a
                href="mailto:info@sanef.com"
                className="text-sm font-medium text-white hover:text-buttonColor"
              >
                info@sanefng.com
              </a>
              <p className="text-white">+234 909 555 7912</p>
              {/* <a
                href="tel:+234 909 555 7912"
                className="text-sm font-medium text-white hover:text-buttonColor"
              >
                +234 909 555 7912
              </a> */}
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

      <FooterMobile />
    </Fragment>
  );
};

export default Footer;
