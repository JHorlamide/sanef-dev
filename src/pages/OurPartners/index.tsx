import React, { Fragment } from "react";
import Navbar from "components/Navbar/Navbar";
import style from "./style.module.css";
import Image from "components/widgets/Image/Image";
import { DOTS } from "assets/icons";
import { OUR_PARTNERS_LOGOS } from "./content";
import PartnersTabs from "./components/PartnersTabs";
import PartnersAndName from "./components/PartnersAndName";
import Footer from "components/widgets/Footer";

// interface LogoAndNameProps {
//   logo?: string;
//   name?: string;
//   partnerLogo?: {
//     id: number;
//     name: string;
//     logo: string;
//   }[];
// }

// const LogoAndName = ({ partnerLogo, logo, name }: LogoAndNameProps) => {
//   return (
//     <div className="inline-block flex-col space-y-2 justify-center items-center px-3 bg-clip-content">
//       <div className="bg-white p-4 m-0 rounded-full">
//         <img className="w-24 h-24 m-0" src={logo} alt={name} />
//       </div>

//       <p className="font-semibold text-center whitespace-pre-line md:whitespace-normal">
//         {name}
//       </p>
//     </div>
//   );
// };

// const LogoAndName2 = ({ partnerLogo }: LogoAndNameProps) => {
//   return (
//     <div className="inline-block flex-col space-y-2 justify-center items-center px-3 bg-clip-content">
//       {partnerLogo.map((logo) => (
//         <>
//           <div className="relative flex items-center mt-8" key={logo.id}>
//             <div
//               id="slider"
//               className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
//             >
//               <div className="bg-white p-4 m-0 rounded-full">
//                 <img
//                   className="w-24 h-24 m-0"
//                   src={logo.logo}
//                   alt={logo.name}
//                 />
//               </div>
//             </div>
//           </div>

//           <p className="font-semibold text-center whitespace-pre-line md:whitespace-normal">
//             {logo.name}
//           </p>
//         </>
//       ))}
//     </div>
//   );
// };

const OurPartners = () => {
  return (
    <Fragment>
      <section
        className={`${style.about_hero} relative bg-about-hero-mobile md:bg-about-hero-desktop bg-center bg-cover bg-no-repeat items-center w-full h-96 lg:h-full`}
      >
        <Navbar />

        <div className="lg:py-28">
          <h1 className="text-white text-4xl text-center max-w-lg mx-auto my-10 font-extrabold lg:-mt-5">
            Our Partners
          </h1>
        </div>
      </section>

      <section className="relative p-10 -mt-28 md:-mt-10">
        <Image
          image={DOTS}
          parentClassName="absolute inset-y-0 -right-1 top-42 lg:right-20 lg:-top-40"
          imageClassName="w-24 h-24 lg:h-fit"
        />
      </section>

      <section
        id="about-sanef-mobile"
        // className="relative mt-10 px-5 md:px-10 md:-mt-5 lg:px-40" // Old style
        className="relative mt-16 px-5 md:px-10 lg:px-40" // New style
      >
        <p className="text-lg text-center md:text-md md:-mt-10 lg:-mt-20">
          We collaborate with Ecosystem Stakeholders, Government/MDAs and
          Developmental Organizations in expanding the frontiers of Financial
          Inclusion and advancing Economic Empowerment.
        </p>
      </section>

      <section className="md:hidden container mx-auto">
        {/* BANKS LOGOS */}
        <PartnersAndName sectionName="Banks" logos={OUR_PARTNERS_LOGOS.Banks} />

        {/* SUPER AGENTS LOGOS */}
        <PartnersAndName
          sectionName="Super Agents"
          logos={OUR_PARTNERS_LOGOS["Super Agents"]}
        />

        {/* REGULATOR LOGOS */}
        <PartnersAndName
          sectionName="Regulators"
          logos={OUR_PARTNERS_LOGOS.Regulators}
        />

        {/* STRATEGIC PARTNERS */}
        <PartnersAndName
          sectionName="Strategic Partners"
          logos={OUR_PARTNERS_LOGOS["Strategic Partners"]}
        />

        {/* Government/MDA'S LOGOS */}
        <PartnersAndName
          sectionName=" Government/MDA'S"
          logos={OUR_PARTNERS_LOGOS["Government/MDA'S"]}
        />
      </section>

      <section>
        <PartnersTabs />
      </section>

      <section className="mt-16">
        <Footer />
      </section>
    </Fragment>
  );
};

export default OurPartners;
