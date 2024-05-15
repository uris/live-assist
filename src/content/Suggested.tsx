import { Suggestion } from '@comp/SuggestTileList/SuggestTileList';
import { themeColors } from '@ref/colors';

export const defaultTiles: Suggestion[] = [
  {
    logo: true,
    title:
      'Set up shop in Spain in less than a week - no legal entity required.',
    subtitle: 'G-P EOR: Low cost. Hassle free. Fast to market.',
    author: 'Employer of Record',
    info: 'Schedule a 30 mins. live call',
    done: false,
    credits: 'Free',
    id: 'spain eor',
    image: { name: 'zoom', height: 16, color: themeColors.primaryGPBlue },
  },
  {
    logo: true,
    title: 'Evaluating benefits options in Spain.',
    subtitle: 'Expert strategies for effective talent aquisition in Spain.',
    author: 'G-P Market Insights',
    info: '2 min. read',
    done: false,
    credits: 15,
    id: 'spain benefits',
    image: { name: 'pdf', height: 32 },
  },
  {
    logo: true,
    title: 'Establishing a local business entity in Spain.',
    subtitle:
      'Operational field guide to getting legally set up and ready for business.',
    author: 'G-P Advisors',
    info: '5 min. read',
    done: false,
    credits: 25,
    id: 'spain entity',
    image: { name: 'pdf', height: 32 },
  },
];

export const subTiles: Suggestion[] = [
  {
    logo: true,
    title: '25% off Meridian Core EOR + 2 Free background checks',
    subtitle:
      'Everything you need to start your project in Spain in under a week.',
    author: 'Employer of Record',
    done: false,
    credits: 'Exclusive Offer',
    id: 'spain eor',
    product: { name: 'core', size: 48 },
    offer: true,
  },
  {
    logo: true,
    title: 'Assessing the maturity of IT industry in Spain.',
    subtitle: 'Industry overview and assessment.',
    author: 'G-P Market Insights',
    info: '2 min. read',
    done: false,
    credits: 'Special Report',
    id: 'spain it report',
    image: { name: 'pdf', height: 32 },
  },
  {
    logo: true,
    title: 'Compensation benchmarks: IT Industry in Spain.',
    subtitle:
      'Get insights into the compensation levels for IT roles in Spain.',
    author: 'G-P Market Insights',
    info: '10 min. read',
    done: false,
    credits: 'Business Only Report',
    id: 'spain comp',
    image: { name: 'pdf', height: 32 },
  },
];
