"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaPlus, FaMinus } from "react-icons/fa";

interface ContactInfo {
  title: string;
  email: string;
  phone: string;
}

interface AccordionSection {
  title: string;
  contacts: ContactInfo[];
}

const accordionData: AccordionSection[] = [
  {
    title: "DEAN",
    contacts: [
      { title: "Dean - Academics", email: "deanacademics@iimtrichy.ac.in", phone: "+91-431-2505058" },
      { title: "Dean - Administration", email: "dean-admin@iimtrichy.ac.in", phone: "+91-431-2505056" },
      { title: "Dean - Corporate Relations & Faculty Affairs", email: "deancrfa@iimtrichy.ac.in", phone: "+91-431-2505063" },
    ],
  },
  {
    title: "ADMISSIONS",
    contacts: [
      { title: "Admissions Office (PGPM & PGPM HR)", email: "admissions@iimtrichy.ac.in", phone: "+91-431-2505026" },
      { title: "Admissions Support", email: "admissionssupport@iimtrichy.ac.in", phone: "+91-431-2505029" },
      { title: "Chair, Admissions (PGPM & PGPM HR)", email: "chairadmissions@iimtrichy.ac.in", phone: "+91-431-2505176" },
      { title: "PGPBM Admissions", email: "admissions_pgpbm@iimtrichy.ac.in", phone: "+91-431-2505026" },
    ],
  },
  {
    title: "POST-GRADUATE PROGRAMME IN MANAGEMENT (PGPM)",
    contacts: [
      { title: "Chair, PGPM", email: "pgpchair@iimtrichy.ac.in", phone: "+91-431-2505031" },
      { title: "PGPM Office", email: "pgpoffice@iimtrichy.ac.in", phone: "+91-431-2505030" },
    ],
  },
  {
    title: "POST-GRADUATE PROGRAMME IN MANAGEMENT - HR (PGPM-HR)",
    contacts: [
      { title: "Chair, PGPM-HR", email: "chairpgpm-hr@iimtrichy.ac.in", phone: "+91-431-2505071" },
      { title: "PGPM-HR Office", email: "pgpmhroffice@iimtrichy.ac.in", phone: "+91-431-2505070" },
    ],
  },
  {
    title: "POST GRADUATE PROGRAMME IN BUSINESS MANAGEMENT (PGPBM)",
    contacts: [
      { title: "Chair, PGPBM", email: "pgpbmchair@iimtrichy.ac.in", phone: "+91-431-2505110" },
      { title: "PGPBM Office (Chennai centre)", email: "pgpbmoffice@iimtrichy.ac.in", phone: "+91-44-22255565/66" },
    ],
  },
  {
    title: "DOCTORAL PROGRAMME & RESEARCH (DPR)",
    contacts: [
      { title: "Chair, DPR", email: "dprchair@iimtrichy.ac.in", phone: "+91-431-2505014" },
      { title: "DPM Admissions", email: "phdadmissions@iimtrichy.ac.in", phone: "+91-431-2505039" },
      { title: "DPR Office", email: "dproffice@iimtrichy.ac.in", phone: "+91-431-2505039" },
    ],
  },
  {
    title: "EXECUTIVE EDUCATION & CONSULTING (EEC)",
    contacts: [
      { title: "Dean - Corporate Relations & Faculty Affairs", email: "deancrfa@iimtrichy.ac.in", phone: "+91-431-2505063" },
      { title: "EEC Manager", email: "eecmanager@iimtrichy.ac.in", phone: "+91-431-2505125" },
      { title: "EEC Office", email: "eec@iimtrichy.ac.in", phone: "+91-431-2505025" },
    ],
  },
  {
    title: "PLACEMENTS",
    contacts: [
      { title: "Chair-Placement", email: "placement@iimtrichy.ac.in", phone: "+91-431-2505035" },
      { title: "Placement Office", email: "placement-office@iimtrichy.ac.in", phone: "+91-431-2505036" },
    ],
  },
  {
    title: "ALUMNI RELATIONS",
    contacts: [
      { title: "Chair-Alumni Relations", email: "chairalumni@iimtrichy.ac.in", phone: "+91-431-2505002" },
      { title: "Office-Alumni Relations", email: "alumni@iimtrichy.ac.in", phone: "+91-431-2505036" },
    ],
  },
  {
    title: "CHAIR - ACADEMIC AREA",
    contacts: [
      { title: "Chair, Economics & Public Policy", email: "chairepp@iimtrichy.ac.in", phone: "+91-431-2505096" },
      { title: "Chair, Finance & Accounting", email: "finchair@iimtrichy.ac.in", phone: "+91-431-2505023" },
      { title: "Chair, General Management", email: "chairgm@iimtrichy.ac.in", phone: "+91-431-2505018" },
      { title: "Chair, Information Systems & Analytics", email: "chairmis@iimtrichy.ac.in", phone: "+91-431-2505079" },
      { title: "Chair, Marketing Management", email: "chairmarketing@iimtrichy.ac.in", phone: "+91-431-2505004" },
      { title: "Chair, OB & HR", email: "chairobhr@iimtrichy.ac.in", phone: "+91-431-2505051" },
      { title: "Chair, Operations Management & Decision Sciences", email: "chairomqt@iimtrichy.ac.in", phone: "+91-431-2505083" },
      { title: "Chair, Strategy and Entrepreneurship", email: "strategychair@iimtrichy.ac.in", phone: "+91-431-2505082" },
    ],
  },
  {
    title: "CHAIR - OTHER ACTIVITIES",
    contacts: [
      { title: "Chair, Equal Opportunities Cell", email: "Chairequalopportunities@iimtrichy.ac.in", phone: "+91-431-2505015" },
      { title: "Chair, Internal Quality Assurance & Innovation", email: "ChairIQIC@iimtrichy.ac.in", phone: "+91-431-2505085" },
      { title: "Chair, International Relations", email: "ir@iimtrichy.ac.in", phone: "+91-431-2505032" },
      { title: "Chair, IT Infrastructure & Website", email: "itchair@iimtrichy.ac.in", phone: "+91-431-2505079" },
      { title: "Chair, Journal", email: "iimtjournalchair@iimtrichy.ac.in", phone: "+91-431-2505055" },
      { title: "Chair, Library", email: "librarychair@iimtrichy.ac.in", phone: "+91-431-2505004" },
      { title: "Chair, Media Relations", email: "external-relations@iimtrichy.ac.in", phone: "+91-431-2505019" },
      { title: "Chair, Ranking", email: "rankingchair@iimtrichy.ac.in", phone: "+91-431-2505023" },
      { title: "Chair, Student Affairs", email: "sa@iimtrichy.ac.in", phone: "+91-431-2505012" },
      { title: "Coordinator, International Accreditation", email: "accreditation@iimtrichy.ac.in", phone: "+91-431-2505077/5002" },
    ],
  },
  {
    title: "OFFICERS - ADMINISTRATION",
    contacts: [
      { title: "Administrative Officer (Finance and Accounting)", email: "aofa@iimtrichy.ac.in", phone: "+91-431-2505124" },
      { title: "Administrative Officer (General Administration, HR, Campus Safety & Upkeeping and Estate Maintenance)", email: "aoadmin@iimtrichy.ac.in", phone: "+91-431-2505053" },
      { title: "Administrative Officer (Stores & Purchase)", email: "aopurchase@iimtrichy.ac.in", phone: "+91-431-2505068" },
      { title: "Chief Administrative Officer (I/C)", email: "cao@iimtrichy.ac.in", phone: "+91-431-2505040" },
      { title: "Corporate Relations Officer", email: "cro@iimtrichy.ac.in", phone: "+91-431-2505125" },
      { title: "Estate Manager", email: "estatemanager@iimtrichy.ac.in", phone: "+91-431-2505166" },
      { title: "Financial Advisor & Chief Accounts Officer (I/C)", email: "facao@iimtrichy.ac.in", phone: "+91-431-2505041" },
      { title: "Librarian & Chief Knowledge Officer", email: "librarian@iimtrichy.ac.in", phone: "+91-431-2505045" },
      { title: "Systems Administrator", email: "saict@iimtrichy.ac.in", phone: "+91-431-2505047" },
    ],
  },
  {
    title: "SUPPORT ACTIVITIES",
    contacts: [
      { title: "Accounts Department", email: "", phone: "+91-431-2505042" },
      { title: "Dispatch Section", email: "", phone: "+91-431-2505147/2053" },
      { title: "General Enquiry", email: "", phone: "+91-431-2505000" },
      { title: "Guest House", email: "", phone: "+91-431-2505201" },
      { title: "HR Department", email: "", phone: "+91-431-2505020" },
      { title: "IT Helpdesk", email: "", phone: "+91-431-2505073" },
      { title: "Library Helpdesk", email: "", phone: "+91-431-2505180" },
      { title: "Maintenance - Civil", email: "", phone: "+91-431-2505157" },
      { title: "Maintenance - Electricals", email: "", phone: "+91-431-2505156" },
      { title: "Security Office (24 * 7)", email: "", phone: "+91-431-2505043" },
      { title: "Stores & Purchase", email: "", phone: "+91-431-2505122" },
      { title: "Travel Desk", email: "", phone: "+91-431-2505022" },
    ],
  },
];

