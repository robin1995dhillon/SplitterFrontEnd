import React, { Component } from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize mt-3 p-2 bg-dark text-light">
        Thank you for visiting :)
      </footer>
    </>
  );
};

export default Footer;
