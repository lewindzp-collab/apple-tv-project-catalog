/* ============================================================
   Apple TV — Web Experience
   Fan-made interface study. Not affiliated with Apple Inc.
   All titles/artwork are fictional placeholders.
   ============================================================ */

/* ----------------------------- Data ----------------------------- */

const U = (id, w = 1400, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=82`;

const TITLES = [
  {
    id: 'split', title: 'The Split', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-MA',
    seasons: 3, runtime: '1h 04m', match: 98, genres: ['Drama', 'Thriller', 'Mystery'],
    color: '#3b2c4a', backdrop: 'photo-1518709268805-4e9042af9f23', poster: 'photo-1534796636912-3b95b3ab5986',
    desc: 'A brilliant forensic accountant discovers that the corporation she trusts is hiding a crime larger than she ever imagined. Every answer leads to a darker question.',
    cast: ['Maya Chen', 'Daniel Okafor', 'Ruth Bell', 'Theo Marin']
  },
  {
    id: 'orbit', title: 'Orbit Zero', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-14',
    seasons: 2, runtime: '58m', match: 96, genres: ['Sci-Fi', 'Adventure'],
    color: '#122a4a', backdrop: 'photo-1446776811953-b23d57bd21aa', poster: 'photo-1462331940025-496dfbfc7564',
    desc: 'When a routine mission loses contact with Earth, six astronauts must rebuild trust — and a way home — aboard a station that is quietly falling apart.',
    cast: ['Ana Reyes', 'Peter Lind', 'Yuki Tanaka', 'Sam Adeyemi']
  },
  {
    id: 'coast', title: 'Wild Coast', brand: 'APPLE TV+ ORIGINAL', year: 2025, rating: 'TV-PG',
    seasons: 4, runtime: '47m', match: 94, genres: ['Documentary', 'Nature'],
    color: '#12403f', backdrop: 'photo-1507525428034-b723cf961d3e', poster: 'photo-1470770841072-f978cf4d019e',
    desc: 'An intimate journey along the world’s most untouched shorelines, told through the people who call them home and the creatures who survive there.',
    cast: ['Narrated by Elena Brooks']
  },
  {
    id: 'quiet', title: 'The Quiet Hour', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-MA',
    seasons: 1, runtime: '1h 12m', match: 97, genres: ['Drama', 'Crime'],
    color: '#3a2a22', backdrop: 'photo-1478720568477-152d9b164e26', poster: 'photo-1489599849927-2ee91cede3ba',
    desc: 'In a small town where everyone knows everyone, a single unanswered phone call unravels a decade of carefully kept secrets.',
    cast: ['Claire Moreau', 'Ben Halvorsen', 'Ada Wright']
  },
  {
    id: 'neon', title: 'Neon Divide', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-MA',
    seasons: 2, runtime: '52m', match: 92, genres: ['Sci-Fi', 'Cyberpunk', 'Action'],
    color: '#3d1230', backdrop: 'photo-1519501025264-65ba15a82390', poster: 'photo-1480714378408-67cf0d13bc1b',
    desc: 'A courier with an illegal memory implant becomes the only person who can prove that the city’s new security system is rewriting its citizens.',
    cast: ['Kai Navarro', 'Lena Ortiz', 'Marcus Vale']
  },
  {
    id: 'north', title: 'Northern Lights', brand: 'APPLE TV+ ORIGINAL', year: 2025, rating: 'TV-14',
    seasons: 2, runtime: '1h 02m', match: 95, genres: ['Drama', 'Adventure'],
    color: '#1b3a48', backdrop: 'photo-1519681393784-d120267933ba', poster: 'photo-1500530855697-b586d89ba3ee',
    desc: 'Two estranged siblings return to their family’s remote research station to fulfill a promise made before the winter closed the road forever.',
    cast: ['Freya Lund', 'Otto Berg', 'Ingrid Sol']
  },
  {
    id: 'echo', title: 'Echo Valley', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-MA',
    seasons: 1, runtime: '49m', match: 90, genres: ['Thriller', 'Mystery'],
    color: '#26382a', backdrop: 'photo-1500534623283-312aade485b7', poster: 'photo-1472214103451-9374bd1c798e',
    desc: 'A sound engineer records a strange signal in an abandoned valley — and learns that the valley has been waiting for someone to listen.',
    cast: ['Noor Haddad', 'Elliot Park', 'Vera Solis']
  },
  {
    id: 'stage', title: 'Center Stage', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-PG',
    seasons: 3, runtime: '44m', match: 93, genres: ['Music', 'Drama'],
    color: '#43213a', backdrop: 'photo-1492684223066-81342ee5ff30', poster: 'photo-1514525253161-7a46d19cd819',
    desc: 'Backstage at the world’s most demanding theater, a company of performers fights for the spotlight — and for each other.',
    cast: ['Amara King', 'Theo Reyes', 'Jules Martin']
  },
  {
    id: 'signal', title: 'The Last Signal', brand: 'APPLE TV+ ORIGINAL', year: 2025, rating: 'TV-14',
    seasons: 2, runtime: '56m', match: 91, genres: ['Sci-Fi', 'Thriller'],
    color: '#20313f', backdrop: 'photo-1534796636912-3b95b3ab5986', poster: 'photo-1451187580459-43490279c0fa',
    desc: 'A radio astronomer picks up a transmission that shouldn’t exist. The message is in her own voice — dated thirty years from now.',
    cast: ['Iris Delaney', 'Owen Clarke', 'Priya Raman']
  },
  {
    id: 'archive', title: 'The Archive', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-MA',
    seasons: 1, runtime: '1h 08m', match: 89, genres: ['Drama', 'History'],
    color: '#3d3323', backdrop: 'photo-1440404653325-ab127d49abc1', poster: 'photo-1489599849927-2ee91cede3ba',
    desc: 'A librarian discovers that the world’s most secret documents were hidden in plain sight — inside the books nobody ever borrowed.',
    cast: ['Helena Voss', 'Ravi Menon', 'Tom Ereira']
  },
  {
    id: 'blue', title: 'Blue Horizon', brand: 'APPLE TV+ ORIGINAL', year: 2025, rating: 'TV-G',
    seasons: 5, runtime: '39m', match: 88, genres: ['Family', 'Adventure'],
    color: '#1d3f5c', backdrop: 'photo-1507525428034-b723cf961d3e', poster: 'photo-1470770841072-f978cf4d019e',
    desc: 'A family of explorers sails the open ocean, discovering remarkable places and learning that home is wherever they are together.',
    cast: ['The Marlow Family']
  },
  {
    id: 'origin', title: 'Origin', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-14',
    seasons: 1, runtime: '1h 16m', match: 94, genres: ['Documentary', 'Science'],
    color: '#2b2b45', backdrop: 'photo-1462331940025-496dfbfc7564', poster: 'photo-1534796636912-3b95b3ab5986',
    desc: 'A stunning visual exploration of the first moments of our universe, and the questions that still keep scientists awake at night.',
    cast: ['Narrated by Daniel West']
  },
  {
    id: 'storm', title: 'After the Storm', brand: 'APPLE TV+ ORIGINAL', year: 2025, rating: 'TV-MA',
    seasons: 2, runtime: '54m', match: 87, genres: ['Drama', 'Mystery'],
    color: '#2f3336', backdrop: 'photo-1472214103451-9374bd1c798e', poster: 'photo-1500534623283-312aade485b7',
    desc: 'Twelve years after a hurricane erased their town from the map, its residents are forced to explain what really happened that night.',
    cast: ['Corinne Wright', 'Jace Moreno', 'Nia Brooks']
  },
  {
    id: 'signal2', title: 'Midnight Run', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-14',
    seasons: 1, runtime: '1h 01m', match: 86, genres: ['Action', 'Comedy'],
    color: '#3a2430', backdrop: 'photo-1519501025264-65ba15a82390', poster: 'photo-1480714378408-67cf0d13bc1b',
    desc: 'Two rival delivery drivers accidentally swap bags in a city that never sleeps — and spend one night trying to get them back.',
    cast: ['Rico Grant', 'Mina Park', 'Lou Fisher']
  },
  {
    id: 'little', title: 'Little Things', brand: 'APPLE TV+ ORIGINAL', year: 2025, rating: 'TV-PG',
    seasons: 4, runtime: '31m', match: 92, genres: ['Comedy', 'Family'],
    color: '#3b3527', backdrop: 'photo-1470770841072-f978cf4d019e', poster: 'photo-1500530855697-b586d89ba3ee',
    desc: 'The small, funny, deeply familiar stories of a family who loves each other loudly and imperfectly.',
    cast: ['June Park', 'Alex Bell', 'Milo Quinn']
  },
  {
    id: 'far', title: 'Far From Home', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-14',
    seasons: 2, runtime: '1h 06m', match: 90, genres: ['Drama', 'Travel'],
    color: '#273a3a', backdrop: 'photo-1500530855697-b586d89ba3ee', poster: 'photo-1519681393784-d120267933ba',
    desc: 'A chef leaves everything behind to cook her way across three continents, searching for the recipe her grandmother never wrote down.',
    cast: ['Sofia Almeida', 'Noah Reid']
  },
  {
    id: 'surface', title: 'Below the Surface', brand: 'APPLE TV+ ORIGINAL', year: 2025, rating: 'TV-MA',
    seasons: 1, runtime: '51m', match: 85, genres: ['Thriller', 'Documentary'],
    color: '#173840', backdrop: 'photo-1451187580459-43490279c0fa', poster: 'photo-1446776811953-b23d57bd21aa',
    desc: 'A deep-sea expedition finds something that changes what we know about life on our own planet.',
    cast: ['Dr. Lena Ortiz', 'Commander Hall']
  },
  {
    id: 'paper', title: 'Paper Kingdom', brand: 'APPLE TV+ ORIGINAL', year: 2026, rating: 'TV-PG',
    seasons: 3, runtime: '42m', match: 91, genres: ['Animation', 'Family'],
    color: '#463624', backdrop: 'photo-1493225457124-a3eb161ffa5f', poster: 'photo-1492684223066-81342ee5ff30',
    desc: 'In a kingdom made entirely of folded paper, a young cartographer discovers that the map is changing faster than the world it describes.',
    cast: ['Voices of Iris Cole', 'Ben Yorke', 'Maya Shaye']
  }
];

const byId = id => TITLES.find(t => t.id === id);
const featured = ['split', 'orbit', 'neon', 'stage'].map(byId);

const ROWS = [
  { key: 'continue', title: 'Continue Watching', ids: ['split', 'orbit', 'quiet', 'coast', 'neon'], progress: true },
  { key: 'top', title: 'Top 10 TV Shows', ids: ['split', 'neon', 'quiet', 'orbit', 'stage', 'echo', 'signal', 'origin', 'storm', 'blue'], top: true },
  { key: 'top-movies', title: 'Top 10 Movies', ids: ['quiet', 'echo', 'archive', 'storm', 'signal2', 'origin', 'surface', 'far', 'paper', 'coast'], top: true },
  { key: 'great', title: 'Great Movies Now on Apple TV', ids: ['quiet', 'origin', 'north', 'archive', 'echo', 'signal', 'storm', 'surface'] },
  { key: 'originals', title: 'Apple TV+ Originals', ids: ['orbit', 'north', 'quiet', 'archive', 'echo', 'signal', 'little', 'far', 'origin', 'paper'] },
  { key: 'new', title: 'New Releases', ids: ['stage', 'neon', 'origin', 'signal2', 'paper', 'far', 'split'] },
  { key: 'acclaimed', title: 'Critically Acclaimed', ids: ['quiet', 'origin', 'north', 'split', 'coast', 'archive', 'surface', 'echo'] },
  { key: 'because', title: 'Because you watched The Split', ids: ['echo', 'storm', 'archive', 'signal', 'quiet', 'surface', 'orbit'] },
  { key: 'docs', title: 'Documentaries', ids: ['coast', 'origin', 'surface', 'archive', 'blue'], poster: true },
  { key: 'family', title: 'Family Movie Night', ids: ['paper', 'little', 'blue', 'far', 'stage'], poster: true }
];

const SAMPLE_EPISODES = [
  { no: 1, name: 'The Beginning', desc: 'An ordinary day takes an extraordinary turn when a forgotten detail resurfaces.', len: '52m' },
  { no: 2, name: 'Fault Lines', desc: 'The team follows a lead that puts everything they thought they knew in question.', len: '48m' },
  { no: 3, name: 'What Remains', desc: 'A difficult choice forces two allies to see the situation from opposite sides.', len: '55m' },
  { no: 4, name: 'The Long Way Home', desc: 'Answers arrive at a cost, and the truth changes the shape of the story.', len: '1h 01m' },
  { no: 5, name: 'Aftermath', desc: 'The consequences of the previous night ripple through every relationship.', len: '49m' }
];

const VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const LS_KEY = 'appletv-web-experience-v1';

/* --------------------------- State --------------------------- */

const defaults = {
  profiles: [
    { id: 'p1', name: 'Alex', initials: 'A', color: '#0a84ff' },
    { id: 'p2', name: 'Jordan', initials: 'J', color: '#ff9f0a' },
    { id: 'p3', name: 'Kids', initials: 'K', color: '#30d158' }
  ],
  activeProfile: 'p1',
  watchlist: { p1: ['orbit', 'quiet', 'origin'], p2: ['coast'], p3: ['paper', 'blue'] },
  progress: {
    p1: { split: 42, orbit: 68, quiet: 17, coast: 85, neon: 9 },
    p2: { coast: 30 },
    p3: { paper: 55 }
  },
  settings: { autoplay: true, motion: true, subtitles: false, quality: '4K', reduceMotion: false }
};

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    return {
      ...defaults,
      ...raw,
      settings: { ...defaults.settings, ...(raw.settings || {}) },
      watchlist: { ...defaults.watchlist, ...(raw.watchlist || {}) },
      progress: { ...defaults.progress, ...(raw.progress || {}) }
    };
  } catch (_) {
    return structuredClone(defaults);
  }
}

const saved = loadState();

const state = {
  page: 'home',
  query: '',
  chip: 'All',
  libTab: 'All',
  heroIndex: 0,
  modal: null,
  detailId: null,
  cc: false,
  remote: true,
  player: null,
  focusEl: null,
  ...saved
};

function persist() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({
      profiles: state.profiles, activeProfile: state.activeProfile,
      watchlist: state.watchlist, progress: state.progress, settings: state.settings
    }));
  } catch (_) { /* storage may be blocked */ }
}

const watchlist = () => state.watchlist[state.activeProfile] || (state.watchlist[state.activeProfile] = []);
const progress = () => state.progress[state.activeProfile] || (state.progress[state.activeProfile] = {});
const profile = () => state.profiles.find(p => p.id === state.activeProfile) || state.profiles[0];
const inList = id => watchlist().includes(id);

/* --------------------------- Icons --------------------------- */

const ICONS = {
  play: '<path d="M8 5.2v13.6c0 .8.9 1.3 1.6.9l10.2-6.8a1.1 1.1 0 0 0 0-1.8L9.6 4.3c-.7-.4-1.6.1-1.6.9Z" fill="currentColor"/>',
  pause: '<path d="M7 5h3.2v14H7zM13.8 5H17v14h-3.2z" fill="currentColor"/>',
  plus: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.3" stroke="currentColor" stroke-width="2" fill="none"/><path d="m16 16 4.2 4.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  close: '<path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  back: '<path d="m14.5 5-7 7 7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  left: '<path d="m15 5-7 7 7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  right: '<path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  gear: '<circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.6 5.4l-1.7 1.7M7.1 16.9l-1.7 1.7M18.6 18.6l-1.7-1.7M7.1 7.1 5.4 5.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  user: '<circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M4.5 21c.8-4 3.7-6 7.5-6s6.7 2 7.5 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  remote: '<rect x="7" y="2.5" width="10" height="19" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="8" r="2.2" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M10 15.5h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  info: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 11v6M12 7.5v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  volume: '<path d="M4 9h3.5L12 5v14l-4.5-4H4z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  mute: '<path d="M4 9h3.5L12 5v14l-4.5-4H4z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="m16 9 5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  cc: '<rect x="2.5" y="5" width="19" height="14" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M10 10.2a2.4 2.4 0 1 0 0 3.6M17.5 10.2a2.4 2.4 0 1 0 0 3.6" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
  full: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  back10: '<path d="M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="700" fill="currentColor">10</text>',
  fwd10: '<path d="M20 12a8 8 0 1 1-2.5-5.8M20 4v4h-4" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="12" y="16" text-anchor="middle" font-size="8" font-weight="700" fill="currentColor">10</text>',
  next: '<path d="M5 5.5v13l9-6.5zM16 5v14" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>',
  wifi: '<path d="M2.5 8.5a15 15 0 0 1 19 0M5.5 12a10.5 10.5 0 0 1 13 0M8.5 15.4a6 6 0 0 1 7 0M12 19h.01" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  bluetooth: '<path d="m8 7 8 10-4 3V4l4 3-8 10" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>',
  sun: '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19 5l-1.5 1.5M6.5 17.5 5 19M19 19l-1.5-1.5M6.5 6.5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  power: '<path d="M12 3v9M6.5 6.5a8 8 0 1 0 11 0" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>',
  sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="7" r="2" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="8" cy="17" r="2" stroke="currentColor" stroke-width="2" fill="none"/>',
  tv: '<rect x="2.5" y="4.5" width="19" height="13" rx="2.5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 21h8M12 17.5V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" fill="none"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" fill="none"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" fill="none"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2" fill="none"/>',
  siri: '<path d="M12 3a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V8a5 5 0 0 1 5-5Z" stroke="currentColor" stroke-width="1.8" fill="none"/><path d="M5 12a7 7 0 0 0 14 0M12 19v2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>'
};

const icon = (name, cls = '') =>
  `<svg class="${cls}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">${ICONS[name] || ''}</svg>`;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const grad = t => `linear-gradient(135deg, ${t.color}, #08080a)`;
const img = (t, w = 1400, h = 800) => `<img src="${U(t.backdrop, w, h)}" alt="" loading="lazy" onerror="this.style.opacity='0'">`;

let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-on'), 2400);
}

/* --------------------------- Markup --------------------------- */

function navMarkup() {
  const links = [
    ['home', 'Home'], ['shows', 'TV Shows'], ['movies', 'Movies'],
    ['sports', 'Sports'], ['library', 'Library']
  ];
  return `<header class="nav">
    <button class="nav__brand" data-focusable data-action="page" data-page="home" aria-label="Apple TV home">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.54c-.03-2.4 1.96-3.56 2.05-3.62-1.12-1.64-2.85-1.86-3.47-1.88-1.48-.15-2.88.87-3.63.87-.75 0-1.9-.85-3.13-.83-1.6.02-3.09.93-3.91 2.36-1.67 2.9-.43 7.18 1.2 9.53.8 1.15 1.75 2.44 3 2.39 1.2-.05 1.66-.78 3.11-.78 1.45 0 1.86.78 3.13.75 1.3-.02 2.12-1.17 2.9-2.33.92-1.33 1.3-2.62 1.32-2.69-.03-.01-2.53-.97-2.57-3.77zM14.79 5.94c.66-.8 1.11-1.92.99-3.03-.96.04-2.13.64-2.82 1.44-.62.72-1.16 1.87-1.02 2.96 1.07.08 2.17-.54 2.85-1.37z"/></svg>
      <span>tv</span>
    </button>
    <nav class="nav__links" aria-label="Main">
      ${links.map(([p, label]) => `<button class="nav__link ${state.page === p ? 'is-active' : ''}" data-focusable data-action="page" data-page="${p}">${label}</button>`).join('')}
    </nav>
    <div class="nav__spacer"></div>
    <label class="nav__search">
      ${icon('search')}
      <input id="navSearch" type="search" placeholder="Search shows, movies, sports" value="${esc(state.query)}" autocomplete="off" aria-label="Search">
    </label>
    <button class="nav__icon" data-focusable data-action="focus-search" aria-label="Search">${icon('search')}</button>
    <button class="nav__icon" data-focusable data-action="open-cc" aria-label="Control Center">${icon('sliders')}</button>
    <button class="nav__signin" data-focusable data-action="open-profiles">Sign In</button>
    <button class="nav__avatar" style="background:${profile().color}" data-focusable data-action="open-profiles" aria-label="Switch profile">${profile().initials}</button>
  </header>`;
}

function helperMarkup() {
  return `<div class="helper-bar">
    <button data-focusable data-action="toggle-remote">${icon('remote')} ${state.remote ? 'Hide' : 'Show'} remote</button>
    <button data-focusable data-action="open-cc">${icon('sliders')} Control Center</button>
    <button data-focusable data-action="open-settings">${icon('gear')} Settings</button>
    <button data-focusable data-action="show-help">${icon('info')} Shortcuts</button>
  </div>`;
}

function heroMarkup() {
  const t = featured[state.heroIndex];
  const saved = inList(t.id);
  return `<section class="hero" id="hero">
    <div class="hero__bg" style="background-image:url('${U(t.backdrop, 2000, 1200)}');background-color:${t.color}"></div>
    <div class="hero__shade"></div>
    <div class="hero__content">
      <div class="hero__eyebrow"><span class="hero__apple">${t.brand}</span></div>
      <h1 class="hero__title">${esc(t.title)}</h1>
      <div class="hero__meta">
        <span class="hero__match">${t.match}% match</span><span>${t.year}</span><span class="hero__rating">${t.rating}</span>
        <span>${t.seasons} season${t.seasons > 1 ? 's' : ''}</span><span>${t.genres.join(' · ')}</span>
      </div>
      <p class="hero__desc">${esc(t.desc)}</p>
      <div class="hero__actions">
        <button class="btn btn--primary" data-focusable data-autofocus data-action="play" data-id="${t.id}">${icon('play')} Play</button>
        <button class="btn" data-focusable data-action="detail" data-id="${t.id}">${icon('info')} More Info</button>
        <button class="btn btn--icon" data-focusable data-action="toggle-watch" data-id="${t.id}" aria-label="${saved ? 'Remove from' : 'Add to'} Watchlist">${icon(saved ? 'check' : 'plus')}</button>
      </div>
    </div>
    <div class="hero__side">
      <button data-focusable data-action="hero-prev" aria-label="Previous feature">${icon('left')}</button>
      <button data-focusable data-action="hero-next" aria-label="Next feature">${icon('right')}</button>
    </div>
    <div class="hero__dots">
      ${featured.map((_, i) => `<button class="hero__dot ${i === state.heroIndex ? 'is-on' : ''}" data-focusable data-action="hero-dot" data-i="${i}" aria-label="Feature ${i + 1}"></button>`).join('')}
    </div>
  </section>`;
}

function cardMarkup(t, opts = {}) {
  const pct = progress()[t.id];
  const ranked = opts.top ? `<span class="row__rank">${opts.rank}</span>` : '';
  const thumb = opts.top
    ? `<div class="row__thumb">${img(t)}</div>`
    : img(t, 900, 520);
  return `<article class="row__card ${opts.poster ? 'row__card--poster' : ''} ${opts.top ? 'row__card--top' : ''}"
      data-focusable data-action="detail" data-id="${t.id}" style="background:${grad(t)}" role="button" tabindex="0">
    ${ranked}${thumb}
    <span class="row__badge">${t.brand.replace('APPLE TV+ ', '')}</span>
    <div class="row__label">${esc(t.title)}
      ${pct ? `<div class="row__sub">Resume · ${Math.round(pct)}%</div>` : ''}
    </div>
    ${pct ? `<div class="row__progress"><i style="width:${pct}%"></i></div>` : ''}
  </article>`;
}

function rowMarkup(row) {
  const items = row.ids.map(byId).filter(Boolean);
  return `<section class="row" data-row="${row.key}">
    <div class="row__head"><h2 class="row__title">${row.title}</h2><span class="row__more">See all ›</span></div>
    <button class="row__nav row__nav--prev" data-focusable data-action="row-scroll" data-dir="-1" aria-label="Scroll left">${icon('left')}</button>
    <div class="row__track">${items.map((t, i) => cardMarkup(t, {
      top: row.top, poster: row.poster, rank: i + 1, progress: row.progress
    })).join('')}</div>
    <button class="row__nav row__nav--next" data-focusable data-action="row-scroll" data-dir="1" aria-label="Scroll right">${icon('right')}</button>
  </section>`;
}

function promoMarkup() {
  const cards = [
    {
      id: 'promo-offer', color: '#1c1c1e',
      title: 'Get 6 months of Apple TV for $6.99/mo.',
      body: 'Thousands of hours of exclusive Apple Originals. Now over 50% off.',
      fine: '$6.99/month for the first 6 months, then $14.99/month',
      btn: 'Accept Offer', action: 'open-profiles'
    },
    {
      id: 'promo-bundle', color: '#14243a',
      title: 'Get Apple TV and Peacock together.',
      body: 'All of Apple TV and Peacock. One subscription.',
      fine: 'Plans start at $17.99/month',
      btn: 'Bundle and Save', action: 'show-help'
    }
  ];
  return `<section class="promo" aria-label="Offers">
    <div class="promo__track">${cards.map(c => `<article class="promo__card" style="background:${c.color}" data-focusable data-action="${c.action}" role="button" tabindex="0">
      <h2 class="promo__title">${c.title}</h2>
      <p class="promo__body">${c.body}</p>
      <p class="promo__fine">${c.fine}</p>
      <button class="promo__btn" data-focusable data-action="${c.action}">${c.btn}</button>
    </article>`).join('')}</div>
  </section>`;
}

function homeMarkup() {
  return heroMarkup() + promoMarkup() + `<div class="shelf">${ROWS.map(rowMarkup).join('')}</div>`;
}

function gridMarkup(items) {
  if (!items.length) return `<div class="empty">No titles found. Try another search.</div>`;
  return `<div class="grid">${items.map(t => `<article class="grid__item" data-focusable data-action="detail" data-id="${t.id}"
    style="background:${grad(t)}" role="button" tabindex="0">
      ${img(t, 700, 420)}<div class="grid__cap">${esc(t.title)}</div>
    </article>`).join('')}</div>`;
}

function browseMarkup() {
  const p = state.page;
  const map = {
    shows: { title: 'TV Shows', sub: 'Stories that stay with you, episode after episode.', filter: t => t.seasons > 1 },
    movies: { title: 'Movies', sub: 'One sitting. A whole world.', filter: t => t.seasons === 1 },
    sports: { title: 'Sports', sub: 'Live energy, exclusive stories, and the moments that matter.', filter: t => ['stage', 'signal2', 'coast', 'little'].includes(t.id) },
    library: { title: 'Your Library', sub: 'Everything you saved, all in one place.', filter: t => inList(t.id) }
  };
  const cfg = map[p] || map.shows;
  const items = TITLES.filter(cfg.filter);
  const tabs = p === 'library'
    ? `<div class="tabs">${['All', 'TV Shows', 'Movies'].map(x => `<button class="tab ${state.libTab === x ? 'is-on' : ''}" data-focusable data-action="lib-tab" data-tab="${x}">${x}</button>`).join('')}</div>`
    : '';
  let shown = items;
  if (p === 'library' && state.libTab !== 'All') {
    shown = items.filter(t => state.libTab === 'TV Shows' ? t.seasons > 1 : t.seasons === 1);
  }
  return `<div class="library-page">
    <h1 class="section-title">${cfg.title}</h1><p class="section-sub">${cfg.sub}</p>
    ${tabs}${gridMarkup(shown)}
  </div>`;
}

function searchMarkup() {
  const chips = ['All', 'Drama', 'Sci-Fi', 'Documentary', 'Comedy', 'Thriller', 'Family'];
  let items = TITLES;
  if (state.chip !== 'All') items = items.filter(t => t.genres.includes(state.chip));
  if (state.query.trim()) {
    const q = state.query.trim().toLowerCase();
    items = items.filter(t =>
      (t.title + ' ' + t.desc + ' ' + t.genres.join(' ') + ' ' + t.cast.join(' ')).toLowerCase().includes(q)
    );
  }
  return `<div class="search-page">
    <h1 class="section-title">Search</h1>
    <p class="section-sub">Find something new, or pick up where you left off.</p>
    <label class="search-box">
      ${icon('search')}
      <input id="pageSearch" type="search" placeholder="Movies, shows, people, genres" value="${esc(state.query)}" autocomplete="off" aria-label="Search titles">
      <button data-focusable data-action="voice-search" aria-label="Voice search">${icon('mic')}</button>
    </label>
    <div class="chips">${chips.map(c => `<button class="chip ${state.chip === c ? 'is-on' : ''}" data-focusable data-action="chip" data-chip="${c}">${c}</button>`).join('')}</div>
    <p class="section-sub">${items.length} result${items.length === 1 ? '' : 's'}${state.query ? ` for “${esc(state.query)}”` : ''}</p>
    ${gridMarkup(items)}
  </div>`;
}

function pageMarkup() {
  if (state.page === 'home') return homeMarkup();
  if (state.page === 'search') return searchMarkup();
  return browseMarkup();
}

/* --------------------------- Overlays --------------------------- */

function detailMarkup() {
  const t = byId(state.detailId);
  if (!t) return '';
  const saved = inList(t.id);
  const similar = TITLES.filter(x => x.id !== t.id && x.genres.some(g => t.genres.includes(g))).slice(0, 4);
  return `<div class="modal-back" data-action="backdrop-close">
    <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(t.title)} details">
      <button class="modal__close" data-focusable data-action="close-modal" aria-label="Close">${icon('close')}</button>
      <div class="modal__hero" style="background:${grad(t)}">
        ${img(t, 1400, 800)}
        <div class="modal__hero-text">
          <h2 class="modal__title">${esc(t.title)}</h2>
          <div class="modal__meta"><span class="hero__match">${t.match}% match</span><span>${t.year}</span><span class="hero__rating">${t.rating}</span><span>${t.seasons} season${t.seasons > 1 ? 's' : ''}</span><span>${t.runtime}</span><span>4K · Dolby Atmos</span></div>
          <div class="modal__actions">
            <button class="btn btn--primary" data-focusable data-action="play" data-id="${t.id}">${icon('play')} Play</button>
            <button class="btn" data-focusable data-action="toggle-watch" data-id="${t.id}">${icon(saved ? 'check' : 'plus')} ${saved ? 'In Watchlist' : 'Add to Watchlist'}</button>
            <button class="btn btn--icon" data-focusable data-action="trailer" data-id="${t.id}" aria-label="Play trailer">${icon('volume')}</button>
          </div>
        </div>
      </div>
      <div class="modal__body">
        <p class="modal__desc">${esc(t.desc)}</p>
        <div class="pill-row">${t.genres.map(g => `<span class="pill">${g}</span>`).join('')}${t.cast.map(c => `<span class="pill">${c}</span>`).join('')}</div>
        <div class="eps-head"><h3>Episodes</h3>
          <select class="select" id="seasonSelect" aria-label="Select season">
            ${Array.from({ length: t.seasons }, (_, i) => `<option value="${i + 1}">Season ${i + 1}</option>`).join('')}
          </select>
        </div>
        <div id="epList">${episodesMarkup(t, 1)}</div>
        <div class="eps-head"><h3>More like this</h3></div>
        <div class="grid">${similar.map(x => `<article class="grid__item" data-focusable data-action="detail" data-id="${x.id}" style="background:${grad(x)}">
          ${img(x, 700, 420)}<div class="grid__cap">${esc(x.title)}</div></article>`).join('')}</div>
      </div>
    </div>
  </div>`;
}

function episodesMarkup(t, season) {
  return SAMPLE_EPISODES.map((ep, i) => `<div class="ep" data-focusable data-action="play-episode" data-id="${t.id}" data-ep="${i}" role="button" tabindex="0">
    <span class="ep__no">${ep.no}</span>
    <div class="ep__thumb" style="background:${grad(t)}">${img(t, 400, 240)}</div>
    <div class="ep__info"><div class="ep__name">${ep.name}</div><div class="ep__desc">${ep.desc}</div></div>
    <span class="ep__time">${ep.len} · S${season} E${ep.no}</span>
  </div>`).join('');
}

function settingsMarkup() {
  const s = state.settings;
  const toggle = (key, label, hint) => `<div class="setting-row">
    <div><div class="setting-row__label">${label}</div><div class="setting-row__hint">${hint}</div></div>
    <label class="switch"><input type="checkbox" data-setting="${key}" ${s[key] ? 'checked' : ''}><span></span></label>
  </div>`;
  return `<div class="modal-back" data-action="backdrop-close"><div class="modal" role="dialog" aria-modal="true" aria-label="Settings" style="max-width:560px">
    <button class="modal__close" data-focusable data-action="close-modal" aria-label="Close">${icon('close')}</button>
    <div style="padding:30px">
      <h2 class="section-title" style="font-size:28px">Settings</h2>
      <p class="section-sub">Make the experience yours.</p>
      ${toggle('autoplay', 'Autoplay next episode', 'Start the next episode automatically after the credits.')}
      ${toggle('subtitles', 'Subtitles', 'Show English captions by default in the player.')}
      ${toggle('motion', 'Motion effects', 'Parallax, focus animations and the shelf zoom.')}
      ${toggle('reduceMotion', 'Reduce motion', 'Minimize all animation, including interface transitions.')}
      <div class="setting-row"><div><div class="setting-row__label">Playback quality</div><div class="setting-row__hint">Higher quality uses more data.</div></div>
        <select class="select" data-setting-select="quality">
          ${['HD', '4K', '4K Dolby Vision'].map(q => `<option ${s.quality === q ? 'selected' : ''}>${q}</option>`).join('')}
        </select>
      </div>
    </div>
  </div></div>`;
}

function profilesMarkup() {
  return `<div class="modal-back" data-action="backdrop-close"><div class="modal profile-menu" role="dialog" aria-modal="true" aria-label="Profiles" style="max-width:380px">
    <h3 style="margin:6px 8px 10px;font-size:14px;color:var(--muted);letter-spacing:.08em">WHO'S WATCHING?</h3>
    ${state.profiles.map(p => `<div class="profile-row ${p.id === state.activeProfile ? 'is-on' : ''}" data-focusable data-action="switch-profile" data-id="${p.id}">
      <div class="profile-row__avatar" style="background:${p.color}">${p.initials}</div>
      <div><div class="profile-row__name">${p.name}</div><div class="profile-row__sub">${p.id === state.activeProfile ? 'Current profile' : 'Switch to profile'}</div></div>
    </div>`).join('')}
    <div class="menu-sep"></div>
    <div class="profile-row" data-focusable data-action="add-profile">
      <div class="profile-row__avatar" style="background:#3a3a3c">${icon('plus')}</div>
      <div class="profile-row__name">Add Profile</div>
    </div>
    <div class="profile-row" data-focusable data-action="open-settings">
      <div class="profile-row__avatar" style="background:#3a3a3c">${icon('gear')}</div>
      <div class="profile-row__name">Settings</div>
    </div>
  </div></div>`;
}

function ccMarkup() {
  const tiles = [
    ['wifi', 'Wi-Fi', 'on'], ['bluetooth', 'Bluetooth', 'on'],
    ['moon', 'Dark Mode', 'on'], ['remote', 'Remote', state.remote ? 'on' : '']
  ];
  return `<aside class="cc" role="dialog" aria-label="Control Center">
    <div class="cc__head"><span>CONTROL CENTER</span><button data-action="close-cc" aria-label="Close" style="border:0;background:none;color:var(--muted);cursor:pointer">${icon('close')}</button></div>
    <div class="cc__grid">
      ${tiles.map(([ic, label, on]) => `<button class="cc__tile ${on ? 'is-on' : ''}" data-focusable data-action="cc-tile" data-key="${label}">${icon(ic)}<span>${label}</span></button>`).join('')}
      <div class="cc__slider"><label><span>Brightness</span><span>72%</span></label><input type="range" min="10" max="100" value="72" data-cc-range="brightness" aria-label="Brightness"></div>
      <div class="cc__slider"><label><span>Volume</span><span>45%</span></label><input type="range" min="0" max="100" value="45" data-cc-range="volume" aria-label="Volume"></div>
      <button class="cc__wide" data-focusable data-action="sleep">${icon('power')} Sleep now</button>
      <button class="cc__wide" data-focusable data-action="open-settings">${icon('sliders')} All Settings</button>
    </div>
  </aside>`;
}

function remoteMarkup() {
  return `<div class="remote" aria-label="Siri Remote simulator">
    <div class="remote__head"><span class="remote__name">SIRI REMOTE</span><button class="remote__hide" data-action="toggle-remote" aria-label="Hide remote">×</button></div>
    <div class="remote__pad" data-focusable data-action="remote-click" aria-label="Touchpad — click to select">${icon('remote')}<span>TOUCHPAD</span></div>
    <div class="remote__row">
      <button class="remote__btn remote__btn--siri" data-focusable data-action="voice-search" aria-label="Siri">${icon('siri')}</button>
      <button class="remote__btn" data-focusable data-action="remote-play" aria-label="Play or pause">${icon(state.player && state.player.playing ? 'pause' : 'play')}</button>
      <button class="remote__btn" data-focusable data-action="remote-menu" aria-label="Menu">${icon('back')}</button>
    </div>
    <div class="remote__hint">← ↑ ↓ → navigate · Enter select · Esc menu</div>
  </div>`;
}

function playerMarkup() {
  const p = state.player;
  const t = byId(p.id);
  const cap = ['[ SOUND OF WIND ]', 'You always said the answer was in the details.', 'Then let’s look closer.', '[ MUSIC SWELLS ]'];
  return `<div class="player" role="dialog" aria-modal="true" aria-label="Now playing">
    <video id="video" src="${VIDEO_URL}" playsinline preload="metadata"></video>
    <div class="player__fallback" id="videoFallback" style="display:none;background:radial-gradient(circle at 50% 40%, ${t.color}, #000 70%)">
      <strong>${esc(t.title)}</strong><span>Preview unavailable offline — controls remain active.</span>
    </div>
    <div class="player__top">
      <button class="player__back" data-focusable data-action="close-player" aria-label="Close player">${icon('back')}</button>
      <div><div class="player__title">${esc(t.title)}</div><div class="player__subtitle">Season ${p.season} · Episode ${p.episode + 1} · ${SAMPLE_EPISODES[p.episode]?.name || 'Feature'}</div></div>
    </div>
    <div class="player__center"><div class="player__big" id="bigPlay">${icon('play')}</div></div>
    <div class="player__cc ${p.subtitles ? 'is-on' : ''}" id="ccText">${cap[p.capIndex % cap.length]}</div>
    <div class="player__bottom">
      <div class="player__bar" data-focusable data-action="seek" id="seekBar"><i id="seekFill" style="width:${p.savedPct || 0}%"></i><b id="seekKnob" style="left:${p.savedPct || 0}%"></b></div>
      <div class="player__controls">
        <button data-focusable data-action="player-play" id="playBtn" aria-label="Play">${icon(p.playing ? 'pause' : 'play')}</button>
        <button data-focusable data-action="player-skip" data-skip="-10" aria-label="Back 10 seconds">${icon('back10')}</button>
        <button data-focusable data-action="player-skip" data-skip="10" aria-label="Forward 10 seconds">${icon('fwd10')}</button>
        <button data-focusable data-action="player-mute" id="muteBtn" aria-label="Mute">${icon(p.muted ? 'mute' : 'volume')}</button>
        <span class="player__time" id="timeLabel">0:00 / 0:00</span>
        <div class="player__spacer"></div>
        <button data-focusable data-action="player-next" aria-label="Next episode">${icon('next')}</button>
        <button data-focusable data-action="player-cc" id="ccBtn" aria-label="Subtitles">${icon('cc')}</button>
        <button data-focusable data-action="player-full" aria-label="Fullscreen">${icon('full')}</button>
      </div>
    </div>
  </div>`;
}

function overlayMarkup() {
  let h = '';
  if (state.modal === 'detail') h += detailMarkup();
  if (state.modal === 'settings') h += settingsMarkup();
  if (state.modal === 'profiles') h += profilesMarkup();
  if (state.cc) h += ccMarkup();
  if (state.player) h += playerMarkup();
  if (state.remote) h += remoteMarkup();
  return h;
}

/* --------------------------- Render --------------------------- */

const app = document.getElementById('app');
const overlayRoot = document.getElementById('overlay-root');

function render() {
  app.innerHTML = navMarkup() + `<main class="page" id="page">${pageMarkup()}</main>` + helperMarkup();
  overlayRoot.innerHTML = overlayMarkup();
  document.body.classList.toggle('reduce-motion', !state.settings.motion || state.settings.reduceMotion);
  if (state.player) setupPlayer();
  resetFocus(true);
}

function renderHero() {
  const el = document.getElementById('hero');
  if (el) el.outerHTML = heroMarkup();
  resetFocus(false);
}

function resetFocus(initial) {
  state.focusEl = null;
  document.querySelectorAll('[data-focusable].is-focused').forEach(e => e.classList.remove('is-focused'));
  const target = document.querySelector('[data-autofocus]') ||
    (initial ? document.querySelector('#page [data-focusable]') : null);
  if (target) setFocus(target, false);
}

let heroTimer;
function startHeroTimer() {
  clearInterval(heroTimer);
  if (state.settings.motion) {
    heroTimer = setInterval(() => {
      if (state.page === 'home' && !state.modal && !state.player && !state.cc) {
        state.heroIndex = (state.heroIndex + 1) % featured.length;
        renderHero();
      }
    }, 9000);
  }
}

/* --------------------------- Actions --------------------------- */

function goPage(page) {
  state.page = page;
  state.modal = null;
  state.cc = false;
  window.scrollTo({ top: 0, behavior: 'auto' });
  render();
}

function openDetail(id) {
  state.detailId = id;
  state.modal = 'detail';
  render();
}

function closeModal() {
  state.modal = null;
  render();
}

function toggleWatch(id) {
  const list = watchlist();
  const i = list.indexOf(id);
  if (i >= 0) { list.splice(i, 1); toast('Removed from Watchlist'); }
  else { list.push(id); toast('Added to Watchlist'); }
  persist();
  render();
}

function openPlayer(id, episode = 0) {
  const t = byId(id);
  if (!t) return;
  state.modal = null;
  state.cc = false;
  state.player = {
    id, episode, season: 1, playing: false, muted: false,
    subtitles: state.settings.subtitles, capIndex: 0, savedPct: progress()[id] || 0
  };
  render();
}

function closePlayer() {
  if (state.player) {
    const v = document.getElementById('video');
    if (v && v.duration && !isNaN(v.currentTime)) {
      progress()[state.player.id] = Math.min(100, (v.currentTime / v.duration) * 100);
      persist();
    }
  }
  state.player = null;
  render();
}

function setupPlayer() {
  const v = document.getElementById('video');
  const p = state.player;
  if (!v || !p) return;
  v.muted = p.muted;
  v.volume = 0.55;
  v.currentTime = 0;
  const savedSeconds = (p.savedPct / 100) * 120;
  const trySeek = () => { try { if (v.duration && isFinite(v.duration)) v.currentTime = (p.savedPct / 100) * v.duration; else v.currentTime = savedSeconds; } catch (_) {} };
  v.addEventListener('loadedmetadata', trySeek, { once: true });
  v.addEventListener('error', () => {
    const fb = document.getElementById('videoFallback');
    if (fb) fb.style.display = 'grid';
  }, { once: true });
  v.addEventListener('timeupdate', () => {
    if (!v.duration || !isFinite(v.duration)) return;
    const pct = (v.currentTime / v.duration) * 100;
    const fill = document.getElementById('seekFill');
    const knob = document.getElementById('seekKnob');
    const time = document.getElementById('timeLabel');
    if (fill) fill.style.width = pct + '%';
    if (knob) knob.style.left = pct + '%';
    if (time) time.textContent = `${fmt(v.currentTime)} / ${fmt(v.duration)}`;
  });
  v.addEventListener('ended', () => {
    if (state.settings.autoplay && p.episode < SAMPLE_EPISODES.length - 1) {
      p.episode += 1;
      toast('Playing next episode');
      render();
    } else {
      p.playing = false;
      updatePlayIcon();
    }
  });
  v.addEventListener('play', () => { p.playing = true; updatePlayIcon(); });
  v.addEventListener('pause', () => { p.playing = false; updatePlayIcon(); });
}

const fmt = s => {
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60), sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, '0')}`;
};

function updatePlayIcon() {
  if (!state.player) return;
  const b = document.getElementById('playBtn');
  const big = document.getElementById('bigPlay');
  const remoteBtn = overlayRoot.querySelector('[data-action="remote-play"]');
  if (b) b.innerHTML = icon(state.player.playing ? 'pause' : 'play');
  if (big) big.innerHTML = icon(state.player.playing ? 'pause' : 'play');
  if (remoteBtn) remoteBtn.innerHTML = icon(state.player.playing ? 'pause' : 'play');
  const bigEl = document.getElementById('bigPlay');
  if (bigEl) bigEl.classList.toggle('is-on', !state.player.playing);
}

function togglePlay() {
  const p = state.player;
  if (!p) return;
  const v = document.getElementById('video');
  if (!v) return;
  if (v.paused) { v.play().catch(() => toast('Press play to start playback')); }
  else v.pause();
}

function seekBy(seconds) {
  const v = document.getElementById('video');
  if (!v) return;
  try { v.currentTime = Math.max(0, Math.min(v.duration || v.currentTime + seconds, v.currentTime + seconds)); } catch (_) {}
}

function handleAction(el, e) {
  const a = el.dataset.action;
  switch (a) {
    case 'page': goPage(el.dataset.page); break;
    case 'focus-search': {
      state.page = 'search'; render();
      const input = document.getElementById('pageSearch');
      if (input) input.focus();
      break;
    }
    case 'detail': openDetail(el.dataset.id); break;
    case 'close-modal': closeModal(); break;
    case 'play': openPlayer(el.dataset.id); break;
    case 'play-episode': openPlayer(el.dataset.id, Number(el.dataset.ep)); break;
    case 'trailer': toast('Trailer preview started'); openPlayer(el.dataset.id); break;
    case 'toggle-watch': toggleWatch(el.dataset.id); break;
    case 'hero-next': state.heroIndex = (state.heroIndex + 1) % featured.length; renderHero(); break;
    case 'hero-prev': state.heroIndex = (state.heroIndex - 1 + featured.length) % featured.length; renderHero(); break;
    case 'hero-dot': state.heroIndex = Number(el.dataset.i); renderHero(); break;
    case 'row-scroll': {
      const row = el.closest('.row');
      const track = row && row.querySelector('.row__track');
      if (track) track.scrollBy({ left: Number(el.dataset.dir) * track.clientWidth * 0.85, behavior: 'smooth' });
      break;
    }
    case 'chip': state.chip = el.dataset.chip; render(); break;
    case 'lib-tab': state.libTab = el.dataset.tab; render(); break;
    case 'voice-search': {
      toast('Listening… try “Sci-Fi”');
      setTimeout(() => {
        state.page = 'search'; state.query = 'Sci-Fi'; state.chip = 'All'; render();
        const i = document.getElementById('pageSearch');
        if (i) i.focus();
        toast('Searching for “Sci-Fi”');
      }, 1000);
      break;
    }
    case 'open-cc': state.cc = !state.cc; render(); break;
    case 'close-cc': state.cc = false; render(); break;
    case 'open-settings': state.modal = 'settings'; state.cc = false; render(); break;
    case 'open-profiles': state.modal = 'profiles'; render(); break;
    case 'switch-profile': state.activeProfile = el.dataset.id; state.modal = null; persist(); render(); toast('Profile switched'); break;
    case 'add-profile': {
      const n = state.profiles.length + 1;
      state.profiles.push({ id: 'p' + Date.now(), name: 'Guest ' + n, initials: 'G', color: '#5e5ce6' });
      state.modal = null; persist(); render(); toast('Profile added');
      break;
    }
    case 'toggle-remote': state.remote = !state.remote; render(); break;
    case 'remote-click': {
      const f = state.focusEl;
      if (f && f !== el) f.click();
      else toast('Use the arrow keys to navigate');
      break;
    }
    case 'remote-play': if (state.player) togglePlay(); else openPlayer(featured[state.heroIndex].id); break;
    case 'remote-menu': if (state.player) closePlayer(); else if (state.modal) closeModal(); else if (state.cc) { state.cc = false; render(); } else goPage('home'); break;
    case 'cc-tile': {
      const key = el.dataset.key;
      el.classList.toggle('is-on');
      if (key === 'Remote') { state.remote = el.classList.contains('is-on'); render(); }
      else toast(key + (el.classList.contains('is-on') ? ' on' : ' off'));
      break;
    }
    case 'sleep': state.player = null; state.modal = null; goPage('home'); toast('Apple TV is sleeping'); break;
    case 'close-player': closePlayer(); break;
    case 'player-play': togglePlay(); break;
    case 'player-skip': seekBy(Number(el.dataset.skip)); break;
    case 'player-mute': {
      state.player.muted = !state.player.muted;
      const v = document.getElementById('video'); if (v) v.muted = state.player.muted;
      const b = document.getElementById('muteBtn'); if (b) b.innerHTML = icon(state.player.muted ? 'mute' : 'volume');
      break;
    }
    case 'player-cc': {
      state.player.subtitles = !state.player.subtitles;
      const c = document.getElementById('ccText'); if (c) c.classList.toggle('is-on', state.player.subtitles);
      break;
    }
    case 'player-full': {
      const v = document.getElementById('video');
      if (v && v.requestFullscreen) v.requestFullscreen().catch(() => toast('Fullscreen unavailable'));
      break;
    }
    case 'player-next': {
      if (state.player.episode < SAMPLE_EPISODES.length - 1) { state.player.episode++; render(); toast('Next episode'); }
      else toast('End of season');
      break;
    }
    case 'seek': {
      const v = document.getElementById('video');
      if (!v || !v.duration) return;
      const r = el.getBoundingClientRect();
      const x = e && typeof e.clientX === 'number' ? e.clientX : r.left;
      v.currentTime = Math.max(0, Math.min(1, (x - r.left) / r.width)) * v.duration;
      break;
    }
    case 'backdrop-close': if (el.classList.contains('modal-back')) closeModal(); break;
    case 'show-help': toast('Arrows: move · Enter: select · Esc: menu · C: Control Center · R: remote · /: search · Space: play/pause'); break;
    default: break;
  }
}

/* --------------------------- Events --------------------------- */

document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  if (el.dataset.action === 'backdrop-close' && e.target !== el) return;
  e.preventDefault();
  handleAction(el, e);
});

document.addEventListener('input', e => {
  if (e.target.id === 'navSearch' || e.target.id === 'pageSearch') {
    state.query = e.target.value;
    const other = document.getElementById(e.target.id === 'navSearch' ? 'pageSearch' : 'navSearch');
    if (other) other.value = state.query;
    if (state.page !== 'search') {
      state.page = 'search';
      const page = document.getElementById('page');
      if (page) page.innerHTML = searchMarkup();
      document.querySelectorAll('.nav__link').forEach(l => l.classList.toggle('is-active', l.dataset.page === 'search'));
    } else {
      const page = document.getElementById('page');
      if (page) {
        const active = document.activeElement;
        const id = active && active.id;
        const pos = active && active.selectionStart;
        page.innerHTML = searchMarkup();
        const next = document.getElementById(id);
        if (next) { next.focus(); try { next.setSelectionRange(pos, pos); } catch (_) {} }
      }
    }
  }
  if (e.target.dataset && e.target.dataset.ccRange) {
    const label = e.target.parentElement.querySelector('span:last-child');
    if (label) label.textContent = e.target.value + '%';
  }
});

document.addEventListener('change', e => {
  if (e.target.dataset.setting) {
    state.settings[e.target.dataset.setting] = e.target.checked;
    persist();
    document.body.classList.toggle('reduce-motion', !state.settings.motion || state.settings.reduceMotion);
    startHeroTimer();
    toast('Setting saved');
  }
  if (e.target.dataset.settingSelect) {
    state.settings[e.target.dataset.settingSelect] = e.target.value;
    persist(); toast('Quality set to ' + e.target.value);
  }
  if (e.target.id === 'seasonSelect') {
    const list = document.getElementById('epList');
    const t = byId(state.detailId);
    if (list && t) list.innerHTML = episodesMarkup(t, Number(e.target.value));
  }
});

/* Spatial focus navigation */
function visibleFocusables() {
  return Array.from(document.querySelectorAll('[data-focusable]'))
    .filter(el => el.getClientRects().length > 0 && getComputedStyle(el).visibility !== 'hidden');
}

function setFocus(el, scroll = true) {
  if (!el) return;
  if (state.focusEl) state.focusEl.classList.remove('is-focused');
  state.focusEl = el;
  el.classList.add('is-focused');
  if (scroll) el.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
}

function moveFocus(dir) {
  const els = visibleFocusables();
  if (!els.length) return;
  if (!state.focusEl || !els.includes(state.focusEl)) { setFocus(els[0]); return; }
  const r = state.focusEl.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  let best = null, bestScore = Infinity;
  for (const el of els) {
    if (el === state.focusEl) continue;
    const b = el.getBoundingClientRect();
    const bx = b.left + b.width / 2, by = b.top + b.height / 2;
    const dx = bx - cx, dy = by - cy;
    const along = dir === 'left' ? -dx : dir === 'right' ? dx : dir === 'up' ? -dy : dy;
    const across = dir === 'left' || dir === 'right' ? Math.abs(dy) : Math.abs(dx);
    if (along <= 4) continue;
    const score = along + across * 2.2 + (dir === 'up' || dir === 'down' ? Math.abs(dx) * 0.35 : 0);
    if (score < bestScore) { bestScore = score; best = el; }
  }
  if (best) setFocus(best);
}

document.addEventListener('keydown', e => {
  const typing = e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT');
  if (e.key === 'Escape') {
    if (state.player) closePlayer();
    else if (state.modal) closeModal();
    else if (state.cc) { state.cc = false; render(); }
    else if (state.page !== 'home') goPage('home');
    e.preventDefault(); return;
  }
  if (typing) {
    if (e.key === 'Enter' && e.target.id === 'pageSearch') {
      state.page = 'search'; render(); e.preventDefault();
    }
    return;
  }
  if (state.player) {
    if (e.key === ' ') { togglePlay(); e.preventDefault(); return; }
    if (e.key === 'ArrowLeft') { seekBy(-10); e.preventDefault(); return; }
    if (e.key === 'ArrowRight') { seekBy(10); e.preventDefault(); return; }
  }
  const dirs = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
  if (dirs[e.key]) { moveFocus(dirs[e.key]); e.preventDefault(); return; }
  if (e.key === 'Enter') { if (state.focusEl) { state.focusEl.click(); e.preventDefault(); } return; }
  if (e.key === ' ' && state.focusEl) { state.focusEl.click(); e.preventDefault(); return; }
  const k = e.key.toLowerCase();
  if (k === 'c') { state.cc = !state.cc; render(); }
  if (k === 'r') { state.remote = !state.remote; render(); }
  if (k === '/') { state.page = 'search'; render(); const i = document.getElementById('pageSearch'); if (i) i.focus(); e.preventDefault(); }
});

/* --------------------------- Init --------------------------- */

render();
startHeroTimer();
setTimeout(() => {
  const boot = document.getElementById('boot');
  if (boot) boot.classList.add('is-done');
}, 900);
