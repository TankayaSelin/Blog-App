import React, { useState, useEffect } from "react";
import SearchBlog from "../SearchBlog";
import "./navbar.css";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <div className="navbar-border">
        <div className="container">
          <div className="row w-100m-0">
            <div className="col-10">
              {width > 576 && <NavbarDesktop />}
              {width <= 576 && <NavbarMobile />}
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
              <div className="search-box">
                <form id="searchForm" action="">
                  <SearchBlog />
                  <i class="bi bi-search"></i>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
