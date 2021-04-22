import React from 'react';
import { Link } from 'gatsby';
import '@fontsource/open-sans'; // Defaults to weight 400 with all styles included.
import ColorMode from './color-mode';

const ListLink = (props) => {
  if (props.withActiveClassName) {
    return (
      <li>
          <Link activeClassName='activeLink' to={props.to}>{props.children}</Link>
      </li>
    );
  }
  return (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Link to='/'>My Logo</Link>
        <ul>
          <ListLink withActiveClassName='true' to='/'>About</ListLink>
          <ListLink withActiveClassName='true' to='/work'>Work</ListLink>
          <ListLink withActiveClassName='true' to='/resume'>Resume</ListLink>
          <ListLink withActiveClassName='true' to='/contact'>Contact</ListLink>
          <li><ColorMode/></li>
        </ul>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}