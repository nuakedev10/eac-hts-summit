import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { partnerGroups, partnerMailto, sideEventMailto, sideEvents } from '../data/siteContent';
import { PartnersPage } from './PartnersPage';
import { SideEventsPage } from './SideEventsPage';

function renderRoute(component: React.ReactNode) {
  return render(<MemoryRouter>{component}</MemoryRouter>);
}

describe('SideEventsPage', () => {
  it('renders every supplied side event and the proposal CTA', () => {
    renderRoute(<SideEventsPage />);

    sideEvents.forEach((event) => {
      expect(screen.getByRole('heading', { name: event.title })).toBeInTheDocument();
    });
    expect(screen.getAllByRole('link', { name: /propose a side event/i })[0]).toHaveAttribute('href', sideEventMailto);
    expect(screen.queryByText(/Fair1/)).not.toBeInTheDocument();
  });

  it('exposes an accessible mobile navigation control', () => {
    renderRoute(<SideEventsPage />);
    const menu = screen.getByRole('button', { name: /open navigation/i });
    expect(menu).toHaveAttribute('aria-expanded', 'false');
    expect(menu).toHaveAttribute('aria-controls', 'primary-navigation');
    fireEvent.click(menu);
    expect(screen.getByRole('button', { name: /close navigation/i })).toHaveAttribute('aria-expanded', 'true');
  });
});

describe('PartnersPage', () => {
  it('defines all four categories and their prospective organizations', () => {
    expect(partnerGroups).toHaveLength(4);
    expect(partnerGroups.map((group) => group.title)).toEqual([
      'IEEE Partners',
      'UN Agencies',
      'Development Organizations',
      'Industry Partners',
    ]);
    expect(partnerGroups.flatMap((group) => group.partners.map((partner) => partner.name))).toEqual([
      'IEEE HTB', 'IEEE Foundation', 'IEEE SIGHT', 'IEEE Region 8', 'IEEE Africa Council',
      'UNDP', 'UNICEF', 'ITU', 'WHO', 'FAO', 'UNHCR', 'WFP',
      'GSMA Mobile for Development', 'World Bank', 'African Development Bank', 'GIZ', 'Mastercard Foundation',
      'Microsoft', 'Davis & Shirtliff', 'Google', 'Ericsson', 'Nokia', 'MTN', 'Airtel', 'Safaricom',
    ]);
  });

  it('switches category panels accessibly', () => {
    renderRoute(<PartnersPage />);
    const tab = screen.getByRole('tab', { name: /Industry/i });
    fireEvent.click(tab);
    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(within(screen.getByRole('tabpanel')).getByText('Safaricom')).toBeInTheDocument();
  });

  it('labels organizations as prospective and uses the prefilled inquiry CTA', () => {
    renderRoute(<PartnersPage />);
    expect(screen.getByText(/participation is not yet confirmed/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /become a partner/i })[0]).toHaveAttribute('href', partnerMailto);
  });
});