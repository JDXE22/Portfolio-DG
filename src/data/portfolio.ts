export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Logo {
  name: string;
  src: string;
  width?: number;
}

export interface Video {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
  poster?: string;
  meta: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'cinematography', label: 'Cinematography', href: '#cinematography' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const LOGOS: Logo[] = [
  { name: 'HoneyBaked', src: '/logos/HoneyBaked.svg' },
  { name: 'Etihad', src: '/logos/Etihad.svg' },
  { name: 'Allstate', src: '/logos/Allstate.svg', width: 180 },
  { name: 'Kroger', src: '/logos/Kroger.svg' },
  { name: 'Georgia', src: '/logos/Georgia.svg', width: 200 },
  { name: 'OldSpice', src: '/logos/OldSpice.svg' },
  { name: 'Swiffer', src: '/logos/Swiffer.svg' },
  { name: 'Tide', src: '/logos/Tide.svg' },
  { name: 'PndG', src: '/logos/PndG.svg' },
];

export const CATEGORIES: string[] = [
  'All',
  'Commercial',
  'Editing',
  'Art',
  'Social',
  'Narrative',
];

export const INITIAL_VISIBLE = 4;

// TODO: Replace with real reel YouTube ID when ready, then set isReelReady = true in index.astro
export const REEL_YOUTUBE_ID = 'PLACEHOLDER_REEL';

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Honey Baked Ham',
    category: 'Commercial',
    youtubeId: 'uojwW0_77Eg',
    poster: '/posters/HBJ.jpeg',
    meta: '1080p • 2026',
  },
  {
    id: 'v2',
    title: 'SSP America',
    category: 'Commercial',
    youtubeId: 'su4EfLhguhY',
    poster: '/posters/SSP_America.jpeg',
    meta: '1080p • 2024',
  },
  {
    id: 'v3',
    title: 'Resurgens Orthopedics: Adonis',
    category: 'Commercial',
    youtubeId: 'PLACEHOLDER_V3',
    meta: '1080p • ANAMORPHIC • 2023',
  },
  {
    id: 'v4',
    title: 'Resurgens Orthopedics: Loren',
    category: 'Commercial',
    youtubeId: 'EQkLtgjF3ig',
    poster: '/posters/Resurgens-Orthopedics-A.jpg',
    meta: '1080p • SPHERICAL • 2024',
  },
  {
    id: 'v5',
    title: 'Warrior Alliance',
    category: 'Narrative',
    youtubeId: 'LrkZ9jthmZg',
    poster: '/posters/Warrior_alliance.jpeg',
    meta: '1080p  • 2026',
  },
  {
    id: 'v6',
    title: 'Resurgens Orthopedics: Spine Center',
    category: 'Editing',
    youtubeId: 'PLACEHOLDER_V6',
    meta: '1080p • SPHERICAL • 2024',
  },
  {
    id: 'v7',
    title: 'Ziegler Caterpillar',
    category: 'Editing',
    youtubeId: 'XHqGdNwJdU0',
    poster: '/posters/caterpillar.jpeg',
    meta: '1080p • 2026',
  },
  {
    id: 'v8',
    title: 'Our Georgia Coast',
    category: 'Narrative',
    youtubeId: 'uRPAglZacHs',
    poster: '/posters/Georgia_coast.jpeg',
    meta: '1080p • 2026',
  },
  {
    id: 'v9',
    title: 'Our Georgia Coast - Dr Shamblin',
    category: 'Narrative',
    youtubeId: 'xUCzXhgFilQ',
    poster: '/posters/Georgia_coast_dr_s.jpeg',
    meta: '1080p • ANAMORPHIC • 2026',
  },
  {
    id: 'v10',
    title: 'SPM X NICK',
    category: 'Social',
    youtubeId: '2qH0N1r483o',
    poster: '/posters/SPM.jpeg',
    meta: '1080p • 2026',
  },
  {
    id: 'v11',
    title: 'SWC - Soul Work',
    category: 'Social',
    youtubeId: 'Z0ZtLWKjBUw',
    poster: '/posters/SWC.jpg',
    meta: '1080p • 2026',
  },
];
