import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const UserLayout = () => {
//    const location = useLocation();

  // Determine which navbar to show based on the current route
//   const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}
      
      <ScrollProgressBar /> */}
      <Outlet />
      {/* <Footer />
      <GoToTop />
      {!isAdminRoute && <FeedbackButton />} */}
    </>
  );
};

export default UserLayout;