import React from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Chaque icône est dessinée comme un illustrateur penserait sa gravure :
// une scène claire, des masses d'encre expressives, des détails de hachures.
// viewBox 0 0 100 100. fill="var(--ink)" par défaut, évidé avec fill="var(--paper)".
// ─────────────────────────────────────────────────────────────────────────────

const ICON_PATHS = {

  // 00:00 — LE SEUIL — vide créateur, flottement, transition
  // Une porte ouverte sur le néant lumineux. Le sol disparaît dans le brouillard.
  0: (
    <g>
      {/* Cadre de porte massif gauche */}
      <path d="M14 92 L14 28 C14 24 16 22 20 22 L24 22 L24 88 L20 88 Z" />
      {/* Cadre droit */}
      <path d="M86 92 L86 28 C86 24 84 22 80 22 L76 22 L76 88 L80 88 Z" />
      {/* Linteau du haut */}
      <path d="M12 22 L88 22 L88 14 C88 12 86 10 84 10 L16 10 C14 10 12 12 12 14 Z" />
      {/* Hachures sur le montant gauche */}
      <path d="M16 30 L22 30 M16 36 L22 36 M16 42 L22 42 M16 48 L22 48 M16 54 L22 54 M16 60 L22 60 M16 66 L22 66 M16 72 L22 72 M16 78 L22 78 M16 84 L22 84"
        stroke="var(--paper)" strokeWidth="1" fill="none" />
      {/* Hachures montant droit */}
      <path d="M78 30 L84 30 M78 36 L84 36 M78 42 L84 42 M78 48 L84 48 M78 54 L84 54 M78 60 L84 60 M78 66 L84 66 M78 72 L84 72 M78 78 L84 78 M78 84 L84 84"
        stroke="var(--paper)" strokeWidth="1" fill="none" />
      {/* Espace intérieur lumineux — le néant */}
      <path d="M24 88 L24 22 L76 22 L76 88 Z" fill="var(--paper)" />
      {/* Brume qui monte du sol — vagues douces */}
      <path d="M24 88 Q30 80 38 84 Q44 76 50 80 Q56 72 62 78 Q68 74 76 80 L76 88 Z" />
      <path d="M24 88 Q32 84 40 88 Q48 82 56 86 Q64 80 76 86 L76 88 Z" fill="var(--paper)" />
      {/* Horizon flottant — ligne qui disparaît */}
      <path d="M26 64 Q38 60 50 62 Q62 58 74 62" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Point de lumière au centre — potentiel pur */}
      <path d="M50 44 C48 42 46 44 48 46 C50 48 52 46 50 44 Z" />
      <path d="M50 40 L50 36 M50 52 L50 56 M44 44 L40 44 M56 44 L60 44 M46 40 L43 37 M54 48 L57 51 M46 48 L43 51 M54 40 L57 37"
        stroke="var(--ink)" strokeWidth="1" fill="none" />
      {/* Sol qui s'efface */}
      <path d="M10 92 L90 92 L90 96 Q70 94 50 96 Q30 98 10 96 Z" />
    </g>
  ),

  // 01:01 — L'ÉTINCELLE — volonté, initier, agir
  // Un poing fermé s'ouvre, une flamme jaillit vers le haut.
  // Fond noir, lumière explosive.
  1: (
    <g>
      {/* Fond sombre — nuit avant l'acte */}
      <path d="M0 0 L100 0 L100 100 L0 100 Z" />
      {/* Rayons explosifs depuis la flamme — gravure serrée */}
      <path d="M50 35 L52 8 M50 35 L62 10 M50 35 L72 18 M50 35 L78 30 M50 35 L80 45 M50 35 L76 60 M50 35 L38 10 M50 35 L28 18 M50 35 L22 30 M50 35 L20 45 M50 35 L24 60"
        stroke="var(--paper)" strokeWidth="1.2" fill="none" />
      {/* Flamme principale — grande, organique */}
      <path d="M50 12 C46 18 38 26 36 36 C34 44 38 52 42 56 C44 58 46 60 46 64 C47 58 48 54 50 50 C52 54 53 58 54 64 C54 60 56 58 58 56 C62 52 66 44 64 36 C62 26 54 18 50 12 Z" fill="var(--paper)" />
      {/* Cœur de la flamme — sombre et dense */}
      <path d="M50 28 C48 32 44 38 45 44 C46 48 50 52 50 56 C50 52 54 48 55 44 C56 38 52 32 50 28 Z" />
      {/* Volute gauche de la flamme */}
      <path d="M42 42 C38 36 36 28 40 22 C42 26 42 34 44 40 Z" fill="var(--paper)" />
      {/* Volute droite */}
      <path d="M58 42 C62 36 64 28 60 22 C58 26 58 34 56 40 Z" fill="var(--paper)" />
      {/* Main/poing en bas — la volonté */}
      <path d="M32 96 C32 88 36 80 42 76 L44 74 C44 78 44 82 46 84 L46 76 C46 72 48 70 50 70 C52 70 54 72 54 76 L54 84 C56 82 56 78 56 74 L58 76 C64 80 68 88 68 96 Z" fill="var(--paper)" />
      {/* Hachures sur le poing */}
      <path d="M36 90 L38 84 M42 92 L44 86 M50 92 L50 86 M56 92 L58 86 M62 90 L60 84"
        stroke="var(--ink)" strokeWidth="1" fill="none" />
      {/* Étincelles qui partent */}
      <path d="M38 32 L34 26 L36 24 L40 30 Z" fill="var(--paper)" />
      <path d="M62 32 L66 26 L64 24 L60 30 Z" fill="var(--paper)" />
      <path d="M30 50 L24 48 L24 46 L30 48 Z" fill="var(--paper)" />
      <path d="M70 50 L76 48 L76 46 L70 48 Z" fill="var(--paper)" />
    </g>
  ),

  // 02:02 — LA DUALITÉ — miroir, relation, tensions à équilibrer
  // Deux mains se tendent de chaque côté d'un miroir brisé.
  // Gauche sombre / droite lumineuse — le même geste, deux mondes.
  2: (
    <g>
      {/* Moitié gauche — sombre */}
      <path d="M0 0 L50 0 L50 100 L0 100 Z" />
      {/* Main gauche — claire sur fond sombre */}
      <path d="M8 60 C8 52 12 46 18 44 L20 44 C20 48 20 52 22 54 L22 46 C22 42 24 40 26 40 C28 40 30 42 30 46 L30 54 C32 52 32 48 32 44 L34 46 C38 50 42 58 42 68 L38 72 C36 70 32 68 26 68 C20 68 14 70 12 72 Z" fill="var(--paper)" />
      {/* Hachures main gauche */}
      <path d="M12 62 L14 56 M18 64 L20 58 M24 64 L26 60 M30 64 L32 58 M36 66 L38 60"
        stroke="var(--ink)" strokeWidth="0.8" fill="none" />
      {/* Moitié droite — claire */}
      {/* Main droite — sombre sur fond clair */}
      <path d="M92 60 C92 52 88 46 82 44 L80 44 C80 48 80 52 78 54 L78 46 C78 42 76 40 74 40 C72 40 70 42 70 46 L70 54 C68 52 68 48 68 44 L66 46 C62 50 58 58 58 68 L62 72 C64 70 68 68 74 68 C80 68 86 70 88 72 Z" />
      {/* Hachures main droite */}
      <path d="M88 62 L86 56 M82 64 L80 58 M76 64 L74 60 M70 64 L68 58 M64 66 L62 60"
        stroke="var(--paper)" strokeWidth="0.8" fill="none" />
      {/* Ligne miroir centrale — brisée, irrégulière */}
      <path d="M50 0 L48 14 L52 22 L47 34 L53 44 L48 56 L52 66 L47 78 L50 92 L50 100"
        stroke="var(--ink)" strokeWidth="3" fill="none" />
      {/* Espace entre les mains — tension */}
      <path d="M42 56 Q50 50 58 56" stroke="var(--ink)" strokeWidth="2" fill="none" />
      <path d="M42 60 Q50 54 58 60" stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.5" />
    </g>
  ),

  // 03:03 — LE TRIANGLE — expression, cri, créativité qui sort
  // Une silhouette penchée en arrière, bouche ouverte, les mots
  // s'échappent comme des oiseaux vers le ciel.
  3: (
    <g>
      {/* Ciel — fond de texture légère */}
      <path d="M0 0 L100 0 L100 60 Q85 55 70 58 Q55 52 40 56 Q25 50 10 54 L0 52 Z" />
      {/* Oiseaux/mots qui s'échappent */}
      <path d="M30 38 C28 34 24 32 22 34 C24 32 30 30 32 34 Z" fill="var(--paper)" />
      <path d="M46 28 C44 24 40 22 38 24 C40 22 46 20 48 24 Z" fill="var(--paper)" />
      <path d="M60 18 C58 14 54 12 52 14 C54 12 60 10 62 14 Z" fill="var(--paper)" />
      <path d="M74 10 C72 6 68 4 66 6 C68 4 74 2 76 6 Z" fill="var(--paper)" />
      <path d="M38 44 C36 40 32 38 30 40 C32 38 38 36 40 40 Z" fill="var(--paper)" />
      {/* Sol sombre */}
      <path d="M0 72 L100 72 L100 100 L0 100 Z" />
      {/* Silhouette — corps penché en arrière, bouche ouverte */}
      {/* Tronc penché */}
      <path d="M35 90 C36 82 40 74 46 68 C50 64 56 62 60 58 C56 64 54 70 54 76 L56 76 C58 70 62 64 66 60 L68 64 C64 70 62 78 62 86 L58 90 Z" />
      {/* Tête rejetée en arrière */}
      <path d="M60 58 C62 52 66 48 70 48 C74 48 78 52 78 58 C78 62 76 66 72 68 C68 70 64 68 62 64 Z" />
      {/* Bouche ouverte évidée */}
      <path d="M64 60 C66 56 70 55 73 57 C72 62 68 64 65 62 Z" fill="var(--paper)" />
      {/* Bras levé */}
      <path d="M42 74 C38 68 34 60 30 54 C28 50 28 46 30 44 C32 48 34 54 38 60 Z" />
      {/* Jambes */}
      <path d="M42 90 C40 94 36 98 34 100 L38 100 C40 96 44 92 46 90 Z" />
      <path d="M58 90 C60 94 64 98 66 100 L62 100 C60 96 56 92 54 90 Z" />
    </g>
  ),

  // 04:04 — LA PIERRE — fondations, ancrage, stabilité
  // Des mains posées sur un rocher massif. Le rocher est immense,
  // gravé de strates, il domine tout. Solidité absolue.
  4: (
    <g>
      {/* Grand rocher central — masse principale */}
      <path d="M10 96 C10 80 8 68 14 56 C18 48 28 42 38 38 C44 36 50 36 56 38 C66 42 76 50 82 60 C88 70 90 82 90 96 Z" />
      {/* Face du rocher évidée — strates */}
      <path d="M18 94 C18 80 16 70 20 60 C24 52 32 48 42 46 C48 44 52 44 58 46 C68 50 76 58 80 68 C84 78 84 88 84 94 Z" fill="var(--paper)" />
      {/* Strate 1 */}
      <path d="M20 68 C28 64 40 62 50 64 C60 66 72 70 80 76"
        stroke="var(--ink)" strokeWidth="2" fill="none" />
      {/* Strate 2 */}
      <path d="M18 78 C26 74 38 72 50 74 C62 76 74 80 84 86"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Strate 3 */}
      <path d="M18 86 C28 83 40 82 52 84 C64 86 76 88 84 92"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Fissures naturelles */}
      <path d="M40 46 C38 56 42 66 40 76 C38 82 36 88 38 94"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <path d="M62 48 C64 58 60 70 62 80 C64 86 66 90 64 96"
        stroke="var(--ink)" strokeWidth="1.2" fill="none" />
      {/* Hachures de texture rocheuse */}
      <path d="M22 58 L28 62 M30 52 L36 56 M36 50 L42 54 M50 48 L56 52 M60 52 L66 56 M68 56 L74 62 M24 70 L30 68 M36 66 L44 64 M54 66 L62 64 M70 68 L78 70"
        stroke="var(--ink)" strokeWidth="1" fill="none" />
      {/* Sommet du rocher — pointe sombre */}
      <path d="M36 38 C40 28 46 22 50 18 C54 22 60 28 64 38 Z" />
      {/* Hachures sommet */}
      <path d="M44 24 L46 32 M50 20 L50 30 M56 24 L54 32"
        stroke="var(--paper)" strokeWidth="1" fill="none" />
      {/* Deux mains posées en bas sur le rocher */}
      <path d="M14 94 C14 88 18 84 22 84 C24 84 26 86 26 88 C28 86 30 84 32 86 C34 88 32 92 30 94 Z" fill="var(--paper)" />
      <path d="M86 94 C86 88 82 84 78 84 C76 84 74 86 74 88 C72 86 70 84 68 86 C66 88 68 92 70 94 Z" fill="var(--paper)" />
    </g>
  ),

  // 05:05 — L'ÉTOILE CACHÉE — chaos, transformation, imprévu
  // Tempête tourbillonnante. Au cœur du chaos, une étoile à peine visible.
  // Lignes de vent qui tourbillonnent, nuages expressifs.
  5: (
    <g>
      {/* Fond sombre tempête */}
      <path d="M0 0 L100 0 L100 100 L0 100 Z" />
      {/* Grand tourbillon principal — spirale de vent */}
      <path d="M50 50 C50 50 72 44 78 30 C84 16 74 4 62 8 C50 12 42 24 44 36 C46 48 56 54 66 50 C76 46 82 36 78 26 C74 16 64 12 56 16 C48 20 44 30 48 40 C52 50 62 52 68 46 C74 40 74 32 70 26 C66 20 58 18 54 24 C50 30 52 38 58 42 C64 46 70 42 70 36 C70 30 64 26 58 30 C54 34 56 42 60 42"
        stroke="var(--paper)" strokeWidth="1.8" fill="none" />
      {/* Deuxième spirale décalée */}
      <path d="M50 50 C30 56 16 70 22 82 C28 94 44 96 54 88 C64 80 66 66 58 58 C50 50 38 50 32 58 C26 66 30 78 40 82 C50 86 60 80 62 70 C64 60 56 52 48 56 C40 60 38 70 44 76 C50 82 60 78 62 68"
        stroke="var(--paper)" strokeWidth="1.4" fill="none" opacity="0.7" />
      {/* Nuages en rouleaux expressifs — haut gauche */}
      <path d="M2 14 C4 8 10 6 14 10 C16 6 22 4 26 8 C28 4 34 4 36 8 C38 4 44 6 42 12 C40 16 34 14 30 10 C28 14 22 16 18 12 C16 16 10 18 6 14 Z" />
      <path d="M6 12 C8 8 12 8 14 10 C16 8 20 6 22 8 C24 6 28 6 28 10 C26 12 22 12 20 10 C18 12 14 14 10 12 Z" fill="var(--paper)" opacity="0.4" />
      {/* Nuages haut droite */}
      <path d="M58 8 C60 2 66 0 70 4 C72 0 78 0 80 4 C82 0 88 2 86 8 C84 12 78 10 74 6 C72 10 66 12 62 8 Z" />
      <path d="M62 6 C64 2 68 2 70 4 C72 2 76 2 76 6 C74 8 70 8 68 6 C66 8 62 10 62 6 Z" fill="var(--paper)" opacity="0.4" />
      {/* Étoile cachée — entrevue à travers la tempête, centre-haut */}
      <path d="M50 22 L51.8 28 L58 28 L52.9 32 L55 38 L50 34 L45 38 L47.1 32 L42 28 L48.2 28 Z" fill="var(--paper)" />
      {/* Halo diffus de l'étoile */}
      <path d="M50 16 Q54 19 58 16 M50 16 Q46 19 42 16" stroke="var(--paper)" strokeWidth="0.8" fill="none" opacity="0.5" />
    </g>
  ),

  // 06:06 — L'HEXAGRAMME — harmonie, guérison, amour
  // Un cœur rayonnant entouré de pétales. La lumière irradie.
  // Style mandala gravé — symétrie et chaleur.
  6: (
    <g>
      {/* Rayons de lumière bienveillante depuis le centre */}
      <path d="M50 50 L50 6 M50 50 L64 8 M50 50 L76 18 M50 50 L86 30 M50 50 L92 44 M50 50 L92 56 M50 50 L86 70 M50 50 L76 82 M50 50 L64 92 M50 50 L50 94 M50 50 L36 92 M50 50 L24 82 M50 50 L14 70 M50 50 L8 56 M50 50 L8 44 M50 50 L14 30 M50 50 L24 18 M50 50 L36 8"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Couronne de 6 pétales */}
      <path d="M50 18 C46 22 42 30 44 38 C46 44 50 46 50 46 C50 46 54 44 56 38 C58 30 54 22 50 18 Z" />
      <path d="M50 18 C46 22 42 30 44 38 C46 44 50 46 50 46 C50 46 54 44 56 38 C58 30 54 22 50 18 Z" fill="var(--paper)" transform="rotate(60 50 50)" />
      <path d="M50 18 C46 22 42 30 44 38 C46 44 50 46 50 46 C50 46 54 44 56 38 C58 30 54 22 50 18 Z" transform="rotate(60 50 50)" />
      <path d="M50 18 C46 22 42 30 44 38 C46 44 50 46 50 46 C50 46 54 44 56 38 C58 30 54 22 50 18 Z" fill="var(--paper)" transform="rotate(120 50 50)" />
      <path d="M50 18 C46 22 42 30 44 38 C46 44 50 46 50 46 C50 46 54 44 56 38 C58 30 54 22 50 18 Z" transform="rotate(120 50 50)" />
      <path d="M50 18 C46 22 42 30 44 38 C46 44 50 46 50 46 C50 46 54 44 56 38 C58 30 54 22 50 18 Z" fill="var(--paper)" transform="rotate(180 50 50)" />
      {/* Cœur central */}
      <path d="M50 58 C46 52 38 50 38 56 C38 62 44 66 50 72 C56 66 62 62 62 56 C62 50 54 52 50 58 Z" />
      {/* Reflet évidé dans le cœur */}
      <path d="M46 56 C44 54 42 56 44 58 C46 56 46 54 46 56 Z" fill="var(--paper)" />
      {/* Cercle central évidé autour du cœur */}
      <path d="M50 40 C40 40 32 48 32 58 C32 68 40 76 50 76 C60 76 68 68 68 58 C68 48 60 40 50 40 Z" fill="none" stroke="var(--ink)" strokeWidth="1" />
    </g>
  ),

  // 07:07 — LES SEPT VOIES — méditation, solitude choisie, quête intérieure
  // Figure assise, yeux fermés. Autour d'elle, 7 chemins partent
  // comme des rivières dans un paysage intérieur. Profondeur et paix.
  7: (
    <g>
      {/* Paysage de fond — collines sombres */}
      <path d="M0 100 L0 62 C10 58 20 60 30 56 C38 52 44 48 50 50 C56 52 62 50 72 48 C80 46 90 50 100 48 L100 100 Z" />
      {/* 7 chemins/rivières qui rayonnent vers les bords */}
      <path d="M50 62 C44 56 36 48 24 38 C18 32 10 28 4 22" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M50 62 C46 54 42 44 38 32 C34 22 32 12 30 4" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M50 62 C50 52 50 40 50 28 C50 18 50 10 50 4" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M50 62 C54 54 58 44 62 32 C66 22 68 12 70 4" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M50 62 C56 56 64 48 76 38 C82 32 90 28 96 22" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M50 62 C42 58 30 54 18 52 C10 50 4 50 0 50" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M50 62 C58 58 70 54 82 52 C90 50 96 50 100 50" stroke="var(--paper)" strokeWidth="2" fill="none" />
      {/* Figure méditante — silhouette assise */}
      {/* Corps en lotus */}
      <path d="M38 78 C38 68 42 64 50 62 C58 64 62 68 62 78 C62 84 58 88 50 90 C42 88 38 84 38 78 Z" fill="var(--paper)" />
      {/* Hachures corps */}
      <path d="M42 70 L42 86 M46 68 L46 88 M50 66 L50 88 M54 68 L54 88 M58 70 L58 86"
        stroke="var(--ink)" strokeWidth="0.8" fill="none" />
      {/* Tête */}
      <path d="M44 62 C44 56 48 52 50 52 C52 52 56 56 56 62 C56 66 54 68 50 68 C46 68 44 66 44 62 Z" />
      {/* Visage évidé — paix */}
      <path d="M46 60 C46 56 50 54 50 58 Z" fill="var(--paper)" />
      {/* Mains en mudra */}
      <path d="M38 80 C34 82 30 84 28 82 C30 78 34 76 38 78 Z" />
      <path d="M62 80 C66 82 70 84 72 82 C70 78 66 76 62 78 Z" />
      {/* Halo lumineux au-dessus de la tête */}
      <path d="M44 52 Q50 44 56 52" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <path d="M42 50 Q50 40 58 50" stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M40 48 Q50 36 60 48" stroke="var(--ink)" strokeWidth="0.8" fill="none" opacity="0.4" />
    </g>
  ),

  // 08:08 — L'INFINI — maîtrise, abondance, ouroboros du pouvoir
  // Serpent Ouroboros — il se mord la queue formant un 8.
  // À l'intérieur : balance et clé — contrôle et richesse.
  8: (
    <g>
      {/* Corps du serpent — tracé comme une gravure */}
      {/* Boucle supérieure gauche */}
      <path d="M50 50 C50 50 30 48 22 38 C14 28 18 14 28 10 C38 6 50 14 54 24 C58 34 50 46 42 44 C34 42 28 34 32 26 C36 18 46 16 52 20 C58 24 58 34 54 38 C50 42 44 40 42 36 C40 32 44 26 48 28"
        stroke="var(--ink)" strokeWidth="10" fill="none" />
      {/* Boucle inférieure droite */}
      <path d="M50 50 C50 50 70 52 78 62 C86 72 82 86 72 90 C62 94 50 86 46 76 C42 66 50 54 58 56 C66 58 72 66 68 74 C64 82 54 84 48 80 C42 76 42 66 46 62 C50 58 56 60 58 64 C60 68 56 74 52 72"
        stroke="var(--ink)" strokeWidth="10" fill="none" />
      {/* Intérieur évidé — les deux boucles */}
      <path d="M50 50 C50 50 30 48 22 38 C14 28 18 14 28 10 C38 6 50 14 54 24 C58 34 50 46 42 44 C34 42 28 34 32 26 C36 18 46 16 52 20 C58 24 58 34 54 38 C50 42 44 40 42 36 C40 32 44 26 48 28"
        stroke="var(--paper)" strokeWidth="6" fill="none" />
      <path d="M50 50 C50 50 70 52 78 62 C86 72 82 86 72 90 C62 94 50 86 46 76 C42 66 50 54 58 56 C66 58 72 66 68 74 C64 82 54 84 48 80 C42 76 42 66 46 62 C50 58 56 60 58 64 C60 68 56 74 52 72"
        stroke="var(--paper)" strokeWidth="6" fill="none" />
      {/* Écailles — traits perpendiculaires sur le corps */}
      <path d="M24 32 L28 28 M22 22 L26 18 M32 12 L36 8 M44 8 L48 6 M56 10 L58 6 M58 22 L62 20 M58 34 L62 32 M52 44 L54 48"
        stroke="var(--paper)" strokeWidth="1.5" fill="none" />
      <path d="M76 68 L72 72 M78 78 L74 82 M68 88 L64 92 M56 92 L52 94 M44 90 L42 94 M42 78 L38 80 M42 66 L38 64 M48 56 L46 52"
        stroke="var(--paper)" strokeWidth="1.5" fill="none" />
      {/* Tête du serpent — entre les deux boucles, en bas-droite */}
      <path d="M52 72 C56 74 62 72 64 68 C66 64 62 60 58 62 C56 64 56 68 58 70 C60 72 64 70 64 68"
        stroke="var(--ink)" strokeWidth="3" fill="none" />
      {/* Œil */}
      <path d="M60 64 C60 63 62 63 62 64 C62 65 60 65 60 64 Z" fill="var(--paper)" />
      {/* Langue fourchue */}
      <path d="M64 68 L68 66 L70 64 M68 66 L70 68" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
    </g>
  ),

  // 09:09 — L'ACHÈVEMENT — fin de cycle, lâcher-prise, adieu
  // Une rose qui perd ses pétales dans le vent. Certains pétales tombent,
  // d'autres volent. La tige reste droite. Beauté de la fin.
  9: (
    <g>
      {/* Vent — lignes courbes qui traversent */}
      <path d="M0 30 C20 24 40 28 60 22 C76 18 88 22 100 18" stroke="var(--ink)" strokeWidth="2" fill="none" />
      <path d="M0 40 C16 34 32 38 52 32 C68 28 84 32 100 28" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      <path d="M0 50 C18 46 36 50 56 44 C72 40 88 44 100 40" stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.7" />
      {/* Tige de la rose */}
      <path d="M50 96 C50 80 48 64 50 48 C50 42 52 38 54 34"
        stroke="var(--ink)" strokeWidth="3" fill="none" />
      {/* Épines */}
      <path d="M50 80 L44 76 M50 68 L56 64 M50 56 L44 52"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Feuille gauche */}
      <path d="M48 72 C40 68 34 62 36 56 C40 60 44 66 48 70 Z" />
      {/* Feuille droite */}
      <path d="M52 60 C60 56 66 50 64 44 C60 48 56 54 52 58 Z" />
      {/* Rose centrale — ce qui reste */}
      <path d="M54 34 C52 26 50 20 50 16 C50 20 48 26 46 34 C44 40 44 46 50 48 C56 46 56 40 54 34 Z" />
      <path d="M54 34 C58 30 62 28 62 24 C58 26 54 30 52 36 Z" />
      <path d="M46 34 C42 30 38 28 38 24 C42 26 46 30 48 36 Z" />
      {/* Pétales qui tombent — en chute, épars */}
      <path d="M26 42 C24 38 26 34 30 36 C32 40 30 44 26 42 Z" transform="rotate(-30 28 40)" />
      <path d="M72 26 C70 22 72 18 76 20 C78 24 76 28 72 26 Z" transform="rotate(20 74 24)" />
      <path d="M16 58 C14 54 16 50 20 52 C22 56 20 60 16 58 Z" transform="rotate(45 18 56)" />
      <path d="M82 44 C80 40 82 36 86 38 C88 42 86 46 82 44 Z" transform="rotate(-15 84 42)" />
      <path d="M36 22 C34 18 36 14 40 16 C42 20 40 24 36 22 Z" transform="rotate(60 38 20)" />
      {/* Sol */}
      <path d="M0 96 Q20 92 50 96 Q80 100 100 96 L100 100 L0 100 Z" />
    </g>
  ),

  // 10:10 — LA ROUE — nouveau cycle, recommencer, opportunité
  // Grande roue cosmique avec symboles — soleil, lune, étoile sur les rayons.
  // Elle tourne, les figures changent de position. Destin en mouvement.
  10: (
    <g>
      {/* Jante extérieure épaisse */}
      <path d="M50 8 C72 8 88 24 92 46 C96 68 82 88 60 94 C38 100 18 88 10 66 C2 44 14 22 36 12 C40 10 44 8 50 8 Z" />
      <path d="M50 14 C70 14 84 28 88 48 C92 68 80 84 60 90 C40 96 22 86 14 66 C6 46 16 28 36 18 C40 16 44 14 50 14 Z" fill="var(--paper)" />
      {/* 8 rayons */}
      <path d="M50 14 L50 86 M14 50 L86 50 M22 22 L78 78 M78 22 L22 78"
        stroke="var(--ink)" strokeWidth="3" fill="none" />
      {/* Hub central */}
      <path d="M50 50 C44 50 40 46 40 40 C40 34 44 30 50 30 C56 30 60 34 60 40 C60 46 56 50 50 50 Z" />
      <path d="M50 50 C44 50 40 46 40 40 C40 34 44 30 50 30 C56 30 60 34 60 40 C60 46 56 50 50 50 Z" fill="var(--paper)" />
      <path d="M50 46 C46 46 44 44 44 40 C44 36 46 34 50 34 C54 34 56 36 56 40 C56 44 54 46 50 46 Z" />
      {/* Symboles sur la jante — gravés dans la roue */}
      {/* Soleil en haut */}
      <path d="M50 18 L51.5 22 L55 22 L52 24 L53.5 28 L50 26 L46.5 28 L48 24 L45 22 L48.5 22 Z" fill="var(--paper)" />
      {/* Lune en bas */}
      <path d="M55 82 C53 80 53 76 55 74 C51 74 47 78 47 82 C47 86 51 88 55 88 C59 88 62 85 62 82 C60 84 57 84 55 82 Z" fill="var(--paper)" />
      {/* Étoile à droite */}
      <path d="M80 47 L81 50 L84 50 L81.5 52 L82.5 55 L80 53 L77.5 55 L78.5 52 L76 50 L79 50 Z" fill="var(--paper)" />
      {/* Spirale à gauche */}
      <path d="M20 50 C20 44 24 40 28 42 C32 44 32 50 28 52 C24 54 22 50 24 48 C26 46 28 48 28 50"
        stroke="var(--paper)" strokeWidth="1.5" fill="none" />
      {/* Graduations sur la jante */}
      <path d="M50 8 L50 14 M50 86 L50 92 M8 50 L14 50 M86 50 L92 50"
        stroke="var(--ink)" strokeWidth="4" fill="none" />
    </g>
  ),

  // 11:11 — LE PORTAIL — éveil, alignement, vision
  // Portail de lumière dans une forêt ancienne la nuit.
  // Les arbres millénaires s'inclinent, les rayons explosent du centre.
  11: (
    <g>
      {/* Nuit sombre — fond total */}
      <path d="M0 0 L100 0 L100 100 L0 100 Z" />
      {/* Grands arbres à gauche — troncs expressifs */}
      <path d="M0 100 C2 80 4 60 6 40 C8 24 12 16 16 8 C16 24 16 44 18 62 C20 76 22 88 22 100 Z" fill="var(--paper)" />
      <path d="M4 100 C6 80 8 60 10 40 C12 24 16 16 20 8 C20 24 20 44 20 62 C20 76 20 88 20 100 Z" />
      {/* Arbre gauche 2 */}
      <path d="M0 100 C4 78 8 56 14 36 C18 20 24 10 28 2 C28 20 26 40 26 60 C26 78 24 90 22 100 Z" fill="var(--paper)" />
      {/* Grands arbres à droite */}
      <path d="M100 100 C98 80 96 60 94 40 C92 24 88 16 84 8 C84 24 84 44 82 62 C80 76 78 88 78 100 Z" fill="var(--paper)" />
      <path d="M96 100 C94 80 92 60 90 40 C88 24 84 16 80 8 C80 24 80 44 80 62 C80 76 80 88 80 100 Z" />
      {/* Tronc droit 2 */}
      <path d="M100 100 C96 78 92 56 86 36 C82 20 76 10 72 2 C72 20 74 40 74 60 C74 78 76 90 78 100 Z" fill="var(--paper)" />
      {/* Rayons de lumière depuis le centre du portail */}
      <path d="M50 48 L18 2 M50 48 L26 0 M50 48 L38 0 M50 48 L50 0 M50 48 L62 0 M50 48 L74 0 M50 48 L82 2 M50 48 L22 20 M50 48 L78 20"
        stroke="var(--paper)" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Arche du portail */}
      <path d="M28 100 L28 50 Q28 18 50 18 Q72 18 72 50 L72 100 Z" fill="var(--paper)" opacity="0.85" />
      {/* Colonnes sombres du portail */}
      <path d="M24 100 L24 50 C24 24 34 16 50 16 C66 16 76 24 76 50 L76 100 L68 100 L68 52 C68 30 60 24 50 24 C40 24 32 30 32 52 L32 100 Z" />
      {/* Sol */}
      <path d="M0 96 L100 96 L100 100 L0 100 Z" fill="var(--paper)" />
      {/* Étoile dans l'arche */}
      <path d="M50 30 L52 36 L58 36 L53 40 L55 46 L50 42 L45 46 L47 40 L42 36 L48 36 Z" />
      {/* Silhouette minuscule au seuil */}
      <path d="M48 94 L48 86 L52 86 L52 94 Z" fill="var(--paper)" />
      <path d="M47 86 C47 82 53 82 53 86 Z" fill="var(--paper)" />
    </g>
  ),

  // 12:12 — LE ZÉNITH — croissance, apprentissage invisible
  // Grand chêne majestueux vu de dessous. Les branches montent vers
  // un soleil au zénith. Les racines descendent symétriquement.
  12: (
    <g>
      {/* Sol — bande centrale */}
      <path d="M0 52 L100 52 L100 56 L0 56 Z" />
      {/* Soleil au zénith */}
      <path d="M50 6 L52 12 L58 12 L53 16 L55 22 L50 18 L45 22 L47 16 L42 12 L48 12 Z" />
      {/* Halo soleil */}
      <path d="M50 2 L50 6 M50 22 L50 26 M38 4 L40 8 M60 4 L62 8 M30 10 L34 14 M66 10 L70 14"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Tronc principal */}
      <path d="M44 56 C42 48 40 38 42 28 C44 18 50 10 50 10 C50 10 56 18 58 28 C60 38 58 48 56 56 Z" />
      {/* Branches principales — qui montent */}
      <path d="M46 36 C38 28 28 22 18 18 C24 22 30 30 36 40" stroke="var(--ink)" strokeWidth="4" fill="none" />
      <path d="M48 28 C44 18 38 10 30 6 C36 12 42 20 46 30" stroke="var(--ink)" strokeWidth="3" fill="none" />
      <path d="M54 36 C62 28 72 22 82 18 C76 22 70 30 64 40" stroke="var(--ink)" strokeWidth="4" fill="none" />
      <path d="M52 28 C56 18 62 10 70 6 C64 12 58 20 54 30" stroke="var(--ink)" strokeWidth="3" fill="none" />
      {/* Feuillage — masses sombres */}
      <path d="M14 18 C8 12 6 4 12 2 C18 0 24 6 22 14 C20 20 14 22 14 18 Z" />
      <path d="M26 8 C24 2 28 -2 34 2 C38 6 36 14 30 14 C26 14 24 10 26 8 Z" />
      <path d="M86 18 C92 12 94 4 88 2 C82 0 76 6 78 14 C80 20 86 22 86 18 Z" />
      <path d="M74 8 C76 2 72 -2 66 2 C62 6 64 14 70 14 C74 14 76 10 74 8 Z" />
      {/* Sous-sol sombre */}
      <path d="M0 56 L100 56 L100 100 L0 100 Z" />
      {/* Racines — miroir des branches */}
      <path d="M46 68 C38 76 28 82 18 86" stroke="var(--paper)" strokeWidth="4" fill="none" />
      <path d="M48 72 C44 82 38 90 30 96" stroke="var(--paper)" strokeWidth="3" fill="none" />
      <path d="M50 70 C50 80 50 90 50 98" stroke="var(--paper)" strokeWidth="3" fill="none" />
      <path d="M54 68 C62 76 72 82 82 86" stroke="var(--paper)" strokeWidth="4" fill="none" />
      <path d="M52 72 C56 82 62 90 70 96" stroke="var(--paper)" strokeWidth="3" fill="none" />
    </g>
  ),

  // 13:13 — LA TRANSFORMATION — mort symbolique, renaissance
  // Phénix qui renaît des flammes. Corps de cendres en bas,
  // oiseau de feu qui s'élève, ailes déployées.
  13: (
    <g>
      {/* Brasier en bas — flammes qui montent */}
      <path d="M0 100 L0 80 C8 72 12 78 16 70 C20 62 22 68 26 60 C30 52 32 58 36 50 C40 42 44 50 50 44 C56 50 60 42 64 50 C68 58 70 52 74 60 C78 68 80 62 84 70 C88 78 92 72 100 80 L100 100 Z" />
      {/* Hachures dans les flammes */}
      <path d="M8 96 L14 72 M18 96 L22 68 M28 96 L32 58 M38 96 L44 52 M50 96 L50 46 M62 96 L56 52 M72 96 L68 58 M82 96 L78 68 M92 96 L86 72"
        stroke="var(--paper)" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Cendres — forme sombre au sol */}
      <path d="M20 100 C22 92 30 88 38 90 C44 88 50 86 56 90 C64 88 74 92 80 100 Z" fill="var(--paper)" opacity="0.4" />
      {/* Corps du phénix — élancement vers le haut */}
      {/* Aile gauche déployée */}
      <path d="M50 56 C44 48 34 38 22 30 C14 24 6 22 4 26 C8 22 18 24 28 32 C38 40 44 50 46 60 Z" />
      <path d="M50 56 C44 48 34 38 22 30 C14 24 6 22 4 26 C8 22 18 24 28 32 C38 40 44 50 46 60 Z" fill="var(--paper)" />
      {/* Plumes aile gauche */}
      <path d="M10 26 C14 20 20 18 22 22 M24 28 C28 22 34 20 36 24 M38 36 C42 30 46 28 48 34"
        stroke="var(--ink)" strokeWidth="2" fill="none" />
      {/* Aile droite */}
      <path d="M50 56 C56 48 66 38 78 30 C86 24 94 22 96 26 C92 22 82 24 72 32 C62 40 56 50 54 60 Z" />
      <path d="M50 56 C56 48 66 38 78 30 C86 24 94 22 96 26 C92 22 82 24 72 32 C62 40 56 50 54 60 Z" fill="var(--paper)" />
      {/* Plumes aile droite */}
      <path d="M90 26 C86 20 80 18 78 22 M76 28 C72 22 66 20 64 24 M62 36 C58 30 54 28 52 34"
        stroke="var(--ink)" strokeWidth="2" fill="none" />
      {/* Corps central du phénix */}
      <path d="M46 60 C44 52 46 44 50 36 C54 44 56 52 54 60 C56 54 58 48 56 42 C54 36 52 30 50 26 C48 30 46 36 44 42 C42 48 44 54 46 60 Z" />
      {/* Tête du phénix */}
      <path d="M50 26 C46 20 44 14 48 8 C50 4 52 4 54 8 C56 14 54 20 50 26 Z" />
      {/* Crête de flammes */}
      <path d="M46 10 C44 4 46 0 50 2 M50 2 C54 0 56 4 54 10 M48 6 C46 2 48 -2 52 0"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Œil */}
      <path d="M49 18 C49 16 51 16 51 18 C51 20 49 20 49 18 Z" fill="var(--paper)" />
      {/* Queue — flammes qui descendent */}
      <path d="M46 60 C42 68 36 72 30 76 M54 60 C58 68 64 72 70 76" stroke="var(--ink)" strokeWidth="2.5" fill="none" />
    </g>
  ),

  // 14:14 — LA TEMPÉRANCE — équilibre, juste milieu, flux
  // Figure androgyne versant de l'eau d'une coupe à l'autre.
  // Le filet d'eau forme un arc parfait. Geste précis, maîtrisé.
  14: (
    <g>
      {/* Sol */}
      <path d="M0 92 L100 92 L100 100 L0 100 Z" />
      {/* Coupe gauche — grande, stable */}
      <path d="M6 92 L10 72 C10 68 16 66 22 66 L36 66 C42 66 46 68 46 72 L48 92 Z" />
      <path d="M10 90 L13 74 C13 70 17 68 22 68 L36 68 C40 68 43 70 44 74 L46 90 Z" fill="var(--paper)" />
      {/* Eau dans la coupe gauche */}
      <path d="M13 82 L44 82 L44 90 L13 90 Z" />
      {/* Pied coupe gauche */}
      <path d="M24 92 L22 98 L36 98 L34 92 Z" />
      {/* Coupe droite */}
      <path d="M94 92 L90 72 C90 68 84 66 78 66 L64 66 C58 66 54 68 54 72 L52 92 Z" />
      <path d="M90 90 L87 74 C87 70 83 68 78 68 L64 68 C60 68 57 70 56 74 L54 90 Z" fill="var(--paper)" />
      {/* Eau dans la coupe droite */}
      <path d="M56 82 L87 82 L87 90 L56 90 Z" />
      {/* Pied coupe droite */}
      <path d="M66 92 L64 98 L78 98 L76 92 Z" />
      {/* Figure centrale qui verse */}
      {/* Corps */}
      <path d="M42 58 C40 50 40 42 44 36 C46 32 50 30 50 30 C50 30 54 32 56 36 C60 42 60 50 58 58 Z" />
      {/* Hachures corps */}
      <path d="M44 36 L44 56 M48 32 L48 56 M52 32 L52 56 M56 36 L56 56"
        stroke="var(--paper)" strokeWidth="0.8" fill="none" />
      {/* Tête */}
      <path d="M44 30 C44 22 56 22 56 30 C56 38 44 38 44 30 Z" />
      {/* Cheveux */}
      <path d="M44 26 C40 22 38 16 42 12 M56 26 C60 22 62 16 58 12"
        stroke="var(--ink)" strokeWidth="2" fill="none" />
      {/* Bras gauche — tient la coupe haute */}
      <path d="M44 40 C38 36 32 30 28 22 C32 24 38 30 44 38" stroke="var(--ink)" strokeWidth="4" fill="none" />
      {/* Petite coupe en haut à gauche tenue par la main */}
      <path d="M22 20 C22 16 24 14 28 14 L36 14 C40 14 42 16 42 20 L42 26 L22 26 Z" />
      <path d="M24 20 L24 24 L40 24 L40 20 Z" fill="var(--paper)" />
      {/* Bras droit — vers la coupe basse */}
      <path d="M56 40 C62 44 68 52 72 58 C68 56 62 48 56 42" stroke="var(--ink)" strokeWidth="4" fill="none" />
      {/* Filet d'eau — arc parfait */}
      <path d="M34 26 C36 34 40 42 44 50 C48 58 50 66 50 72"
        stroke="var(--ink)" strokeWidth="2.5" fill="none" />
      <path d="M36 26 C38 34 42 42 46 50 C50 58 52 66 52 72"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Gouttes */}
      <path d="M48 64 C48 62 50 62 50 64 C50 66 48 66 48 64 Z" />
      <path d="M50 70 C50 68 52 68 52 70 C52 72 50 72 50 70 Z" />
    </g>
  ),

  // 15:15 — L'ÉPREUVE — désir, attachement, tentation dangereuse
  // Main enchaînée tendue vers une flamme. Les chaînes tirent en arrière.
  // Le feu attire, brûle. Corps dans l'ombre, objet du désir dans la lumière.
  15: (
    <g>
      {/* Fond sombre — nuit de l'attachement */}
      <path d="M0 0 L100 0 L100 100 L0 100 Z" />
      {/* Flamme du désir — droite, haute */}
      <path d="M74 20 C70 26 64 34 64 44 C64 52 68 56 72 58 C70 52 70 46 72 40 C74 34 76 28 74 20 Z" fill="var(--paper)" />
      <path d="M72 34 C70 38 68 44 70 50 C72 54 74 56 74 58 C74 56 76 52 76 46 C76 40 74 36 72 34 Z" />
      <path d="M68 38 C66 34 66 28 70 24 C70 28 70 34 70 40 Z" fill="var(--paper)" opacity="0.6" />
      {/* Halo de la flamme */}
      <path d="M72 18 L72 12 M64 22 L60 18 M80 22 L84 18 M62 32 L56 30 M84 32 L90 30"
        stroke="var(--paper)" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Bras tendu vers la flamme */}
      <path d="M4 72 C12 68 22 62 34 56 C42 52 50 48 58 46 C62 44 66 44 68 46 L66 52 C62 50 58 50 54 52 C46 56 38 60 28 66 C18 72 10 78 4 82 Z" fill="var(--paper)" />
      {/* Hachures sur le bras */}
      <path d="M12 74 L14 68 M20 70 L22 64 M30 66 L32 60 M40 62 L42 56 M50 58 L52 52"
        stroke="var(--ink)" strokeWidth="0.8" fill="none" />
      {/* Main ouverte qui tend */}
      <path d="M66 44 C66 40 68 38 70 40 L72 48 M70 42 L70 36 C70 32 72 30 74 32 L74 46 M72 40 L72 34 C72 30 74 28 76 30 L76 46 M74 42 L76 36 C76 32 78 32 78 36 L76 48"
        fill="var(--paper)" />
      {/* Chaînes qui retiennent — depuis le poignet vers la gauche */}
      <path d="M10 76 C10 76 14 78 14 74 C14 70 10 70 10 74" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M18 72 C18 72 22 74 22 70 C22 66 18 66 18 70" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M26 68 C26 68 30 70 30 66 C30 62 26 62 26 66" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M8 76 L12 74 M16 72 L20 70 M24 68 L28 66 M32 64 L10 76"
        stroke="var(--paper)" strokeWidth="1.2" fill="none" />
      {/* Anneau au poignet */}
      <path d="M4 78 C4 72 8 68 12 70 C16 72 16 78 12 80 C8 82 4 84 4 78 Z" stroke="var(--paper)" strokeWidth="2" fill="none" />
    </g>
  ),

  // 16:16 — LA FOUDRE — vérité qui rattrape, chute de l'ego
  // Tour orgueilleuse qui s'effondre sous un éclair aveuglant.
  // Les pierres tombent, les flammes commencent. Ciel en furie.
  16: (
    <g>
      {/* Ciel de tempête — très dense */}
      <path d="M0 0 L100 0 L100 44 C90 38 82 42 74 36 C66 30 58 36 50 30 C42 24 34 30 26 24 C18 18 10 24 0 20 Z" />
      {/* Tour — avant l'impact */}
      <path d="M32 96 L32 48 L36 44 L40 48 L40 44 L50 36 L60 44 L60 48 L64 44 L68 48 L68 96 Z" />
      {/* Fenêtres évidées */}
      <path d="M38 56 L38 68 L46 68 L46 56 Z M54 56 L54 68 L62 68 L62 56 Z M38 74 L38 82 L46 82 L46 74 Z M54 74 L54 82 L62 82 L62 74 Z" fill="var(--paper)" />
      {/* Hachures façade */}
      <path d="M34 50 L34 94 M36 50 L36 94 M38 50 L38 94" stroke="var(--paper)" strokeWidth="0.6" fill="none" opacity="0.3" />
      {/* Sol */}
      <path d="M0 96 L100 96 L100 100 L0 100 Z" />
      {/* Éclair principal — traverse tout */}
      <path d="M70 0 L62 20 L70 20 L56 46 L66 46 L46 80 L60 74 L42 100 L54 90 L48 100"
        fill="var(--paper)" stroke="none" />
      <path d="M72 0 L64 22 L72 22 L58 48 L68 48 L48 82 L62 76 L44 100"
        fill="var(--paper)" stroke="none" opacity="0.4" />
      {/* Impact sur la tour — explosion */}
      <path d="M56 46 C52 42 48 38 44 40 C40 42 38 48 42 52 C46 56 52 54 56 46 Z" fill="var(--paper)" />
      {/* Blocs qui tombent */}
      <path d="M14 64 C12 58 14 52 18 54 C22 56 22 62 18 64 Z" transform="rotate(-25 18 60)" fill="var(--paper)" />
      <path d="M22 76 C20 70 22 64 26 66 C30 68 30 74 26 76 Z" transform="rotate(40 26 72)" fill="var(--paper)" />
      <path d="M80 60 C78 54 80 48 84 50 C88 52 88 58 84 60 Z" transform="rotate(20 84 56)" fill="var(--paper)" />
      {/* Flammes à la base de la tour */}
      <path d="M32 96 C34 88 38 84 42 88 C44 84 48 80 50 86 C52 80 56 84 58 88 C62 84 66 88 68 96" stroke="var(--paper)" strokeWidth="2" fill="none" />
    </g>
  ),

  // 17:17 — L'ÉTOILE REFLÉTÉE — espoir, guidance, avancer malgré le doute
  // Navigateur solitaire la nuit, une étoile fixe le guide.
  // Mer calme, reflets argentés, cap maintenu.
  17: (
    <g>
      {/* Ciel nocturne */}
      <path d="M0 0 L100 0 L100 55 L0 55 Z" />
      {/* Étoile polaire — grande, brillante, structurée */}
      <path d="M50 8 L52.5 18 L62 20 L52.5 22 L50 32 L47.5 22 L38 20 L47.5 18 Z" fill="var(--paper)" />
      {/* Rayons de l'étoile polaire */}
      <path d="M50 4 L50 8 M50 32 L50 36 M36 20 L32 20 M64 20 L68 20 M39 11 L36 8 M61 11 L64 8 M61 29 L64 32 M39 29 L36 32"
        stroke="var(--paper)" strokeWidth="1.5" fill="none" />
      {/* Autres étoiles — petites */}
      <path d="M16 10 L17 14 L20 14 L17.5 16 L18.5 20 L16 18 L13.5 20 L14.5 16 L12 14 L15 14 Z" fill="var(--paper)" />
      <path d="M80 12 L81 15 L84 15 L81.5 17 L82.5 20 L80 18.5 L77.5 20 L78.5 17 L76 15 L79 15 Z" fill="var(--paper)" />
      <path d="M28 6 C28 5 29 5 29 6 C29 7 28 7 28 6 Z M68 4 C68 3 69 3 69 4 C69 5 68 5 68 4 Z M14 30 C14 29 15 29 15 30 C15 31 14 31 14 30 Z M88 26 C88 25 89 25 89 26 C89 27 88 27 88 26 Z" fill="var(--paper)" />
      {/* Ligne d'horizon — mer calme */}
      <path d="M0 54 L100 54" stroke="var(--paper)" strokeWidth="1.5" fill="none" />
      {/* Mer — reflets calmes */}
      <path d="M0 55 Q25 52 50 55 Q75 58 100 55 L100 100 L0 100 Z" />
      <path d="M0 62 Q20 59 40 62 Q60 65 80 62 Q90 60 100 62" stroke="var(--paper)" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M0 70 Q25 67 50 70 Q75 73 100 70" stroke="var(--paper)" strokeWidth="0.8" fill="none" opacity="0.35" />
      {/* Reflet de l'étoile polaire dans l'eau */}
      <path d="M50 68 L51.5 74 L56 74 L52 76 L53.5 82 L50 79 L46.5 82 L48 76 L44 74 L48.5 74 Z" fill="var(--paper)" opacity="0.6" />
      {/* Barque */}
      <path d="M26 58 Q40 54 50 54 Q60 54 74 58 L70 66 Q50 70 30 66 Z" />
      {/* Mât */}
      <path d="M50 54 L50 36" stroke="var(--paper)" strokeWidth="2" fill="none" />
      {/* Voile gonflée */}
      <path d="M50 38 C58 40 64 46 62 52 L50 54 Z" fill="var(--paper)" />
      {/* Hachures voile */}
      <path d="M52 40 C58 42 62 46 60 50 M54 40 C60 42 62 48 60 52"
        stroke="var(--ink)" strokeWidth="0.7" fill="none" />
      {/* Navigateur — silhouette debout */}
      <path d="M40 66 L40 56 L44 56 L44 66 Z" />
      <path d="M40 56 C40 52 44 52 44 56 Z" />
    </g>
  ),

  // 18:18 — LA LUNE — illusions, projections, brouillard intérieur
  // Lune pleine dans un ciel chargé. En bas, un lac aux reflets déformés.
  // Des silhouettes fantomatiques flottent — réelles ou imaginées ?
  18: (
    <g>
      {/* Ciel nocturne total */}
      <path d="M0 0 L100 0 L100 100 L0 100 Z" />
      {/* Halo lunaire — cercles concentriques */}
      <path d="M50 32 C60 32 68 40 68 50 C68 60 60 68 50 68 C40 68 32 60 32 50 C32 40 40 32 50 32 Z" stroke="var(--paper)" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M50 24 C64 24 76 36 76 50 C76 64 64 76 50 76 C36 76 24 64 24 50 C24 36 36 24 50 24 Z" stroke="var(--paper)" strokeWidth="0.6" fill="none" opacity="0.2" />
      {/* Lune pleine */}
      <path d="M50 36 C58 36 64 42 64 50 C64 58 58 64 50 64 C42 64 36 58 36 50 C36 42 42 36 50 36 Z" fill="var(--paper)" />
      {/* Cratères lunaires */}
      <path d="M44 44 C44 42 46 42 46 44 C46 46 44 46 44 44 Z" />
      <path d="M54 48 C54 46 56 46 56 48 C56 50 54 50 54 48 Z" />
      <path d="M46 56 C46 54 48 54 48 56 C48 58 46 58 46 56 Z" />
      {/* Nuages qui voilent partiellement */}
      <path d="M0 42 C8 36 16 38 22 32 C28 26 34 28 40 22 C44 18 48 20 52 18 C58 16 64 20 68 24 C72 28 78 26 84 30 C90 34 96 32 100 36 L100 52 C94 48 88 50 82 44 C76 38 70 40 64 36 C58 32 52 34 46 30 C40 26 34 28 28 34 C22 40 16 42 10 48 L0 52 Z" />
      {/* Intérieur nuage évidé — semi-transparent */}
      <path d="M4 44 C10 38 16 40 22 34 C28 28 34 30 40 24 C44 20 48 22 52 20 C58 18 62 22 66 26 C70 30 76 28 82 32 C88 36 94 34 98 38 L98 50 C92 46 86 48 80 42 C74 36 68 38 62 34 C56 30 52 32 46 28 C40 24 34 26 28 32 C22 38 16 40 10 46 L4 50 Z" fill="var(--ink)" />
      {/* Lac en bas — surface miroitante */}
      <path d="M0 78 Q25 72 50 76 Q75 80 100 76 L100 100 L0 100 Z" fill="var(--paper)" opacity="0.15" />
      {/* Reflet déformé de la lune dans le lac */}
      <path d="M50 84 Q56 80 62 84 Q56 90 50 92 Q44 90 38 84 Q44 80 50 84 Z" fill="var(--paper)" opacity="0.4" />
      {/* Ondulations qui déforment */}
      <path d="M20 80 Q35 76 50 80 Q65 84 80 80" stroke="var(--paper)" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M10 86 Q30 82 50 86 Q70 90 90 86" stroke="var(--paper)" strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Silhouette fantomatique gauche */}
      <path d="M16 74 C16 68 18 64 22 62 C24 60 24 68 22 74 Z" fill="var(--paper)" opacity="0.3" />
      <path d="M14 62 C14 58 18 56 20 60 Z" fill="var(--paper)" opacity="0.25" />
      {/* Silhouette droite */}
      <path d="M78 70 C78 64 82 60 84 64 C86 68 84 74 80 74 Z" fill="var(--paper)" opacity="0.3" />
      <path d="M80 60 C80 56 84 54 86 58 Z" fill="var(--paper)" opacity="0.25" />
    </g>
  ),

  // 19:19 — LE SOLEIL — accomplissement, lumière, être vu
  // Soleil triomphant explosif. Visage rayonnant. Tout est illuminé.
  // Style gravure la plus dense — le soleil comme une divinité.
  19: (
    <g>
      {/* Rayons primaires — très longs, explosifs */}
      <path d="M50 50 L50 2 M50 50 L58 2 M50 50 L66 4 M50 50 L74 8 M50 50 L82 14 M50 50 L88 22 M50 50 L94 30 M50 50 L98 40 M50 50 L98 60 M50 50 L94 70 M50 50 L88 78 M50 50 L82 86 M50 50 L74 92 M50 50 L66 96 M50 50 L58 98 M50 50 L42 98 M50 50 L34 96 M50 50 L26 92 M50 50 L18 86 M50 50 L12 78 M50 50 L6 70 M50 50 L2 60 M50 50 L2 40 M50 50 L6 30 M50 50 L12 22 M50 50 L18 14 M50 50 L26 8 M50 50 L34 4 M50 50 L42 2"
        stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Rayons secondaires — entre les primaires */}
      <path d="M50 50 L54 4 M50 50 L62 3 M50 50 L70 6 M50 50 L78 11 M50 50 L85 18 M50 50 L91 26 M50 50 L96 35 M50 50 L98 50 M50 50 L96 65 M50 50 L91 74 M50 50 L85 82 M50 50 L78 89 M50 50 L70 94 M50 50 L62 97 M50 50 L54 98 M50 50 L46 98 M50 50 L38 97 M50 50 L30 94 M50 50 L22 89 M50 50 L15 82 M50 50 L9 74 M50 50 L4 65 M50 50 L2 50 M50 50 L4 35 M50 50 L9 26 M50 50 L15 18 M50 50 L22 11 M50 50 L30 6 M50 50 L38 3 M50 50 L46 4"
        stroke="var(--ink)" strokeWidth="0.8" fill="none" opacity="0.6" />
      {/* Disque solaire */}
      <path d="M50 50 C40 50 32 44 32 36 C32 28 40 22 50 22 C60 22 68 28 68 36 C68 44 60 50 50 50 Z" />
      <path d="M50 50 C40 50 32 44 32 36 C32 28 40 22 50 22 C60 22 68 28 68 36 C68 44 60 50 50 50 Z" fill="var(--paper)" />
      {/* Couronne de feu */}
      <path d="M34 22 C32 14 36 8 42 10 C40 14 38 18 40 24 Z" />
      <path d="M50 22 C50 14 54 8 56 12 C54 16 52 20 52 26 Z" />
      <path d="M66 22 C68 14 64 8 60 10 C62 14 64 18 62 24 Z" />
      {/* Visage solaire — expressif */}
      <path d="M42 32 C42 30 44 29 46 30 C48 32 48 34 46 35 C44 36 42 34 42 32 Z" />
      <path d="M54 32 C54 30 56 29 58 30 C60 32 60 34 58 35 C56 36 54 34 54 32 Z" />
      {/* Sourire rayonnant */}
      <path d="M42 40 C44 44 48 46 50 46 C52 46 56 44 58 40"
        stroke="var(--ink)" strokeWidth="2" fill="none" />
      {/* Joues */}
      <path d="M38 36 C36 34 36 30 40 30 Z" />
      <path d="M62 36 C64 34 64 30 60 30 Z" />
    </g>
  ),

  // 20:20 — LE JUGEMENT — attente, patience, réponse qui tarde
  // Horloge dont les aiguilles sont soudées. Une figure attend, assise,
  // tête dans les mains. Le temps est suspendu.
  20: (
    <g>
      {/* Mur de fond — lourd, oppressant */}
      <path d="M0 0 L100 0 L100 100 L0 100 Z" />
      {/* Motif mur de briques */}
      <path d="M0 14 L100 14 M0 28 L100 28 M0 42 L100 42 M0 56 L100 56 M0 70 L100 70 M0 84 L100 84"
        stroke="var(--paper)" strokeWidth="1" fill="none" opacity="0.2" />
      {/* Cadre de l'horloge */}
      <path d="M50 50 C30 50 14 38 14 24 C14 10 30 0 50 0 C70 0 86 10 86 24 C86 38 70 50 50 50 Z" fill="var(--paper)" />
      <path d="M50 50 C30 50 14 38 14 24 C14 10 30 0 50 0 C70 0 86 10 86 24 C86 38 70 50 50 50 Z" stroke="var(--ink)" strokeWidth="3" fill="none" />
      {/* Graduation heures */}
      <path d="M50 4 L50 8 M50 40 L50 44 M18 24 L22 24 M78 24 L82 24 M23 9 L26 12 M74 9 L71 12 M23 39 L26 36 M74 39 L71 36"
        stroke="var(--ink)" strokeWidth="2" fill="none" />
      {/* Aiguilles bloquées — rigides */}
      <path d="M50 24 L50 8" stroke="var(--ink)" strokeWidth="3" fill="none" />
      <path d="M50 24 L62 18" stroke="var(--ink)" strokeWidth="2" fill="none" />
      {/* Centre de l'horloge */}
      <path d="M50 24 C48 24 46 26 46 28 C46 30 48 32 50 32 C52 32 54 30 54 28 C54 26 52 24 50 24 Z" />
      {/* Fissures dans le cadran — le temps figé crack */}
      <path d="M58 6 C60 10 58 14 54 16 M66 12 C66 18 62 22 58 22"
        stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Figure qui attend — assise en bas */}
      <path d="M28 100 C28 88 32 80 40 78 L60 78 C68 80 72 88 72 100 Z" fill="var(--paper)" />
      {/* Hachures corps */}
      <path d="M32 80 L32 100 M38 78 L38 100 M44 78 L44 100 M50 78 L50 100 M56 78 L56 100 M62 78 L62 100 M68 80 L68 100"
        stroke="var(--ink)" strokeWidth="0.7" fill="none" />
      {/* Tête dans les mains */}
      <path d="M44 78 C44 70 56 70 56 78 Z" fill="var(--paper)" />
      {/* Mains qui tiennent la tête */}
      <path d="M36 76 C34 72 36 68 40 70 C42 72 42 76 40 78 Z" fill="var(--paper)" />
      <path d="M64 76 C66 72 64 68 60 70 C58 72 58 76 60 78 Z" fill="var(--paper)" />
      {/* Chaîne de l'horloge qui pend */}
      <path d="M50 50 C50 56 50 62 50 68 C50 72 48 74 50 76 C52 74 50 72 50 68"
        stroke="var(--paper)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    </g>
  ),

  // 21:21 — LE MONDE — aboutissement, accomplissement, expansion
  // Mappemonde avec tous les continents. Entourée d'une couronne de feuillage.
  // Rayons dans les 4 coins — la plénitude totale.
  21: (
    <g>
      {/* Globe terrestre */}
      <path d="M50 50 C30 50 14 36 14 18 C14 0 30 -14 50 -14 C70 -14 86 0 86 18 C86 36 70 50 50 50 Z" />
      {/* Globe visible dans le cadre */}
      <path d="M50 14 C30 14 14 26 14 42 C14 58 30 70 50 70 C70 70 86 58 86 42 C86 26 70 14 50 14 Z" />
      <path d="M50 14 C30 14 14 26 14 42 C14 58 30 70 50 70 C70 70 86 58 86 42 C86 26 70 14 50 14 Z" fill="var(--paper)" />
      {/* Méridiens */}
      <path d="M50 14 C44 20 40 30 40 42 C40 54 44 62 50 68 C56 62 60 54 60 42 C60 30 56 20 50 14 Z" stroke="var(--ink)" strokeWidth="1.2" fill="none" />
      <path d="M50 14 C34 18 22 28 18 42 C22 56 34 64 50 68" stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M50 14 C66 18 78 28 82 42 C78 56 66 64 50 68" stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Équateur */}
      <path d="M14 42 Q32 38 50 42 Q68 46 86 42" stroke="var(--ink)" strokeWidth="1.5" fill="none" />
      {/* Tropiques */}
      <path d="M16 34 Q34 30 50 34 Q66 38 84 34" stroke="var(--ink)" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M16 50 Q34 46 50 50 Q66 54 84 50" stroke="var(--ink)" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Masses continentales stylisées */}
      <path d="M26 30 C26 26 30 24 34 26 C36 28 36 34 32 36 C28 36 26 34 26 30 Z" />
      <path d="M46 24 C46 20 50 18 54 20 C58 22 58 28 54 30 C50 30 46 28 46 24 Z" />
      <path d="M62 34 C62 30 66 28 70 30 C72 34 70 38 66 38 C62 38 62 36 62 34 Z" />
      <path d="M28 46 C28 42 32 40 36 42 C38 44 38 50 34 52 C30 52 28 50 28 46 Z" />
      <path d="M54 48 C54 44 58 42 62 46 C64 50 62 56 58 56 C54 56 54 52 54 48 Z" />
      {/* Couronne de feuillage */}
      {Array.from({length: 14}).map((_,i) => {
        const a = (i / 14) * Math.PI * 2 - Math.PI / 2;
        const R = 44;
        const x = 50 + Math.cos(a) * R, y = 42 + Math.sin(a) * R;
        const ax = Math.cos(a + Math.PI / 2), ay = Math.sin(a + Math.PI / 2);
        return (
          <path key={i}
            d={`M${x} ${y} C${x + ax * 6} ${y + ay * 6} ${x + Math.cos(a) * 8} ${y + Math.sin(a) * 8} ${x + ax * 4 + Math.cos(a) * 4} ${y + ay * 4 + Math.sin(a) * 4}`} />
        );
      })}
      {/* Étoiles aux 4 coins */}
      <path d="M8 8 L10 14 L16 14 L11 18 L13 24 L8 20 L3 24 L5 18 L0 14 L6 14 Z" />
      <path d="M92 8 L94 14 L100 14 L95 18 L97 24 L92 20 L87 24 L89 18 L84 14 L90 14 Z" />
      <path d="M8 92 L10 86 L16 86 L11 82 L13 76 L8 80 L3 76 L5 82 L0 86 L6 86 Z" />
      <path d="M92 92 L94 86 L100 86 L95 82 L97 76 L92 80 L87 76 L89 82 L84 86 L90 86 Z" />
    </g>
  ),

  // 22:22 — LE MAÎTRE — puissance créatrice, construire grand
  // Mains de l'artisan en gros plan — elles tiennent le compas et l'équerre.
  // En arrière-plan, les lignes d'un plan architectural se dessinent.
  22: (
    <g>
      {/* Plan architectural en fond */}
      <path d="M0 0 L100 0 L100 100 L0 100 Z" />
      {/* Temple dessiné sur le plan */}
      <path d="M20 80 L20 50 L80 50 L80 80 M20 50 L50 28 L80 50 M30 80 L30 50 M40 80 L40 50 M60 80 L60 50 M70 80 L70 50"
        stroke="var(--paper)" strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* Main gauche — tient l'équerre */}
      <path d="M4 82 C4 74 8 66 14 64 L20 62 C20 66 20 70 22 72 L22 64 C22 60 24 58 26 58 C28 58 30 60 30 64 L30 74 L32 64 C32 60 34 58 36 60 L36 70 C38 66 38 60 38 56 L42 60 C44 68 44 78 42 86 L38 90 C34 88 28 86 22 86 C14 86 8 88 6 90 Z" fill="var(--paper)" />
      {/* Hachures main gauche */}
      <path d="M8 80 L10 72 M14 82 L16 74 M20 82 L22 76 M26 82 L28 76 M32 80 L34 74 M38 78 L40 70"
        stroke="var(--ink)" strokeWidth="0.8" fill="none" />
      {/* Équerre tenue par la main gauche */}
      <path d="M34 58 L34 40 L52 40" stroke="var(--paper)" strokeWidth="3" fill="none" />
      <path d="M34 58 L34 40 L52 40" stroke="var(--ink)" strokeWidth="1" fill="none" />
      {/* Main droite — tient le compas */}
      <path d="M96 82 C96 74 92 66 86 64 L80 62 C80 66 80 70 78 72 L78 64 C78 60 76 58 74 58 C72 58 70 60 70 64 L70 74 L68 64 C68 60 66 58 64 60 L64 70 C62 66 62 60 62 56 L58 60 C56 68 56 78 58 86 L62 90 C66 88 72 86 78 86 C86 86 92 88 94 90 Z" fill="var(--paper)" />
      {/* Hachures main droite */}
      <path d="M92 80 L90 72 M86 82 L84 74 M80 82 L78 76 M74 82 L72 76 M68 80 L66 74 M62 78 L60 70"
        stroke="var(--ink)" strokeWidth="0.8" fill="none" />
      {/* Compas ouvert */}
      <path d="M66 58 L50 38" stroke="var(--paper)" strokeWidth="3" fill="none" />
      <path d="M70 56 L66 36" stroke="var(--paper)" strokeWidth="3" fill="none" />
      {/* Pivot du compas */}
      <path d="M66 56 C64 54 66 52 68 54 C70 56 68 58 66 56 Z" fill="var(--paper)" />
      {/* Arc tracé par le compas — le grand œuvre */}
      <path d="M50 38 C54 32 62 28 66 36" stroke="var(--paper)" strokeWidth="1.5" fill="none" />
      {/* Étoile à 8 branches au centre */}
      <path d="M50 50 L51.5 44 L56 44 L52 41 L53.5 36 L50 39 L46.5 36 L48 41 L44 44 L48.5 44 Z" fill="var(--paper)" />
      <path d="M50 50 L51.5 56 L56 56 L52 59 L53.5 64 L50 61 L46.5 64 L48 59 L44 56 L48.5 56 Z" fill="var(--paper)" />
    </g>
  ),

  // 23:23 — LE VOILE — lâcher-prise, protection, faire confiance au mouvement
  // Grand voile gonflé sur une mer agitée. Les mains lâchent les cordages.
  // Le vent porte le navire. Abandon confiant.
  23: (
    <g>
      {/* Ciel de vent — nuages en mouvement */}
      <path d="M0 0 L100 0 L100 38 C90 32 80 36 70 30 C60 24 50 30 40 24 C30 18 20 24 10 18 L0 22 Z" />
      {/* Lignes de vent — horizontales qui courent */}
      <path d="M0 18 C20 14 40 18 60 14 C74 12 88 16 100 12" stroke="var(--paper)" strokeWidth="2" fill="none" />
      <path d="M0 28 C16 24 36 28 56 22 C70 18 86 22 100 18" stroke="var(--paper)" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Mer agitée */}
      <path d="M0 62 C8 56 16 60 24 54 C32 48 40 54 48 50 C56 46 64 52 72 48 C80 44 88 50 100 46 L100 100 L0 100 Z" />
      {/* Vagues détaillées */}
      <path d="M0 68 C12 64 24 68 36 62 C48 56 60 62 72 58 C84 54 94 60 100 56" stroke="var(--paper)" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M0 76 C10 72 22 76 34 70 C46 64 58 70 70 66 C82 62 92 68 100 64" stroke="var(--paper)" strokeWidth="1.2" fill="none" opacity="0.45" />
      <path d="M0 84 C14 80 28 84 42 78 C56 72 70 78 84 74 C90 72 96 76 100 74" stroke="var(--paper)" strokeWidth="1" fill="none" opacity="0.35" />
      {/* Coque du navire */}
      <path d="M18 62 Q34 56 50 58 Q66 60 82 56 L86 68 Q50 76 14 68 Z" fill="var(--paper)" />
      <path d="M20 64 Q34 60 50 62 Q66 64 80 60 L82 68 Q50 74 18 68 Z" />
      {/* Mât principal */}
      <path d="M50 58 L50 14" stroke="var(--paper)" strokeWidth="3" fill="none" />
      {/* Grande voile principale — gonflée à droite */}
      <path d="M50 16 C62 20 76 30 80 44 C84 56 76 64 62 66 C56 66 52 64 50 58 C52 54 54 46 54 36 C54 26 52 20 50 16 Z" fill="var(--paper)" />
      {/* Hachures voile — plis du tissu */}
      <path d="M52 22 C62 26 70 36 70 48 M54 28 C64 32 70 44 68 56 M54 38 C62 42 64 52 62 62"
        stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Voile de misaine — petite avant */}
      <path d="M50 18 C40 22 32 32 34 44 C36 52 44 56 50 56 C48 50 46 42 48 32 Z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="0.8" />
      {/* Cordages lâchés — tombent */}
      <path d="M50 58 C44 60 38 64 34 68" stroke="var(--paper)" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
      <path d="M50 52 C56 56 62 62 66 68" stroke="var(--paper)" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
      {/* Mains qui lâchent — en bas de la voile */}
      <path d="M32 68 C30 64 32 60 36 62 C38 64 36 68 34 70 Z" fill="var(--paper)" />
      <path d="M68 68 C70 64 68 60 64 62 C62 64 64 68 66 70 Z" fill="var(--paper)" />
      {/* Étoile de navigation — haut droite */}
      <path d="M88 8 L90 14 L96 14 L91 18 L93 24 L88 20 L83 24 L85 18 L80 14 L86 14 Z" />
    </g>
  ),

};

export function CarvedIcon({ hour, size = 60 }) {
  const path = ICON_PATHS[hour] ?? ICON_PATHS[0];
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: 'block' }} shapeRendering="geometricPrecision">
      <g fill="var(--ink)" stroke="none">
        {path}
      </g>
    </svg>
  );
}
