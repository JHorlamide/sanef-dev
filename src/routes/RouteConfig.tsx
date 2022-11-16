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
  BANKS,
  LOGIN,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  REGULATORS,
  SUPER_AGENT,
  GOVERNMENTS,
  AGENTS,
  STRATEGIC_PARTNERS,
  ADMIN_SETTINGS,
  ADD_BANK,
  EDIT_BANK,
  ADD_SUPER_AGENT
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
import Login from "website/Auth/Login";
import ForgotPassword from "website/Auth/ForgotPassword";
import ResetPassword from "website/Auth/ResetPassword";

// Dashboard
import Regulators from "app/pages/Regulators/index";
import Agents from "app/pages/Agents/index";
import StrategicPartners from "app/pages/StrategicPartners/index";
import Governments from "app/pages/Governments/index";
import AdminSettings from "app/pages/AdminSettings";

// BANKS
import Banks from "app/pages/Banks/index";
import CreateBank from "app/pages/Banks/components/AddBank";
import EditBank from "app/pages/Banks/components/EditBank";

// SUPER AGENTS
import SuperAgents from "app/pages/SuperAgents/index";
import AddSuperAgent from "app/pages/SuperAgents/components/AddSuperAgent";

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
      <Route path={LOGIN} element={<Login />} />
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />

      {/* Dashboard Links */}
      <Route path={BANKS} element={<Banks />} />
      <Route path={AGENTS} element={<Agents />} />
      <Route path={REGULATORS} element={<Regulators />} />
      <Route path={SUPER_AGENT} element={<SuperAgents />} />
      <Route path={GOVERNMENTS} element={<Governments />} />
      <Route path={STRATEGIC_PARTNERS} element={<StrategicPartners />} />
      <Route path={ADMIN_SETTINGS} element={<AdminSettings />} />

      {/* Banks */}
      <Route path={ADD_BANK} element={<CreateBank />} />
      <Route path={EDIT_BANK} element={<EditBank />} />

      {/* Super Agents */}
      <Route path={ADD_SUPER_AGENT} element={<AddSuperAgent />} />
    </Routes>
  );
};

export default RouteConfig;
