/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useState, useEffect } from "react";
import Card from "./card";

const Home = ({products}) => {
 
  return (
    <section id="home">
      <Card products={products} />
    </section>
  );
};

// Export out the React Component
export default Home;
