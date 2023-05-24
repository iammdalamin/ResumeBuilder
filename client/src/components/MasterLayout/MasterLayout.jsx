import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
const MasterLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MasterLayout;
