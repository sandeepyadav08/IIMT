'use client';

import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<string | null>(null);

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
    setActiveSubmenu(menuName);
  };

  const handleSubmenuClick = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  return (
    <>
      {/* Top Header Bar */}
      <header className="header-top">
        <div className="container-fluid">
          <div className="header-content">
            <a className="navbar-brand navbar-logo" href="/">
              <img src="/iimt_logo_icon.png" alt="IIM Trichy" className="logo-img" />
              <div className="logo-text-wrapper">
                <div className="logo-title">भारतीय प्रबंधन संस्थान तिरुचिरापल्ली</div>
                <div className="logo-subtitle">Indian Institute of Management Tiruchirapalli</div>
              </div>
            </a>
            
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
          <div className={`menu-overlay ${isClosing ? 'closing' : ''}`} onClick={closeMenu}></div>
          
          {/* Split Screen Menu Container */}
          <div className={`split-menu-container ${isClosing ? 'closing' : ''}`}>
            {/* Left Half */}
            <div className={`menu-half menu-left ${isClosing ? 'closing' : ''}`}>
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
                <li 
                  className={`has-submenu ${activeSubmenu === 'about' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('about')}
                  id="about-menu-item"
                >
                  <a 
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('about');
                    }}
                  >
                    About
                    <span className={`dropdown-arrow ${activeSubmenu === 'about' ? 'open' : ''}`}>
                      {activeSubmenu === 'about' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'about' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li className="has-nested-submenu">
                          <a 
                            href="#genesis"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveNestedSubmenu(activeNestedSubmenu === 'genesis' ? null : 'genesis');
                            }}
                            className="nested-toggle"
                          >
                            Genesis
                            {activeNestedSubmenu === 'genesis' ? <CiCircleMinus /> : <CiCirclePlus />}
                          </a>
                          {activeNestedSubmenu === 'genesis' && (
                            <ul className="nested-submenu-list mobile-nested">
                              <li>
                                <a href="#vision-mission" onClick={closeMenu}>
                                  Vision & Mission
                                </a>
                              </li>
                              <li>
                                <a href="#founding" onClick={closeMenu}>
                                  Founding
                                </a>
                              </li>
                              <li>
                                <a href="#objectives" onClick={closeMenu}>
                                  Objectives
                                </a>
                              </li>
                              <li>
                                <a href="#message-from-leadership" onClick={closeMenu}>
                                  Message from Leadership
                                </a>
                              </li>
                              <li>
                                <a href="#milestones-achievements" onClick={closeMenu}>
                                  Milestones & Achievements
                                </a>
                              </li>
                            </ul>
                          )}
                        </li>
                        <li>
                          <a href="#mission-vision-objectives" onClick={closeMenu}>
                            Mission, Vision and Objectives
                          </a>
                        </li>
                        <li>
                          <a href="#board-of-governors" onClick={closeMenu}>
                            Board of Governors
                          </a>
                        </li>
                        <li>
                          <a href="#directors-message" onClick={closeMenu}>
                            Director's Message
                          </a>
                        </li>
                        <li>
                          <a href="#gallery" onClick={closeMenu}>
                            Gallery
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'programmes' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('programmes')}
                >
                  <a 
                    href="#programmes"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('programmes');
                    }}
                  >
                    Programmes
                    <span className={`dropdown-arrow ${activeSubmenu === 'programmes' ? 'open' : ''}`}>
                      {activeSubmenu === 'programmes' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'programmes' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#pgpm-mba" onClick={closeMenu}>
                            PGPM (MBA)
                          </a>
                        </li>
                        <li>
                          <a href="#pgpm-hr" onClick={closeMenu}>
                            PGPM-HR (MBA-HR)
                          </a>
                        </li>
                        <li>
                          <a href="#pgpbm" onClick={closeMenu}>
                            PGPBM (MBA for Working Executives)
                          </a>
                        </li>
                        <li>
                          <a href="#phd" onClick={closeMenu}>
                            Ph.D (Doctoral Programme)
                          </a>
                        </li>
                        <li>
                          <a href="#ephd" onClick={closeMenu}>
                            E. Ph.D (Executive Doctoral Programme)
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'people' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('people')}
                >
                  <a 
                    href="#people"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('people');
                    }}
                  >
                    People
                    <span className={`dropdown-arrow ${activeSubmenu === 'people' ? 'open' : ''}`}>
                      {activeSubmenu === 'people' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'people' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#director" onClick={closeMenu}>
                            Director
                          </a>
                        </li>
                        <li>
                          <a href="#faculty" onClick={closeMenu}>
                            Faculty
                          </a>
                        </li>
                        <li>
                          <a href="#students" onClick={closeMenu}>
                            Students
                          </a>
                        </li>
                        <li>
                          <a href="#administration" onClick={closeMenu}>
                            Administration
                          </a>
                        </li>
                        <li>
                          <a href="#alumni" onClick={closeMenu}>
                            Alumni
                          </a>
                        </li>
                        <li>
                          <a href="#cvo" onClick={closeMenu}>
                            CVO
                          </a>
                        </li>
                        <li>
                          <a href="#iem" onClick={closeMenu}>
                            IEM
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'journal' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('journal')}
                >
                  <a 
                    href="#journal"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('journal');
                    }}
                  >
                    Journal
                    <span className={`dropdown-arrow ${activeSubmenu === 'journal' ? 'open' : ''}`}>
                      {activeSubmenu === 'journal' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'journal' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#iimt-journal" onClick={closeMenu}>
                            IIMT Journal of Management
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'research' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('research')}
                >
                  <a 
                    href="#research"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('research');
                    }}
                  >
                    Research
                    <span className={`dropdown-arrow ${activeSubmenu === 'research' ? 'open' : ''}`}>
                      {activeSubmenu === 'research' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'research' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#publications" onClick={closeMenu}>
                            Publications
                          </a>
                        </li>
                        <li>
                          <a href="#centers" onClick={closeMenu}>
                            Centers
                          </a>
                        </li>
                        <li>
                          <a href="#conference-presentations" onClick={closeMenu}>
                            Conference Presentations
                          </a>
                        </li>
                        <li>
                          <a href="#working-papers" onClick={closeMenu}>
                            Working Papers
                          </a>
                        </li>
                        <li>
                          <a href="#conferences-at-iimt" onClick={closeMenu}>
                            Conferences at IIMT
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'placements' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('placements')}
                >
                  <a 
                    href="#placements"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('placements');
                    }}
                  >
                    Placements
                    <span className={`dropdown-arrow ${activeSubmenu === 'placements' ? 'open' : ''}`}>
                      {activeSubmenu === 'placements' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'placements' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#invites" onClick={closeMenu}>
                            Invites
                          </a>
                        </li>
                        <li>
                          <a href="#brochure" onClick={closeMenu}>
                            Brochure
                          </a>
                        </li>
                        <li>
                          <a href="#top-recruiters" onClick={closeMenu}>
                            Top Recruiters
                          </a>
                        </li>
                        <li>
                          <a href="#placement-reports" onClick={closeMenu}>
                            Placement Reports
                          </a>
                        </li>
                        <li>
                          <a href="#placement-contact" onClick={closeMenu}>
                            Contact Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'media-relations' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('media-relations')}
                >
                  <a 
                    href="#media-relations"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('media-relations');
                    }}
                  >
                    Media Relations
                    <span className={`dropdown-arrow ${activeSubmenu === 'media-relations' ? 'open' : ''}`}>
                      {activeSubmenu === 'media-relations' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'media-relations' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#press-releases" onClick={closeMenu}>
                            Press Releases
                          </a>
                        </li>
                        <li>
                          <a href="#iimt-in-news" onClick={closeMenu}>
                            IIM Tiruchirappalli in News
                          </a>
                        </li>
                        <li>
                          <a href="#nirf" onClick={closeMenu}>
                            NIRF
                          </a>
                        </li>
                        <li>
                          <a href="#snapshots" onClick={closeMenu}>
                            Snapshots
                          </a>
                        </li>
                        <li>
                          <a href="#media-contact" onClick={closeMenu}>
                            Contact Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'executive-education' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('executive-education')}
                >
                  <a 
                    href="#executive-education"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('executive-education');
                    }}
                  >
                    Executive Education & Consulting
                    <span className={`dropdown-arrow ${activeSubmenu === 'executive-education' ? 'open' : ''}`}>
                      {activeSubmenu === 'executive-education' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'executive-education' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#executive-education-programs" onClick={closeMenu}>
                            Executive Education
                          </a>
                        </li>
                        <li>
                          <a href="#consulting-activities" onClick={closeMenu}>
                            Consulting Activities
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'campus' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('campus')}
                >
                  <a 
                    href="#campus"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('campus');
                    }}
                  >
                    Campus
                    <span className={`dropdown-arrow ${activeSubmenu === 'campus' ? 'open' : ''}`}>
                      {activeSubmenu === 'campus' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'campus' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#learning-resource-centre" onClick={closeMenu}>
                            Learning Resource Centre
                          </a>
                        </li>
                        <li>
                          <a href="#computing-resources" onClick={closeMenu}>
                            Computing Resources
                          </a>
                        </li>
                        <li>
                          <a href="#hostels" onClick={closeMenu}>
                            Hostels
                          </a>
                        </li>
                        <li>
                          <a href="#finance-lab" onClick={closeMenu}>
                            Finance lab
                          </a>
                        </li>
                        <li>
                          <a href="#behavioural-lab" onClick={closeMenu}>
                            Behavioural lab
                          </a>
                        </li>
                        <li>
                          <a href="#sports-facility" onClick={closeMenu}>
                            Sports Facility
                          </a>
                        </li>
                        <li>
                          <a href="#virtual-tour" onClick={closeMenu}>
                            Virtual Tour
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li 
                  className={`has-submenu ${activeSubmenu === 'international-relations' ? 'active' : ''}`}
                  onMouseEnter={() => handleSubmenuHover('international-relations')}
                >
                  <a 
                    href="#international-relations"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick('international-relations');
                    }}
                  >
                    International Relations
                    <span className={`dropdown-arrow ${activeSubmenu === 'international-relations' ? 'open' : ''}`}>
                      {activeSubmenu === 'international-relations' ? <FaCaretDown /> : <FaCaretUp />}
                    </span>
                  </a>
                  {activeSubmenu === 'international-relations' && (
                    <div className="submenu-content mobile-submenu">
                      <ul className="submenu-list">
                        <li>
                          <a href="#international-relations-overview" onClick={closeMenu}>
                            International-Relations
                          </a>
                        </li>
                        <li>
                          <a href="#partner-networks" onClick={closeMenu}>
                            Partner Networks
                          </a>
                        </li>
                        <li>
                          <a href="#international-gallery" onClick={closeMenu}>
                            International Relations Gallery
                          </a>
                        </li>
                        <li>
                          <a href="#students-exchange" onClick={closeMenu}>
                            Students Exchange Programme
                          </a>
                        </li>
                        <li>
                          <a href="#faculty-exchange" onClick={closeMenu}>
                            Faculty Exchange Programme
                          </a>
                        </li>
                        <li>
                          <a href="#youth-delegation" onClick={closeMenu}>
                            Youth Delegation Program
                          </a>
                        </li>
                        <li>
                          <a href="#international-contact" onClick={closeMenu}>
                            Contact Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>

              {/* Menu Footer - Connect with us */}
              <div className="menu-footer">
                <div className="footer-content">
                  <div className="footer-social">
                    <a href="https://www.facebook.com/IIMTiruchirappalli/" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <FaFacebook />
                    </a>
                    <a href="https://x.com/IIM_Trichy" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/iimtrichy/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/school/iimtrichy/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://www.youtube.com/channel/UCXMk9MRdGrNHIK6HN2JeLCQ" target="_blank" rel="noopener noreferrer" title="YouTube">
                      <FaYoutube />
                    </a>
                  </div>
                  <a href="https://www.iimtrichy.ac.in/contact-us" className="connect-btn">
                    Connect with us
                  </a>
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div 
              className={`menu-half menu-right ${isClosing ? 'closing' : ''}`}
              onMouseLeave={() => {
                if (window.innerWidth > 1024) {
                  setActiveSubmenu(null);
                }
              }}
            >
              {activeSubmenu === 'about' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li 
                      className="has-nested-submenu"
                      onMouseEnter={() => setActiveNestedSubmenu('genesis')}
                      onMouseLeave={() => setActiveNestedSubmenu(null)}
                    >
                      <a href="#genesis" className="nested-toggle">
                        Genesis
                        {activeNestedSubmenu === 'genesis' ? <CiCircleMinus /> : <CiCirclePlus />}
                      </a>
                      {activeNestedSubmenu === 'genesis' && (
                        <div className="nested-submenu">
                          <ul className="nested-submenu-list">
                            <li><a href="#vision-mission" onClick={closeMenu}>Vision & Mission</a></li>
                            <li><a href="#founding" onClick={closeMenu}>Founding</a></li>
                            <li><a href="#objectives" onClick={closeMenu}>Objectives</a></li>
                            <li><a href="#message-from-leadership" onClick={closeMenu}>Message from Leadership</a></li>
                            <li><a href="#milestones-achievements" onClick={closeMenu}>Milestones & Achievements</a></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li onMouseEnter={() => setActiveNestedSubmenu(null)}>
                      <a href="#mission-vision-objectives" onClick={closeMenu}>Mission, Vision and Objectives</a>
                    </li>
                    <li onMouseEnter={() => setActiveNestedSubmenu(null)}>
                      <a href="#board-of-governors" onClick={closeMenu}>Board of Governors</a>
                    </li>
                    <li onMouseEnter={() => setActiveNestedSubmenu(null)}>
                      <a href="#directors-message" onClick={closeMenu}>Director's Message</a>
                    </li>
                    <li onMouseEnter={() => setActiveNestedSubmenu(null)}>
                      <a href="#gallery" onClick={closeMenu}>Gallery</a>
                    </li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'programmes' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#pgpm-mba" onClick={closeMenu}>PGPM (MBA)</a></li>
                    <li><a href="#pgpm-hr" onClick={closeMenu}>PGPM-HR (MBA-HR)</a></li>
                    <li><a href="#pgpbm" onClick={closeMenu}>PGPBM (MBA for Working Executives)</a></li>
                    <li><a href="#phd" onClick={closeMenu}>Ph.D (Doctoral Programme)</a></li>
                    <li><a href="#ephd" onClick={closeMenu}>E. Ph.D (Executive Doctoral Programme)</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'people' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#director" onClick={closeMenu}>Director</a></li>
                    <li><a href="#faculty" onClick={closeMenu}>Faculty</a></li>
                    <li><a href="#students" onClick={closeMenu}>Students</a></li>
                    <li><a href="#administration" onClick={closeMenu}>Administration</a></li>
                    <li><a href="#alumni" onClick={closeMenu}>Alumni</a></li>
                    <li><a href="#cvo" onClick={closeMenu}>CVO</a></li>
                    <li><a href="#iem" onClick={closeMenu}>IEM</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'journal' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#iimt-journal" onClick={closeMenu}>IIMT Journal of Management</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'research' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#publications" onClick={closeMenu}>Publications</a></li>
                    <li><a href="#centers" onClick={closeMenu}>Centers</a></li>
                    <li><a href="#conference-presentations" onClick={closeMenu}>Conference Presentations</a></li>
                    <li><a href="#working-papers" onClick={closeMenu}>Working Papers</a></li>
                    <li><a href="#conferences-at-iimt" onClick={closeMenu}>Conferences at IIMT</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'placements' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#invites" onClick={closeMenu}>Invites</a></li>
                    <li><a href="#brochure" onClick={closeMenu}>Brochure</a></li>
                    <li><a href="#top-recruiters" onClick={closeMenu}>Top Recruiters</a></li>
                    <li><a href="#placement-reports" onClick={closeMenu}>Placement Reports</a></li>
                    <li><a href="#placement-contact" onClick={closeMenu}>Contact Details</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'media-relations' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#press-releases" onClick={closeMenu}>Press Releases</a></li>
                    <li><a href="#iimt-in-news" onClick={closeMenu}>IIM Tiruchirappalli in News</a></li>
                    <li><a href="#nirf" onClick={closeMenu}>NIRF</a></li>
                    <li><a href="#snapshots" onClick={closeMenu}>Snapshots</a></li>
                    <li><a href="#media-contact" onClick={closeMenu}>Contact Details</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'executive-education' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#executive-education-programs" onClick={closeMenu}>Executive Education</a></li>
                    <li><a href="#consulting-activities" onClick={closeMenu}>Consulting Activities</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'campus' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#learning-resource-centre" onClick={closeMenu}>Learning Resource Centre</a></li>
                    <li><a href="#computing-resources" onClick={closeMenu}>Computing Resources</a></li>
                    <li><a href="#hostels" onClick={closeMenu}>Hostels</a></li>
                    <li><a href="#finance-lab" onClick={closeMenu}>Finance lab</a></li>
                    <li><a href="#behavioural-lab" onClick={closeMenu}>Behavioural lab</a></li>
                    <li><a href="#sports-facility" onClick={closeMenu}>Sports Facility</a></li>
                    <li><a href="#virtual-tour" onClick={closeMenu}>Virtual Tour</a></li>
                  </ul>
                </div>
              )}
              
              {activeSubmenu === 'international-relations' && (
                <div className="submenu-content">
                  <ul className="submenu-list">
                    <li><a href="#international-relations-overview" onClick={closeMenu}>International-Relations</a></li>
                    <li><a href="#partner-networks" onClick={closeMenu}>Partner Networks</a></li>
                    <li><a href="#international-gallery" onClick={closeMenu}>International Relations Gallery</a></li>
                    <li><a href="#students-exchange" onClick={closeMenu}>Students Exchange Programme</a></li>
                    <li><a href="#faculty-exchange" onClick={closeMenu}>Faculty Exchange Programme</a></li>
                    <li><a href="#youth-delegation" onClick={closeMenu}>Youth Delegation Program</a></li>
                    <li><a href="#international-contact" onClick={closeMenu}>Contact Details</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
