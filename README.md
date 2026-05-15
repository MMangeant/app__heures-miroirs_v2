# Heures Miroir — Linogravure

App ésotérique des 24 heures miroir, dans un style linogravure / estampe artisanale.  
Encre noire sur papier crème. Aucun dégradé, aucune ombre lisse, aucun minimalisme contemporain.

## Démarrage rapide

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Ce que fait l'app

- **Roue d'heure** : sélecteur gravé (glisser / molette / flèches) pour choisir une heure miroir de 0:00 à 23:23
- **Bouton "Révéler la Carte"** : retourne la carte correspondante dans la grille
- **Grille 6×4** : 24 cartes dos retourné, chacune avec une imperfection et une rotation uniques
- **Overlay plein écran** : clique sur une carte révélée pour l'agrandir — icône gravée, titre, texte ésotérique
- **Tweaks panel** (bouton ⚙ en bas à droite) :
  - **Papier** : Parchemin / Kraft / Rizière
  - **Lettrage** : Bloc carved / Esquisse / Marker
  - **Dos gravé** : Sigil / Œil / Mandala
  - Tout révéler / Réinitialiser

## Stack technique

| Outil | Rôle |
|---|---|
| React 18 | UI |
| Vite 6 | bundler / dev server |
| Google Fonts | Londrina Solid, Bungee, Caveat, Permanent Marker… |
| SVG inline | icônes + cadres irréguliers |

Aucune dépendance externe hors React.

## Structure du projet

```
src/
  App.jsx              — composant racine + layout iPhone + état global
  LinoCard.jsx         — carte (dos / face / cadre irrégulier)
  LinoHourSelector.jsx — sélecteur d'heure glissant
  LinocutIcons.jsx     — 24 icônes SVG taillées
  hours-data.js        — données des 24 heures miroir
  lino-paths.js        — helpers SVG (chemins irréguliers, seeded)
  main.jsx             — point d'entrée React
  index.css            — reset + Google Fonts + keyframes
public/
  favicon.svg
index.html
vite.config.js
CLAUDE.md              — notes techniques pour Claude Code
design.md              — référence design complète
```

## Scripts

```bash
npm run dev      # dev server (HMR)
npm run build    # build production → dist/
npm run preview  # servir dist/ localement
```

## Décisions de design

**Pas de filtre SVG sur les bords** — l'irrégularité vient de polylignes jittées (`lino-paths.js`), pas de `feDisplacementMap`. Cela garde les bords nets (pas de halo flou) tout en paraissant gravés à la main.

**Pas d'animation 3D** — les filtres SVG cassent `backface-visibility`. Les cartes apparaissent en crossfade + scale, ce qui colle mieux à l'esthétique d'une estampe qui « s'imprime ».

**Grille toujours 6 colonnes** — 24 heures = 6×4, la disposition est fixe.

**Seed déterministe** — chaque carte a sa propre graine pour ses chemins irréguliers ; le rendu est stable entre les renders.
