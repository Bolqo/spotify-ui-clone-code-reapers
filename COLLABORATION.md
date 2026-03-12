# Spotify UI Clone — Code Reapers
## Full Collaboration Plan & Session Notes

---

## Team

| # | Name | GitHub |
|---|------|--------|
| 1 | Irakli Bolkvadze | Bolqo |
| 2 | Luka Qobuladze (until 10.03.2026) | Qristine Mirzoiani (since 11.03.2026)
| 3 | Enrike Bedinadze | - |

**Repo:** https://github.com/Bolqo/spotify-ui-clone-code-reapers
**Figma:** https://www.figma.com/design/jrlUWJdbxTc2bKd5dpRa5r/10X-markup-exam-project---Spotify?node-id=3-2&p=f&t=CvC6PgOWXrEhvujH-0
**Deadline:** March 13, 2026

---

## Pages to Build (16 screens)

| # | Page | Notes |
|---|------|-------|
| 1 | Home | Filter tabs, Made For You, Top Mixes, Favorite Artists |
| 2 | Home + Friends Activity | Same as Home with right friends panel |
| 3 | Search / Discover | Recent searches, Browse all, Discover, Genres |
| 4 | My Library | Grid/list of playlists & albums |
| 5 | Liked Songs | Tracklist view |
| 6 | Track Detail | Song info, lyrics/credits tabs |
| 7 | Album Page | Album header + full tracklist |
| 8 | Playlist Page | Playlist header + tracklist |
| 9 | Artist — Home tab | Hero banner, most played, artist pick |
| 10 | Artist — About tab | Bio, followers, monthly listeners |
| 11 | Artist — Albums tab (grid) | Albums grid view |
| 12 | Artist — Albums tab (list) | Albums list view |
| 13 | Podcast Show Page | Episode list + show info sidebar |
| 14 | Podcast Episode Page | Video/image + description |
| 15 | Discover carousel view 1 | Featured playlist carousel |
| 16 | Discover carousel view 2 | Featured song carousel |

---

## Team Split

### Irakli Bolkvadze
**Pages:** Main structure (all html pages, scss files and assets), Home Page...
**Shared:** Left Sidebar + shared SCSS setup 

**SCSS files:**
```
scss/abstracts/_variables.scss   ← create for whole team
scss/abstracts/_mixins.scss
scss/base/_reset.scss
scss/base/_typography.scss
scss/layout/_sidebar.scss
scss/components/_library-card.scss
scss/pages/_home.scss
scss/pages/_library.scss
scss/pages/_liked-songs.scss
```

**HTML files:** `index.html`, `home.html`,

---

### Qristine Mirzoiani
**Pages:** Library

**SCSS files:**
```
scss/pages/_library.scss
```

**HTML files:** `library.html`
---

### Enrike Bedinadze
**Pages:** Any page 
**Shared:** Bottom Player Bar

**SCSS files:**
```
scss/layout/_player.scss
scss/pages/...
```

**HTML files:** all html pages

---

## Shared main.scss (Irakli sets up)

```scss
// Abstracts
@use 'abstracts/variables';
@use 'abstracts/mixins';

// Base
@use 'base/reset';
@use 'base/typography';

// Layout
@use 'layout/sidebar';
@use 'layout/topnav';
@use 'layout/player';
@use 'layout/friends-panel';

// Components
@use 'components/library-card';
@use 'components/tracklist';
@use 'components/player-controls';
@use 'components/responsive';

// Pages
@use 'pages/home';
@use 'pages/library';
@use 'pages/liked-songs';
@use 'pages/artist';
@use 'pages/album';
@use 'pages/playlist';
@use 'pages/search';
@use 'pages/track';
@use 'pages/podcast';
@use 'pages/discover';
```

---

## Standard Breakpoints

```scss
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
```

---

## Git Branches

| Person | Branch |
|--------|--------|
| Irakli | `irakli-sidebar` |
| Irakli | `irakli-navigation` |
| Irakli | `irakli-home-page` |
| Qristine | `qristqristi-library` |
| Enrike | `feature/enrike-search-podcast-player` |

---

## Git Daily Workflow

```bash
# 1. Switch to YOUR branch
git checkout feature/your-branch-name

# 2. Pull latest from main
git pull origin main

# 3. Do your work...

# 4. Save your changes
git add .
git commit -m "[yourname]: what you did"

# 5. Push your branch
git push origin feature/your-branch-name
```

**Commit message format:** `[name]: description`
Example: `[irakli]: add sidebar navigation HTML`

---

## Pull Request Rules

- Always open a PR when a page/feature is done
- Tag at least 1 teammate to review
- Never merge without review
- Delete branch after merging

---

## Package.json Setup

```json
{
  "name": "spotify-ui-clone-code-reapers",
  "version": "1.0.0",
  "scripts": {
    "sass": "sass --watch src/scss/main.scss:src/css/main.css"
  },
  "devDependencies": {
    "sass": "^1.70.0"
  }
}
```

After cloning, everyone runs:
```bash
npm install
npm run sass
```

---

## GitHub Branch Protection (main)

1. Go to: `https://github.com/Bolqo/spotify-ui-clone-code-reapers/settings/branches`
2. Click **"Add branch ruleset"**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Do not allow bypassing the above settings
5. Save

---

## Project Schedule

| Days | Goal |
|------|------|
| Mar 3-4 | Team call, agree on split, Irakli sets up base + commits to main |
| Mar 5-9 | Everyone builds their pages in parallel on their branches |
| Mar 10-11 | Pull Requests → review → merge into main |
| Mar 12 | Enrike does final responsiveness fixes |
| Mar 13 | Final review + submission |

---

## Ground Rules

1. Never touch files that aren't yours
2. Irakli sets up the base FIRST — push to main before others start
3. Pull from main every morning before coding
4. Commit often with clear messages
5. One feature = one PR

---

## JavaScript

JS is **not mandatory** for the exam. Only add interactivity if the project is fully complete and there is extra time.

---

## Assets

Irakli manages all assets (images, icons, fonts) in `src/assets/`.

---

