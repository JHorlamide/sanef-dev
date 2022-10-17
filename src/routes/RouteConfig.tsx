import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HOME,
  MEDIA,
  ABOUT_US,
  CONTACT_US,
  OUR_PARTNERS,
  VALUE_ADDED_SERVICES
} from "./ROUTES_CONSTANTS";
import Home from "pages/Home";
import About from "pages/About";
import OurPartners from "pages/OurPartners";
import ValueAddedServices from "pages/ValueAddedServices";
import Media from "pages/Media";
import ContactUs from "pages/Contact";

const RouteConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={MEDIA} element={<Media />} />
        <Route path={CONTACT_US} element={<ContactUs />} />
        <Route path={ABOUT_US} element={<About />} />
        <Route path={OUR_PARTNERS} element={<OurPartners />} />
        <Route path={VALUE_ADDED_SERVICES} element={<ValueAddedServices />} />
      </Routes>
    </div>
  );
};

export default RouteConfig;
