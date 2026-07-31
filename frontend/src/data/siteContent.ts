import type { LucideIcon } from 'lucide-react';
import {
  Banknote,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Microscope,
  Scale,
  Sparkles,
  Users,
} from 'lucide-react';

export type SideEvent = {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
};

export type Partner = {
  name: string;
  detail?: string;
};

export type PartnerGroup = {
  id: 'ieee' | 'un' | 'development' | 'industry';
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  partners: Partner[];
};

export const sideEvents: SideEvent[] = [
  {
    number: '01',
    title: 'IEEE SIGHT Leadership Forum',
    category: 'Leadership',
    description: 'A forum focused on leadership in community-centered humanitarian technology initiatives.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Women in Humanitarian Technology Forum',
    category: 'Inclusion',
    description: 'A platform highlighting women shaping inclusive engineering and humanitarian innovation.',
    icon: HeartHandshake,
  },
  {
    number: '03',
    title: 'Youth Innovation Summit',
    category: 'Youth',
    description: 'A dedicated space for emerging innovators and youth-led approaches to regional challenges.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Government Policy Dialogue',
    category: 'Policy',
    description: 'A dialogue connecting public policy priorities with responsible technology deployment.',
    icon: Landmark,
  },
  {
    number: '05',
    title: 'UN Agencies Roundtable',
    category: 'Multilateral coordination',
    description: 'A roundtable exploring coordination around technology-enabled humanitarian action.',
    icon: Building2,
  },
  {
    number: '06',
    title: 'Humanitarian Technology Research Symposium',
    category: 'Research',
    description: 'A research forum for evidence, methods, and knowledge advancing humanitarian technology.',
    icon: Microscope,
  },
  {
    number: '07',
    title: 'Startup Investor Forum',
    category: 'Investment',
    description: 'A meeting point for impact-focused ventures and the investment community.',
    icon: Banknote,
  },
  {
    number: '08',
    title: 'Career and Opportunities Fair',
    category: 'Careers',
    description: 'A professional forum connecting talent with opportunities across the technology ecosystem.',
    icon: BriefcaseBusiness,
  },
];

export const partnerGroups: PartnerGroup[] = [
  {
    id: 'ieee',
    title: 'IEEE Partners',
    shortTitle: 'IEEE',
    description: 'Technical leadership, humanitarian engineering networks, and global IEEE reach.',
    icon: GraduationCap,
    partners: [
      { name: 'IEEE HTB' },
      { name: 'IEEE Foundation', detail: 'Including IEEE Smart Village' },
      { name: 'IEEE SIGHT' },
      { name: 'IEEE Region 8' },
      { name: 'IEEE Africa Council' },
    ],
  },
  {
    id: 'un',
    title: 'UN Agencies',
    shortTitle: 'UN Agencies',
    description: 'Humanitarian mandates, regional programmes, and development coordination.',
    icon: Scale,
    partners: [
      { name: 'UNDP' }, { name: 'UNICEF' }, { name: 'ITU' }, { name: 'WHO' },
      { name: 'FAO' }, { name: 'UNHCR' }, { name: 'WFP' },
    ],
  },
  {
    id: 'development',
    title: 'Development Organizations',
    shortTitle: 'Development',
    description: 'Development finance, capacity building, and inclusive digital transformation.',
    icon: HeartHandshake,
    partners: [
      { name: 'GSMA Mobile for Development' },
      { name: 'World Bank' },
      { name: 'African Development Bank' },
      { name: 'GIZ' },
      { name: 'Mastercard Foundation' },
    ],
  },
  {
    id: 'industry',
    title: 'Industry Partners',
    shortTitle: 'Industry',
    description: 'Technology platforms, connectivity, infrastructure, and private-sector expertise.',
    icon: Building2,
    partners: [
      { name: 'Microsoft' }, { name: 'Davis & Shirtliff' }, { name: 'Google' },
      { name: 'Ericsson' }, { name: 'Nokia' }, { name: 'MTN' }, { name: 'Airtel' }, { name: 'Safaricom' },
    ],
  },
];

export const sideEventMailto = 'mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Side%20Event%20Proposal&body=Hello%20EA-HTS%202027%20team%2C%0A%0AI%20would%20like%20to%20propose%20a%20side%20event.%0A%0AOrganization%3A%0AProposed%20session%3A%0AContact%20person%3A%0A';
export const partnerMailto = 'mailto:ieeeahts27@gmail.com?subject=EA-HTS%202027%20Partnership%20Inquiry&body=Hello%20EA-HTS%202027%20team%2C%0A%0AI%20would%20like%20to%20discuss%20a%20partnership%20opportunity.%0A%0AOrganization%3A%0AArea%20of%20interest%3A%0AContact%20person%3A%0A';