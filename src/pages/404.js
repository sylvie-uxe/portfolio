import * as React from "react";
import { Link } from "gatsby";
import {handleClick} from "../utils/dom";
import { StaticImage }  from "gatsby-plugin-image";
import {Seo, Footer} from "../components";

const NotFoundPage = () => {
  return (
    <>
    <Seo />
    <header>
      <Link id="logo" to="/" onClick={handleClick} aria-label="Home">
        <StaticImage
          src="../../static/logo.png"
          alt="Logo"
          placeholder="blurred"
          width={60}
          aria-hidden="true"/>
      </Link>
    </header>
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry I couldn’t find what you were looking for.
        <br />
        <br />
        You can <Link to="/">go home</Link> and try again. Fingers crossed!
      </p>
      <div className="spacer large"></div>
    </main>
    <Footer />
    </>
  );
};

export default NotFoundPage;