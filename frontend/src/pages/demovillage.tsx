import { Link } from "react-router-dom";
import { FeaturePageLayout } from "../components/layout/FeaturePageLayout";
import { usePageMetadata } from "../utils/usePageMetadata";

// ---------- Types ----------
interface FeatureCard {
  title: string;
  description: string;
}

interface LabZone {
  zoneLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

// ---------- Data ----------
const zoneAFeatures: FeatureCard[] = [
  {
    title: "Starlink Connectivity",
    description: "Satellite internet deployment for remote and disaster-affected areas.",
  },
  {
    title: "Emergency Comms",
    description: "Radio, mesh networks, and communication systems for crisis coordination.",
  },
  {
    title: "Portable Energy",
    description: "Solar-powered systems providing electricity in off-grid emergency settings.",
  },
  {
    title: "Disaster Response Ops",
    description: "Field command setup and operational coordination demonstrations.",
  },
];

const zoneBCategories: string[] = [
  "Search & Rescue",
  "Disaster Assessment",
  "Precision Agriculture",
  "Blood & Medicine Delivery",
];

const labZones: LabZone[] = [
  {
    zoneLabel: "ZONE C",
    title: "AI for Good Lab",
    description: "Hands-on demonstrations of AI tools built for development and humanitarian contexts.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    imageAlt: "AI analytics and data visualization",
    tags: ["AI Tools", "Humanitarian Analytics", "Live Demos"],
  },
  {
    zoneLabel: "ZONE D",
    title: "GIS & Mapping Lab",
    description: "Geospatial intelligence and community mapping workshops using OpenStreetMap.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    imageAlt: "Geospatial data mapping",
    tags: ["OpenStreetMap", "Crisis Mapping", "GIS"],
  },
];

export default function DemoVillagePage() {
  usePageMetadata("Demo Village — EA-HTS 2027", "Experience innovation in action at the Humanitarian Technology Demonstration Village.");

  return (
    <FeaturePageLayout>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Demo Village
          </div>
          <div className="eyebrow">Hands-On Experience</div>
          <h1>Experience innovation in action.</h1>
          <p>
            A live, immersive demonstration zone where humanitarian technologies are deployed in real time.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal visible">
              <div className="eyebrow">The Concept</div>
              <h2>Not just presentations. Live technology in the field.</h2>
              <p className="text-muted">
                The Demonstration Village transforms the Summit from a conference into a hands-on innovation experience.
              </p>
              <a href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Registration%20Updates" className="btn btn-primary mt-lg">
                Register to attend
              </a>
            </div>
            <div className="about-image reveal visible">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
                alt="Technology demonstration equipment"
                loading="lazy"
              />
              <div className="about-image-badge">4 Innovation Zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE A: IEEE MOVE */}
      <section className="section section-dark" id="zone-a">
        <div className="container">
          <div className="zone-grid">
            <div className="reveal visible">
              <div className="zone-badge zone-badge-gold">ZONE A</div>
              <h2 className="text-white mb-md">IEEE MOVE Demonstrations</h2>
              <div className="feature-grid">
                {zoneAFeatures.map((feature) => (
                  <div className="feature-card" key={feature.title}>
                    <h4 className="feature-card-title">{feature.title}</h4>
                    <p className="feature-card-desc">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal visible zone-image">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&q=80" alt="IEEE MOVE" />
            </div>
          </div>
        </div>
      </section>

      {/* ZONE B: DRONES */}
      <section className="section" id="zone-b">
        <div className="container">
          <div className="zone-grid">
            <div className="reveal visible zone-image" style={{ order: 1 }}>
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=700&q=80" alt="Drone" />
            </div>
            <div className="reveal visible" style={{ order: 2 }}>
              <div className="zone-badge zone-badge-primary">ZONE B</div>
              <h2 className="mb-md">Drone Innovation Zone</h2>
              <div className="category-list">
                {zoneBCategories.map((category) => (
                  <span className="category-pill" key={category}>{category}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE C & D */}
      <section className="section section-alt" id="zone-cd">
        <div className="container">
          <div className="cd-grid">
            {labZones.map((zone) => (
              <div className="reveal visible lab-card" key={zone.title}>
                <div className="lab-card-image">
                  <img src={zone.image} alt={zone.imageAlt} />
                </div>
                <div className="lab-card-body">
                  <div className="zone-badge zone-badge-primary zone-badge-sm">{zone.zoneLabel}</div>
                  <h3 className="mb-sm">{zone.title}</h3>
                  <p className="text-muted mb-md">{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FeaturePageLayout>
  );
}
