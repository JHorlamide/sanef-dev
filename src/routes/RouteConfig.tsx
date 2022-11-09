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
  MEDIA_EVENT_DETAILS,
  DASHBOARD,
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD
} from "./ROUTES_CONSTANTS";
import Home from "website/Home";
import About from "website/About";
import OurPartners from "website/OurPartners";
import ValueAddedServices from "website/ValueAddedServices";
import Media from "website/Media";
import ContactUs from "website/Contact";
import BecomeAnAgent from "website/BecomeAnAgent";
import NewsDetails from "website/Media/components/NewsDetails";
import EventDetails from "website/Media/components/EventDetails";
import Dashboard from "app/pages/Banks/index";
import Login from "website/Auth/Login";
import ForgotPassword from "website/Auth/ForgotPassword";
import ResetPassword from "website/Auth/ResetPassword";

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
      <Route path={DASHBOARD} element={<Dashboard />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
    </Routes>
  );
};

export default RouteConfig;
