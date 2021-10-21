import React from "react";
import { Layout, Hero, Work, About, Contact } from "../components";

function Home() {
  return (
    <Layout>
      <Hero/>
      <Work/>
      <About/>
      <Contact/>
    </Layout>
  );
}

export default Home;
