import BrandStory from "@/components/BrandStory";
import FeaturedCategories from "@/components/FeaturedCategories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpecialOffers from "@/components/SpecialOffers";
import Trending from "@/components/Trending";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedCategories />
      <Trending />
      <SpecialOffers />
      <BrandStory />
    </div>
  );
};

export default page;
