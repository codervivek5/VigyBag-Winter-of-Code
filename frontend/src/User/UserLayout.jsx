import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../User/components/Home/Navbar";
import Footer from "../User/components/Home/Footer";

const UserLayout = () => {
//    const location = useLocation();

  // Determine which navbar to show based on the current route
//   const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}
      
      <ScrollProgressBar /> */}
      {/* <Navbar/> */}
      <Outlet />
       <Footer />
      {/*<GoToTop />
      {!isAdminRoute && <FeedbackButton />} */}
    </>
  );
};

export default UserLayout;