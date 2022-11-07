import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HOME,
  MEDIA,
  ABOUT_US,
  CONTACT_US,
  OUR_PARTNERS,
  VALUE_ADDED_SERVICES,
  BECOME_AGENT,
  MEDIA_NEWS_DETAILS,
  MEDIA_EVENT_DETAILS
} from "./ROUTES_CONSTANTS";
import Home from "pages/Home";
import About from "pages/About";
import OurPartners from "pages/OurPartners";
import ValueAddedServices from "pages/ValueAddedServices";
import Media from "pages/Media";
import ContactUs from "pages/Contact";
import BecomeAnAgent from "pages/BecomeAnAgent";
import NewsDetails from "pages/Media/components/NewsDetails";
import EventDetails from "pages/Media/components/EventDetails";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={MEDIA} element={<Media />} />
      <Route path={CONTACT_US} element={<ContactUs />} />
      <Route path={ABOUT_US} element={<About />} />
      <Route path={OUR_PARTNERS} element={<OurPartners />} />
      <Route path={VALUE_ADDED_SERVICES} element={<ValueAddedServices />} />
      <Route path={BECOME_AGENT} element={<BecomeAnAgent />} />
      <Route path={MEDIA_NEWS_DETAILS} element={<NewsDetails />} />
      <Route path={MEDIA_EVENT_DETAILS} element={<EventDetails />} />
    </Routes>
  );
};

export default RouteConfig;
