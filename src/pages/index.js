import React from "react";

import { Layout, Hero, About, Work, Resume, Contact } from "../components";

function Home() {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Work/>
      <Resume/>
      <Contact/>
    </Layout>
  );
}

export default Home;
