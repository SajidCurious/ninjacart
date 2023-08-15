import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import FooterBanner from "@/components/FooterBanner";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import client from "@/lib/client";

const page = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <div>Home page</div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default page;
