# Apple TV — Web Experience

Yon pwojè wèb fan-made ki rasanble **tout fonksyon prensipal Apple TV** nan yon sèl koòdone: home/Top Shelf, rechèch, bibliyotèk, paj detay, lektè, Siri Remote, ak Control Center. Konsepsyon an swiv detay Apple TV yo: fon nwa, glass translisid, animasyon focus ak spring, Top 10, Continue Watching, ak Aerial-style hero.

> Pa afilye ak Apple Inc. Tout tit, imaj, ak kontni yo se egzanp fiktif. Sa a se yon etid koòdone, pa yon kopi sèvis Apple la.

## Kijan pou kòmanse

Opsyon 1 — ouvri dirèkteman:
```text
appletv-web/index.html
```

Opsyon 2 — sèvè lokal (rekòmande pou localStorage ak tout fonksyon):
```bash
cd appletv-web
python -m http.server 8080
```
Lè sa a, ouvri `http://localhost:8080`.

Pa gen dependency, pa gen build, pa gen API key.

## Fonksyon ki enkli

### Home / Top Shelf (matche paj tv.apple.com)
- Tokens konsepsyon pran sou sit Apple la: background `#1f1f1f`, header nwa 52px ak **Search / Sign In**, font `SF Pro`, shelf title 17px/700, card 16:9 radius 14px
- Bann "epic stage": Get 6 months of Apple TV for $6.99/mo · Accept Offer · Bundle and Save
- Hero ki chanje otomatikman ak 4 tit prensipal (zoom 420ms cubic-bezier, gradient, meta, bouton Play/More Info/Watchlist)
- Navigasyon ak flèch klavye ki swiv pozisyon eleman yo (spatial focus)
- Ranje orizontal: Continue Watching, **Top 10 TV Shows**, **Top 10 Movies**, **Great Movies Now on Apple TV**, Apple TV+ Originals, New Releases, Critically Acclaimed, "Because you watched", Documentaries, Family
- Effè focus: scale, leve, lonbraj blan, tankou tvOS

### Navigasyon
- Home · TV Shows · Movies · Sports · Library
- Rechèch an tan reyèl (tit, deskripsyon, jan, aktè) + chips gwoup
- "Siri" voice search simulation
- Bibliyotèk ak onglets All / TV Shows / Movies

### Detay tit
- Backdrop, match %, rating, ane, sezon, dire, 4K/Dolby Atmos
- Play, Add/Remove Watchlist, Trailer
- Lis epizòd ak chwa sezon
- Cast, genres, ak tit ki sanblab

### Lektè
- Videyo HTML5 ak ba pwogrè, seek, play/pause, -10/+10, mute, subtitles, fullscreen
- Epizòd suivan otomatik (configurable)
- Sove pwogrè pou "Continue Watching" (localStorage)

### Siri Remote (simulateur)
- Touchpad, Siri, Play/Pause, Menu
- Reziste sou ekran an; ka kache/montre

### Control Center
- Wi-Fi, Bluetooth, Dark Mode, Remote toggles
- Brightness/volume sliders, Sleep now, All Settings

### Anviwònman & pwofil
- Autoplay, Subtitles, Motion effects, Reduce motion, Playback quality
- Chanjman pwofil (Alex, Jordan, Kids) + ajoute pwofil
- Tout chwa yo sove nan localStorage

### Klavye
| Touch | Aksyon |
|---|---|
| ← ↑ ↓ → | Deplase focus |
| Enter / Space | Seleksyone |
| Esc | Retounen / fèmen |
| C | Control Center |
| R | Montre/kache remote |
| / | Ale nan rechèch |

## Estrikti
```text
appletv-web/
├── index.html
├── styles.css
└── app.js
```
