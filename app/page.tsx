import { getPageBySlug } from "@/lib/wordpress";
import WordPressContent from "@/components/WordPressContent";

export default async function Home() {
  // Fetch home page content from WordPress
  const homePage = await getPageBySlug("home");

  // If home page exists in WordPress, render it
  if (homePage) {
    return (
      <div className="wordpress-page-wrapper">
        <div className="container">
          <div className="wordpress-page-content">
            <WordPressContent content={homePage.content.rendered} />
          </div>
        </div>
      </div>
    );
  }

  // Fallback content if WordPress home page doesn't exist
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to IIM Trichy</h1>
          <p>Indian Institute of Management Tiruchirappalli</p>
          <button className="btn-primary-custom">Explore Programs</button>
        </div>
      </section>

      {/* Content Section */}
      <div className="content">
        <div className="container">
          <div className="section">
            <h2>About Us</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card-custom">
                  <div className="card-body">
                    <h5>Excellence in Education</h5>
                    <p>
                      IIM Trichy is committed to providing world-class
                      management education and fostering leadership excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-custom">
                  <div className="card-body">
                    <h5>Research & Innovation</h5>
                    <p>
                      Our faculty and students engage in cutting-edge research
                      that drives business innovation and social impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-custom">
                  <div className="card-body">
                    <h5>Global Network</h5>
                    <p>
                      Connect with a diverse community of alumni, industry
                      leaders, and academic partners worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
