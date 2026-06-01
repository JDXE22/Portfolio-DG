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

// TODO: Replace each youtubeId with the real YouTube video ID after upload
// Format: 11-character ID from youtube.com/watch?v=XXXXXXXXXXX
export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Honey Baked Ham',
    category: 'Commercial',
    youtubeId: 'uojwW0_77Eg',
    meta: '1080p • 2026',
  },
  {
    id: 'v2',
    title: 'SSP America',
    category: 'Commercial',
    youtubeId: 'su4EfLhguhY',
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
    meta: '1080p • SPHERICAL • 2024',
  },
  {
    id: 'v5',
    title: 'Warrior Alliance',
    category: 'Narrative',
    youtubeId: 'LrkZ9jthmZg',
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
    meta: '1080p • 2026',
  },
  {
    id: 'v8',
    title: 'Our Georgia Coast',
    category: 'Narrative',
    youtubeId: 'uRPAglZacHs',
    meta: '1080p • 2026',
  },
  {
    id: 'v9',
    title: 'Our Georgia Coast - Dr shamblin',
    category: 'Narrative',
    youtubeId: 'xUCzXhgFilQ',
    meta: '1080p • ANAMORPHIC • 2026',
  },
  {
    id: 'v10',
    title: 'SPM X NICK',
    category: 'Social',
    youtubeId: '2qH0N1r483o',
    meta: '1080p • 2026',
  },
];
