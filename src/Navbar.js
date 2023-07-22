import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksConRef = useRef(null);
  const linksRef = useRef(null);

  const setToggle = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    // const checkHeight = linksRef.current.getBoundingClientRect();
    // console.log(checkHeight);
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksConRef.current.style.height = `${linksHeight}px`;
    } else {
      linksConRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={setToggle}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksConRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} className="">
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
