import React from "react";

function Footer({ siteTitle }) {
    return(
    <footer>
        © {new Date().getFullYear()} {siteTitle}
    </footer>
    );
}

export default Footer;
