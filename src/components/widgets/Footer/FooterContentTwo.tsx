import React from "react";
import { TfiYoutube } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

interface FooterContentTwoProps {
  iconSize: number;
}

export const SOCIAL_LINK = [
  {
    id: 1,
    Icon: GrFacebookOption,
    link: "https://web.facebook.com/saneflimited"
  },
  {
    id: 2,
    Icon: BsTwitter,
    link: "https://twitter.com/saneflimited"
  },
  {
    id: 3,
    Icon: BsInstagram,
    link: "https://www.instagram.com/saneflimited/"
  },
  {
    id: 4,
    Icon: TfiYoutube,
    link: "https://www.youtube.com/c/SANEFNigeria"
  },
  {
    id: 5,
    Icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/sanef-nigeria-ltd/"
  }
];

const FooterContentTwo = ({ iconSize }: FooterContentTwoProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 mt-16">
      <p className="text-white md:text-xs mb-5 lg:text-md">
        Follow us on social media
      </p>

      <div className="flex space-x-8 md:space-x-10 items-center">
        {SOCIAL_LINK.map(({ id, link, Icon }) => (
          <a
            key={id}
            href={link}
            target={"_blank"}
            rel="noreferrer"
            className="shadow-lg"
          >
            <Icon
              size={iconSize}
              className="text-black bg-white rounded-full p-2 py-0 md:p-1 md:py-3"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterContentTwo;
