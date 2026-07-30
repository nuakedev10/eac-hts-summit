import { useState } from 'react';
import { ArrowRight, Handshake, Mail, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturePageLayout } from '../components/layout/FeaturePageLayout';
import { partnerGroups, partnerMailto } from '../data/siteContent';
import { usePageMetadata } from '../utils/usePageMetadata';

const opportunities = [
  ['01', 'Programme contribution', 'Bring technical expertise and grounded perspectives into the summit programme.'],
  ['02', 'Technology demonstrations', 'Show practical tools and systems in a context centered on humanitarian outcomes.'],
  ['03', 'Startup support', 'Help promising regional ventures access mentorship, networks, and visibility.'],
  ['04', 'Research visibility', 'Strengthen the exchange between applied research and implementation communities.'],
  ['05', 'Capacity building', 'Contribute to learning and professional development across the regional ecosystem.'],
  ['06', 'Regional impact', 'Connect organizational priorities with locally led humanitarian technology efforts.'],
];

export function PartnersPage() {
  const [activeGroup, setActiveGroup] = useState(partnerGroups[0].id);
  usePageMetadata('Partnership Opportunities | EA-HTS 2027', 'Explore prospective partnership opportunities for the IEEE East African Humanitarian Technology Summit 2027.');
  const selectedGroup = partnerGroups.find((group) => group.id === activeGroup) ?? partnerGroups[0];
  const GroupIcon = selectedGroup.icon;

  return (
    <FeaturePageLayout>
      <section className="feature-hero feature-hero--partners">
        <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1800&q=85" alt="Technology professionals collaborating in East Africa" />
        <div className="feature-hero__veil" />
        <div className="feature-hero__content">
          <p className="feature-kicker"><Handshake aria-hidden="true" /> Partnership opportunities</p>
          <h1>Scale what works.<br />Build what is missing.</h1>
          <p>EA-HTS 2027 is creating a regional platform where technical capability, humanitarian priorities, and local leadership can meet.</p>
          <div className="feature-actions">
            <a className="feature-button feature-button--gold" href={partnerMailto}>Become a partner <Mail aria-hidden="true" /></a>
            <a className="feature-button feature-button--ghost" href="#partner-directory">View prospective partners <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="editorial-intro editorial-intro--partners">
        <div>
          <p className="feature-kicker feature-kicker--blue">A platform for practical alignment</p>
          <h2>Expertise is valuable.<br />Alignment makes it matter.</h2>
        </div>
        <p>Partnership can connect programme insight, technology, investment, research, and capacity building to the needs and leadership of East African communities.</p>
      </section>

      <section className="opportunity-section" aria-labelledby="opportunity-title">
        <div className="opportunity-section__heading">
          <span>Ways to contribute</span>
          <h2 id="opportunity-title">Six opportunity areas.<br />One regional platform.</h2>
        </div>
        <div className="opportunity-list">
          {opportunities.map(([number, title, description]) => (
            <article key={title}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-directory" id="partner-directory" aria-labelledby="partner-directory-title">
        <div className="partner-directory__header">
          <div>
            <p className="feature-kicker feature-kicker--blue">Organizations identified for engagement</p>
            <h2 id="partner-directory-title">A cross-sector ecosystem</h2>
          </div>
          <p className="partner-disclosure">Prospective partners identified for engagement; participation is not yet confirmed.</p>
        </div>

        <div className="partner-tabs" role="tablist" aria-label="Partner categories">
          {partnerGroups.map((group) => (
            <button
              key={group.id}
              id={`tab-${group.id}`}
              type="button"
              role="tab"
              aria-selected={activeGroup === group.id}
              aria-controls={`panel-${group.id}`}
              tabIndex={activeGroup === group.id ? 0 : -1}
              onClick={() => setActiveGroup(group.id)}
            >
              {group.shortTitle}<span>{String(group.partners.length).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        <div className="partner-panel" id={`panel-${selectedGroup.id}`} role="tabpanel" aria-labelledby={`tab-${selectedGroup.id}`}>
          <div className="partner-panel__intro"><GroupIcon aria-hidden="true" /><h3>{selectedGroup.title}</h3><p>{selectedGroup.description}</p></div>
          <ul className="partner-wordmarks">
            {selectedGroup.partners.map((partner) => (
              <li key={partner.name}>
                <span aria-hidden="true">{partner.name.split(' ').map((word) => word[0]).join('').slice(0, 3)}</span>
                <strong>{partner.name}</strong>
                {partner.detail && <small>{partner.detail}</small>}
              </li>
            ))}
          </ul>
          <p className="logo-note">Official marks will replace these accessible text treatments after brand asset approval.</p>
        </div>
      </section>

      <section className="feature-cta feature-cta--light">
        <p className="feature-kicker feature-kicker--blue">Start the conversation</p>
        <h2>Bring your organization into the room.</h2>
        <p>Tell the summit team where your capabilities and regional priorities align.</p>
        <a className="feature-button feature-button--blue" href={partnerMailto}>Become a partner <ArrowRight aria-hidden="true" /></a>
        <Link className="feature-text-link" to="/side-events">Explore all side events <MoveRight aria-hidden="true" /></Link>
      </section>
    </FeaturePageLayout>
  );
}