export default function ContactPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("DEAN");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const payload = new FormData();
    payload.append("_wpcf7", "100");
    payload.append("_wpcf7_version", "5.9");
    payload.append("_wpcf7_locale", "en_US");
    payload.append("_wpcf7_unit_tag", "wpcf7-f100-o1");
    payload.append("_wpcf7_container_post", "0");

    payload.append("your-name", formData.name);
    payload.append("your-email", formData.email);
    payload.append("your-subject", formData.subject);
    payload.append("your-message", formData.message);

    const response = await fetch(
      "http://192.168.29.241/wordpress/wp-json/contact-form-7/v1/contact-forms/100/feedback",
      {
        method: "POST",
        body: payload, // ⭐ NO headers → CF7 accepts multipart when no manual headers
      }
    );

    const result = await response.json();
    console.log("CF7 Response:", result);

    if (result.status === "mail_sent") {
      alert("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert(result.message || "Failed to send message.");
    }
  } catch (err) {
    console.error("Submit Error:", err);
    alert("Error sending message. Try again.");
  }

  setIsSubmitting(false);
};


  return (
    <div className="contact-page">
      {/* Campus Addresses Section */}
      <section className="campus-section">
        {/* Trichy Campus */}
        <div className="campus-card trichy-style">
          <div className="campus-content-new">
            <div className="campus-left">
              <h3 className="campus-title-orange">MAILING ADDRESS - TRICHY CAMPUS</h3>
              <p className="campus-address">
                Indian Institute of Management Tiruchirappalli<br />
                Pudukkottai Main Road, Chinna Sooriyur Village,<br />
                Tiruchirappalli - 620 024, Tamil Nadu.
              </p>
              <div className="campus-enquiry">
                <h4 className="enquiry-title-orange">ENQUIRY</h4>
                <p>
                  <FaEnvelope className="icon-blue" />
                  <a href="mailto:iimt@iimtrichy.ac.in" className="email-link-blue">iimt@iimtrichy.ac.in</a>
                </p>
                <p>
                  <FaPhone className="icon-green" />
                  <span>+91-431-2505000</span>
                </p>
                <p>
                  <FaPhone className="icon-green" />
                  <span>+91-431-2501124</span>
                </p>
              </div>
            </div>
            <div className="qr-code-section">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://maps.google.com/?q=IIM+Tiruchirappalli" alt="QR Code Trichy Campus" />
            </div>
            <div className="campus-map-new">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8917245844846!2d78.74323301479981!3d10.665511792396826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa894b01fd2caf%3A0x7b3871fb781f6d93!2sIndian+Institute+of+Management+Tiruchirappalli!5e0!3m2!1sen!2sin!4v1525412053822"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Chennai Campus */}
        <div className="campus-card trichy-style">
          <div className="campus-content-new">
            <div className="campus-left">
              <h3 className="campus-title-orange">MAILING ADDRESS - CHENNAI CAMPUS</h3>
              <p className="campus-name-bold">IIM Tiruchirappalli - Chennai Campus</p>
              <p className="campus-address">
                BSNL Telephone Exchange Building (5th & 6th Floor),<br />
                96, Jawaharlal Nehru Road,<br />
                K. K. Nagar,<br />
                Chennai - 600 078.
              </p>
              <div className="campus-enquiry">
                <h4 className="enquiry-title-orange">ENQUIRY</h4>
                <p>
                  <FaEnvelope className="icon-blue" />
                  <a href="mailto:pgpbmoffice@iimtrichy.ac.in" className="email-link-blue">pgpbmoffice@iimtrichy.ac.in</a>
                </p>
                <p>
                  <FaPhone className="icon-green" />
                  <span>+91-44-22255565</span>
                </p>
                <p>
                  <FaPhone className="icon-green" />
                  <span>+91-44-22255566</span>
                </p>
              </div>
            </div>
            <div className="qr-code-section">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://maps.google.com/?q=IIM+Tiruchirappalli+Chennai+Campus" alt="QR Code Chennai Campus" />
            </div>
            <div className="campus-map-new">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.6273707249!2d80.209134!3d13.031775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526723babda6c9%3A0x46d9af5e0c89fda4!2sIIM+Tiruchirappalli+Chennai+Campus!5e0!3m2!1sen!2sin!4v1701782400000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Department Accordions Section */}
      <section className="accordion-section">
        {accordionData.map((section) => (
          <div key={section.title} className="accordion-item">
            <button
              className={`accordion-header ${openAccordion === section.title ? "active" : ""}`}
              onClick={() => toggleAccordion(section.title)}
            >
              <span>{section.title}</span>
              {openAccordion === section.title ? <FaMinus /> : <FaPlus />}
            </button>
            {openAccordion === section.title && (
              <div className="accordion-content">
                <div className="contacts-grid">
                  {section.contacts.map((contact, index) => (
                    <div key={index} className="contact-card">
                      <h4 className="contact-title">{contact.title}</h4>
                      {contact.email && (
                        <p className="contact-email">
                          <FaEnvelope className="icon-blue" />
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </p>
                      )}
                      <p className="contact-phone">
                        <FaPhone className="icon-gray" />
                        {contact.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <p className="form-subtitle">Have questions? We'd love to hear from you.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              placeholder="Brief description of your issue"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Describe the issue you're facing. Don't share any sensitive information, such as credentials and credit card numbers"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
}
