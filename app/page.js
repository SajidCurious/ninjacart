import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import FooterBanner from "@/components/FooterBanner";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";

const page = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <div>Home page</div>
      </div>
    </>
  );
};

export default page;
