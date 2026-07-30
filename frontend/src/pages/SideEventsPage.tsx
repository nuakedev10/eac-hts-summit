import { ArrowRight, CalendarDays, Mail, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturePageLayout } from '../components/layout/FeaturePageLayout';
import { sideEventMailto, sideEvents } from '../data/siteContent';
import { usePageMetadata } from '../utils/usePageMetadata';

export function SideEventsPage() {
  usePageMetadata('Side Events | EA-HTS 2027', 'Explore eight EA-HTS 2027 forums connecting leadership, policy, research, investment, inclusion, and opportunity.');

  return (
    <FeaturePageLayout>
      <section className="feature-hero feature-hero--events">
        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1800&q=85" alt="African software professionals collaborating around computer code" />
        <div className="feature-hero__veil" />
        <div className="feature-hero__content">
          <p className="feature-kicker"><CalendarDays aria-hidden="true" /> Beyond the main stage</p>
          <h1>Where the conversations that shape systems begin.</h1>
          <p>Eight focused forums bring leadership, policy, research, investment, inclusion, and talent into the same regional conversation.</p>
          <div className="feature-actions">
            <a className="feature-button feature-button--gold" href={sideEventMailto}>Propose a side event <Mail aria-hidden="true" /></a>
            <a className="feature-button feature-button--ghost" href="mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Registration%20Updates">Registration updates <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="feature-hero__index" aria-label="Side event overview">
          <strong>08</strong><span>focused forums</span><strong>01</strong><span>regional mission</span>
        </div>
      </section>

      <section className="editorial-intro">
        <div>
          <p className="feature-kicker feature-kicker--blue">The programme around the programme</p>
          <h2>Different rooms.<br />One shared direction.</h2>
        </div>
        <p>Each side event creates room for a distinct community to move from discussion toward practical collaboration. Formats and schedules will be announced as the programme is confirmed.</p>
      </section>

      <section className="event-index" aria-labelledby="event-index-title">
        <div className="event-index__heading">
          <span>EA-HTS / Side Events</span>
          <h2 id="event-index-title">Eight forums to move ideas forward</h2>
        </div>
        <ol className="event-list">
          {sideEvents.map((event) => {
            const Icon = event.icon;
            return (
              <li key={event.title} className="event-row">
                <span className="event-row__number">{event.number}</span>
                <span className="event-row__icon"><Icon aria-hidden="true" /></span>
                <div className="event-row__content">
                  <span className="event-row__category">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <MoveRight className="event-row__arrow" aria-hidden="true" />
              </li>
            );
          })}
        </ol>
      </section>

      <section className="feature-cta">
        <p className="feature-kicker">Bring a needed conversation to Kigali</p>
        <h2>Have a session that belongs in this programme?</h2>
        <p>Share the organization, proposed topic, and contact person with the summit team.</p>
        <a className="feature-button feature-button--gold" href={sideEventMailto}>Propose a side event <ArrowRight aria-hidden="true" /></a>
        <Link className="feature-text-link" to="/partners">Explore partnership opportunities <MoveRight aria-hidden="true" /></Link>
      </section>
    </FeaturePageLayout>
  );
}