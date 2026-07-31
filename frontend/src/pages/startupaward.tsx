import React from "react";
import { Link } from "react-router-dom";
import { FeaturePageLayout } from "../components/layout/FeaturePageLayout";
import { usePageMetadata } from "../utils/usePageMetadata";

const StartupAwards: React.FC = () => {
  usePageMetadata("Startup Challenge & Awards — EA-HTS 2027", "The EA Humanitarian Technology Innovation Challenge identifies and accelerates startups addressing regional challenges.");

  return (
    <FeaturePageLayout>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Startup Challenge &amp; Awards
          </div>
          <div className="eyebrow">Innovation &amp; Recognition</div>
          <h1>Pitch the solutions East Africa needs.</h1>
          <p>
            The EA Humanitarian Technology Innovation Challenge identifies and accelerates startups
            addressing the region's most pressing humanitarian and development challenges.
          </p>
        </div>
      </section>

      {/* STARTUP CHALLENGE */}
      <section className="section">
        <div className="container">
          <div className="startup-layout">
            <div className="reveal visible">
              <div className="eyebrow">The Challenge</div>
              <h2>EA Humanitarian Technology Innovation Challenge</h2>
              <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                We're looking for early-stage and growth-stage startups building technology solutions
                for humanitarian impact across East Africa. Selected teams pitch to a panel of
                investors, industry leaders, and humanitarian experts at the Summit.
              </p>

              <h4 style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>Challenge categories</h4>
              <div className="category-list">
                <span className="category-pill">AI for Good</span>
                <span className="category-pill">HealthTech</span>
                <span className="category-pill">ClimateTech</span>
                <span className="category-pill">AgriTech</span>
                <span className="category-pill">Digital Inclusion</span>
                <span className="category-pill">Disaster Resilience</span>
                <span className="category-pill">FinTech</span>
              </div>
            </div>

            <div className="reveal visible reveal-delay-1">
              <h4 style={{ marginBottom: "1rem" }}>What selected startups receive</h4>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-num">01</div>
                  <div>
                    <h4>Exhibition Space</h4>
                    <p>A dedicated booth in the Demo Village to showcase your solution to 350+ participants.</p>
                  </div>
                </div>
                <div className="benefit-card">
                  <div className="benefit-num">02</div>
                  <div>
                    <h4>Expert Mentorship</h4>
                    <p>One-on-one sessions with industry mentors and humanitarian technology experts.</p>
                  </div>
                </div>
              </div>

              <a
                href="mailto:ieeeahts27@gmail.com?subject=Startup%20Challenge%20Application"
                className="btn btn-primary"
                style={{ marginTop: "1.5rem" }}
              >
                Apply to the Challenge
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section section-alt" id="awards">
        <div className="container">
          <div className="section-header centered reveal visible">
            <div className="eyebrow">Recognition</div>
            <h2>Humanitarian Technology Awards</h2>
            <p>
              Nine award categories recognizing individuals, teams, projects, and organizations making
              outstanding contributions to humanitarian technology across the region.
            </p>
          </div>

          <div className="awards-grid">
            <div className="award-item reveal visible">
              <span>Humanitarian Technology Startup of the Year</span>
            </div>
            <div className="award-item reveal visible reveal-delay-1">
              <span>AI for Good Award</span>
            </div>
            <div className="award-item reveal visible reveal-delay-2">
              <span>Climate Innovation Award</span>
            </div>
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
};

export default StartupAwards;
