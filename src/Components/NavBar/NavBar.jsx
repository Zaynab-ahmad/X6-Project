import { useEffect, useState } from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import ring from "../../assets/Icons/Ring.svg";
import search from "../../assets/Icons/search.svg";
import logo from "../../assets/Imgs/Logo.png";
import { Link, useLocation } from "react-router-dom";
import bars from "../../assets/Icons/bars.svg";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "Home"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation(); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(".barsBtn")) {
      setIsDropdownOpen(false);
    }
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };


  useEffect(() => {
    const pathToActiveLinkMap = {
      "/": "Home",
      "/movies-and-shows": "link-1",
      "/support": "link-2",
      "/subscription": "link-3",
    };
    const newActiveLink = pathToActiveLinkMap[location.pathname] || "Home";
    setActiveLink(newActiveLink);
    localStorage.setItem("activeLink", newActiveLink);
  }, [location.pathname]);

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", closeDropdown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`kr-navbar xContainer ${scrolled ? "scrolled" : ""}`}>
      <Link
        className="logoContainer"
        to={"/"}
        onClick={() => setActiveLink("Home")}
      >
        <img className="kr-logo" src={logo} alt="logo" />
      </Link>
      <Nav className="kr-navigation-container" variant="pills">
        <Nav.Item className="kr-navitem">
          <Nav.Link
            as={Link}
            to={"/"}
            className={activeLink === "Home" ? "active-link" : "notactive-link"}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="kr-navitem">
          <Nav.Link
            as={Link}
            to={"/movies-and-shows"}
            className={
              activeLink === "link-1" ? "active-link" : "notactive-link"
            }
          >
            Movies & Shows
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="kr-navitem">
          <Nav.Link
            as={Link}
            to={"/support"}
            className={
              activeLink === "link-2" ? "active-link" : "notactive-link"
            }
          >
            Support
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="kr-navitem">
          <Nav.Link
            as={Link}
            to={"/subscription"}
            className={
              activeLink === "link-3" ? "active-link" : "notactive-link"
            }
          >
            Subscriptions
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="kr-icons-container">
        <img src={search} alt="search" />
        <img src={ring} alt="ring" />
      </div>
      <button
        className={isDropdownOpen ? "barsBtn open" : "barsBtn"}
        onClick={toggleDropdown}
      >
        <img src={bars} alt="bars" />
      </button>
      {isDropdownOpen && (
        <div className="dropdownmenu">
          <Link
            className="dropdownitem"
            to={"/"}
            onClick={() => setActiveLink("Home")}
          >
            Home
          </Link>
          <Link
            className="dropdownitem"
            to={"/movies-and-shows"}
            onClick={() => setActiveLink("link-1")}
          >
            Movies & Shows
          </Link>
          <Link
            className="dropdownitem"
            to={"/support"}
            onClick={() => setActiveLink("link-2")}
          >
            Support
          </Link>
          <Link
            className="dropdownitem"
            to={"/subscription"}
            onClick={() => setActiveLink("link-3")}
          >
            Subscriptions
          </Link>
        </div>
      )}
    </div>
  );
}
