import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { useState, useRef } from "react";

const NavBar = () => {
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const inlineStyle = {
    height: showLink
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-btn" onClick={() => setShowLink(!showLink)}>
            <FaBars />
          </button>
        </div>
        {/* show the link when show link is true */}

        <div
          className="links-container"
          ref={linksContainerRef}
          style={inlineStyle}
        >
          <ul className="nav-links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="nav-link" key={id}>
                  <a href={url} className="nav-text">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-links">
          {social.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li className="social-link" key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
