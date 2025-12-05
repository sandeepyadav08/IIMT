"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface MenuItem {
  id: number;
  order: number;
  parent: number;
  title: string;
  url: string;
  attr: string;
  target: string;
  classes: string;
  xfn: string;
  description: string;
  object_id: number;
  object: string;
  object_slug: string;
  type: string;
  type_label: string;
  children?: MenuItem[];
}

interface MenuData {
  ID: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  items: MenuItem[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<string | null>(
    null
  );
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Convert WordPress URL to Next.js internal link
  const convertToNextLink = (url: string, objectSlug: string): string => {
    // If it's a WordPress page URL, convert to /pages/[slug]
    if (url.includes('/wordpress/') || url.includes('192.168.29.241')) {
      return `/pages/${objectSlug}`;
    }
    // Return original URL for external links
    return url;
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "http://192.168.29.241/wordpress/wp-json/wp-api-menus/v2/menus/15"
        );
        const data: MenuData = await response.json();
        setMenuData(data.items || []);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setActiveSubmenu(null);
      setActiveNestedSubmenu(null);
    }, 700); // Match animation duration
  };

  const handleSubmenuHover = (menuName: string) => {
    // Only handle hover on desktop to prevent mobile touch interference
    if (window.innerWidth > 1024) {
      setActiveSubmenu(menuName);
    }
  };

  const handleSubmenuClick = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
    setActiveNestedSubmenu(null);
  };

  const handleNestedSubmenuHover = (submenuName: string | null) => {
    // Only handle hover on desktop to prevent mobile touch interference
    if (window.innerWidth > 1024) {
      setActiveNestedSubmenu(submenuName);
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="header-top">
        <div className="container-fluid">
          <div className="header-content">
            <div className="navbar-brand navbar-logo">
              <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <img
                  src="/iimt_logo_icon.png"
                  alt="IIM Trichy"
                  className="logo-img"
                />
                <div className="logo-text-wrapper">
                  <div className="logo-title">
                    भारतीय प्रबंधन संस्थान तिरुचिरापल्ली
                  </div>
                  <div className="logo-subtitle">
                    Indian Institute of Management Tiruchirapalli
                  </div>
                </div>
              </a>
            </div>

            {/* Hamburger Toggle Button */}
            <button
              className="hamburger-btn"
              type="button"
              onClick={toggleMenu}
              aria-controls="sideMenu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      {isOpen && (
        <>
          {/* Overlay Background */}
          <div
            className={`menu-overlay ${isClosing ? "closing" : ""}`}
            onClick={closeMenu}
          ></div>

          {/* Split Screen Menu Container */}
          <div className={`split-menu-container ${isClosing ? "closing" : ""}`}>
            {/* Left Half */}
            <div
              className={`menu-half menu-left ${isClosing ? "closing" : ""}`}
            >
              {/* Close Button */}
              <button
                className="close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>

              {/* Logo in Menu */}
              <div className="menu-logo">
                <a href="https://www.iimtrichy.ac.in/en" target="_self">
                  <img
                    src="/white-logo.png"
                    alt="IIM Trichy Logo"
                    className="img-responsive"
                  />
                </a>
              </div>

              {/* Menu Items */}
              <ul className="menu-list">
                {loading ? (
                  <li>Loading menu...</li>
                ) : (
                  menuData.map((item) => (
                    <li
                      key={item.id}
                      className={`has-submenu ${
                        activeSubmenu === item.object_slug ? "active" : ""
                      }`}
                      onMouseEnter={() => handleSubmenuHover(item.object_slug)}
                    >
                      {item.children && item.children.length > 0 ? (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmenuClick(item.object_slug);
                          }}
                        >
                          {item.title}
                          <span
                            className={`dropdown-arrow ${
                              activeSubmenu === item.object_slug ? "open" : ""
                            }`}
                          >
                            {isMobile ? (
                              activeSubmenu === item.object_slug ? (
                                <FaCaretUp />
                              ) : (
                                <FaCaretDown />
                              )
                            ) : (
                              activeSubmenu === item.object_slug ? (
                                <MdOutlineArrowLeft />
                              ) : (
                                <MdOutlineArrowRight />
                              )
                            )}
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={convertToNextLink(item.url, item.object_slug)}
                          onClick={closeMenu}
                        >
                          {item.title}
                        </Link>
                      )}
                      {activeSubmenu === item.object_slug &&
                        item.children &&
                        item.children.length > 0 && (
                          <div className="submenu-content mobile-submenu">
                            <ul className="submenu-list">
                              {item.children.map((child) => (
                                <li
                                  key={child.id}
                                  className={
                                    child.children && child.children.length > 0
                                      ? "has-nested-submenu"
                                      : ""
                                  }
                                >
                                  {child.children && child.children.length > 0 ? (
                                    <a
                                      href="#"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setActiveNestedSubmenu(
                                          activeNestedSubmenu ===
                                            child.object_slug
                                            ? null
                                            : child.object_slug
                                        );
                                      }}
                                      className="nested-toggle"
                                    >
                                      {child.title}
                                      {activeNestedSubmenu ===
                                      child.object_slug ? (
                                        <CiCircleMinus />
                                      ) : (
                                        <CiCirclePlus />
                                      )}
                                    </a>
                                  ) : (
                                    <Link
                                      href={convertToNextLink(child.url, child.object_slug)}
                                      onClick={closeMenu}
                                    >
                                      {child.title}
                                    </Link>
                                  )}
                                  {activeNestedSubmenu === child.object_slug &&
                                    child.children &&
                                    child.children.length > 0 && (
                                      <ul className="nested-submenu-list mobile-nested">
                                        {child.children.map((nestedChild) => (
                                          <li key={nestedChild.id}>
                                            <Link
                                              href={convertToNextLink(nestedChild.url, nestedChild.object_slug)}
                                              onClick={closeMenu}
                                            >
                                              {nestedChild.title}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </li>
                  ))
                )}
              </ul>

              {/* Menu Footer - Connect with us */}
              <div className="menu-footer">
                <div className="footer-content">
                  <div className="footer-social">
                    <a
                      href="https://www.facebook.com/IIMTiruchirappalli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="https://x.com/IIM_Trichy"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="https://www.instagram.com/iimtrichy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.linkedin.com/school/iimtrichy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCXMk9MRdGrNHIK6HN2JeLCQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="YouTube"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <Link href="/contact" onClick={closeMenu} className="connect-btn">
                    Connect with us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className={`menu-half menu-right ${isClosing ? "closing" : ""}`}
              onMouseLeave={() => {
                if (window.innerWidth > 1024) {
                  setActiveSubmenu(null);
                }
              }}
            >
              {activeSubmenu &&
                menuData
                  .filter((item) => item.object_slug === activeSubmenu)
                  .map((item) => (
                    <div key={item.id} className="submenu-content">
                      <ul className="submenu-list">
                        {item.children?.map((child) => (
                          <li
                            key={child.id}
                            className={
                              child.children && child.children.length > 0
                                ? "has-nested-submenu"
                                : ""
                            }
                            onMouseEnter={() =>
                              child.children && child.children.length > 0
                                ? handleNestedSubmenuHover(child.object_slug)
                                : handleNestedSubmenuHover(null)
                            }
                            onMouseLeave={() =>
                              child.children && child.children.length > 0
                                ? null
                                : handleNestedSubmenuHover(null)
                            }
                          >
                            {child.children && child.children.length > 0 ? (
                              <a
                                href="#"
                                className="nested-toggle"
                                onClick={(e) => e.preventDefault()}
                              >
                                {child.title}
                                {activeNestedSubmenu === child.object_slug ? (
                                  <MdOutlineArrowLeft />
                                ) : (
                                  <MdOutlineArrowRight />
                                )}
                              </a>
                            ) : (
                              <Link
                                href={convertToNextLink(child.url, child.object_slug)}
                                onClick={closeMenu}
                              >
                                {child.title}
                              </Link>
                            )}
                            {activeNestedSubmenu === child.object_slug &&
                              child.children &&
                              child.children.length > 0 && (
                                <div className="nested-submenu">
                                  <ul className="nested-submenu-list">
                                    {child.children.map((nestedChild) => (
                                      <li key={nestedChild.id}>
                                        <Link
                                          href={convertToNextLink(nestedChild.url, nestedChild.object_slug)}
                                          onClick={closeMenu}
                                        >
                                          {nestedChild.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
