import React, { Component } from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize mt-3 p-2 bg-dark text-light">
        copyright CloudOdDuty &copy; {year}
      </footer>
    </>
  );
};

export default Footer;