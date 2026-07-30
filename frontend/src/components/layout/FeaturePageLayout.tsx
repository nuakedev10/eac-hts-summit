import type { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type FeaturePageLayoutProps = { children: ReactNode };

export function FeaturePageLayout({ children }: FeaturePageLayoutProps) {
  return (
    <div className="feature-app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}