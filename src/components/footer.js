import React from "react";

function Footer({ siteTitle }) {
    return(
    <footer>
        © {new Date().getFullYear()} Designed and built by {siteTitle} with Gatsby
    </footer>
    );
}

export default Footer;
