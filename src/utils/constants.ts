import { TfiYoutube } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export const NAVIGATION = [
  {
    id: 1,
    path: "/about-us",
    title: "About Us"
  },
  {
    id: 2,
    path: "/our-partners",
    title: "Our Partners"
  },
  {
    id: 3,
    path: "/value-added-services",
    title: "Value Added Services"
  },
  {
    id: 4,
    path: "/media",
    title: "Media"
  },
  {
    id: 6,
    path: "/contact",
    title: "Contact"
  }
];

export const FOOTER_NAVIGATION = {
  FIRST_LINKS: [
    {
      id: 1,
      path: "/about-us",
      title: "About Us"
    },
    {
      id: 2,
      path: "/our-partners",
      title: "Partners"
    },
    {
      id: 3,
      path: "/value-added-services",
      title: "Value Added Services"
    }
    // {
    //   id: 4,
    //   path: "/agent-banking",
    //   title: "Agent Banking"
    // }
  ],

  SECOND_LINKS: [
    {
      id: 1,
      path: "/become-agent",
      title: "Become An Agent"
    },
    {
      id: 2,
      path: "/login",
      title: "Login"
    },
    {
      id: 3,
      path: "/contact",
      title: "Contact Us"
    }
  ],

  THIRD_LINKS: [
    {
      id: 1,
      path: "/terms-and-condition",
      title: "Terms and Condition"
    },
    {
      id: 2,
      path: "/privacy-policy",
      title: "Privacy Policy"
    }
  ]
};

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

// QUERIES TO FETCH NEWS/EVENT DATA FROM SANITY
export const GET_NEWS_QUERIES = "*[_type == 'news']";
