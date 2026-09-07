# VFR Radio — Entraînement radiotéléphonie VFR (F-HUET)

Application web d'entraînement à la **phraséologie aéronautique VFR en français**.
Le **contrôleur parle de vive voix** (synthèse vocale) et vous **répondez au micro**
(reconnaissance vocale). Indicatif : **F-HUET**.

> **Source phraséologie** : structures alignées sur le *Manuel de phraséologie à l'usage
> de la circulation aérienne générale* (DGAC / **ENAC**, éd. 15 avril 2023) — notamment les
> messages de détresse **MAYDAY** et d'urgence **PAN PAN**, la panne radio (**7600**),
> le transit **VFR** / **VFR Spécial**, l'intégration en circuit et l'AFIS.
> Le manuel officiel est téléchargeable sur ecologie.gouv.fr / le SIA.

## Ce qui est couvert
- **SIV** — service d'information de vol / suivi de vol en route
- **TMA** — transit sous contrôle d'approche
- **CTR / Tour de contrôle** — arrivée + atterrissage, départ (Sol → Tour)
- **AFIS** — aérodrome à information (pas de clairance), dont **Chartres (LFOR)** départ & arrivée
- **Auto-information** — aérodrome non contrôlé (annonces à l'aveugle)
- **Pénétration de zone** (R/D)
- **Pannes & urgences** :
  - **Panne radio** — affichage **7600**, essai radio, annonces à l'aveugle, retour Chartres
  - **Panne moteur** — **MAYDAY** (détresse), affichage **7700**, format complet
  - **Malaise à bord** — **PAN PAN** (urgence), demande de priorité + secours
- **Déroutements** :
  - **Déroutement météo** (dégradation VMC → PAN PAN, demi-tour vers Chartres)
  - **Destination indisponible** (déroutement géré, sans urgence déclarée)

> Base configurée : **Chartres-Champhol (LFOR)** — « Chartres Information » (AFIS), piste 28.
> ⚠️ Les **fréquences et codes transpondeur sont pédagogiques** : vérifiez toujours la
> carte VAC / l'AIP en vigueur avant un vol réel.

## Scénarios : deux ensembles distincts

L'application contient **69 scénarios**, répartis en deux ensembles clairement séparés
(dans le menu **Espace / organisme**, dans le menu **Scénario** — deux `optgroup` —
et par une **pastille de provenance** sous chaque briefing) :

### 🗂️ Scénarios d'origine du projet — 20 (inchangés)
SIV, TMA, CTR, Classe D, AFIS, Auto-information, Pénétration de zone,
Pannes & urgences, Déroutements. **Aucun n'a été modifié.**

### 📘 Manuel DGAC — 49 ajouts
Extraits **uniquement** du *Manuel de phraséologie à l'usage de la circulation aérienne
générale* (DGAC / DSNA, 10ᵉ édition, 15 avril 2023), **partie française seulement**,
**contenu VFR seulement** (terrains contrôlés et non contrôlés, toutes phases de vol).
L'indicatif « Rapidair 3245 » du manuel est remplacé par **F-HUET** (forme abrégée
**F-ET**, conforme à la règle des indicatifs abrégés p. 18) ; les exemples en « F B X »
du manuel sont eux aussi repris sous F-HUET.
Chaque scénario affiche sa **page de référence** dans le manuel.

| Code | Phase | Nb | Contenu |
|---|---|---|---|
| `SOL`  | Sol — prévol & circulation | 4 | Paramètres de départ, roulage VFR (Chavenay), maintien de position & traversée de piste, tractage |
| `DEP`  | Départ | 4 | Alignement (attente, intersection, lever de doute), alignement conditionnel, décollage immédiat & après décollage, décollage annulé / « stoppez immédiatement » |
| `VFRS` | VFR Spécial | 4 | Départ (+ refus), arrivée, transit sur itinéraire publié, transit hors itinéraire |
| `CRZ`  | En route | 12 | Transit VFR (avec / sans contact visuel), information de trafic, risque de collision (à la demande / à l'initiative du contrôleur), séparation à vue, météo sur la route, transpondeur, guidage & cap, renseignements SIV, clôture du plan de vol en vol, fréquences & perte d'identification |
| `ARR`  | Arrivée | 12 | ATIS, intégration dans le circuit, dans le circuit (×2), atterrissage & après atterrissage (×2), remise de gaz, manœuvres particulières, traversée de piste active, clôture du plan de vol à l'arrivée, sortie d'espace contrôlé, descente vers un AFIS |
| `ACT`  | Activités spécifiques | 5 | Voltige, parachutage en espace contrôlé, parachutage en espace non contrôlé/AFIS, vol à voile, hélicoptère |
| `URG`  | Pannes & urgences | 8 | MAYDAY complet, PAN PAN complet, panne radio 7600, alerte relief, manœuvre d'évitement, train d'atterrissage, carburant minimal / MAYDAY Fuel, cas particuliers en fréquence |

**Volontairement exclus** (hors périmètre demandé) : tout ce qui est purement IFR
(SID/STAR, approches ILS/RNP/VPT, LVP, CPDLC, attentes IFR, annulation IFR en vol,
entraînement CAT II/III), l'anglais, ainsi que le TCAS/ACAS, le STCA, le largage de
carburant et les procédures GNSS/RNP, non pertinents pour un vol VFR léger.

## Niveaux
- **Difficulté** : débit de parole, tolérance du collationnement, indices.
  - Débutant : lent, indices affichés, seuil 50 %, 3 essais, l'ATC répète.
  - Intermédiaire : débit normal, seuil ~68 %, 2 essais.
  - Confirmé : rapide, strict (85 %), 1 essai, aucun indice.
- **Charge de travail** : légère / normale / soutenue (avec **trafic parasite** :
  d'autres avions parlent sur la fréquence, vous ne devez pas y répondre).

## Mode aléatoire
- **🎲 Exercice aléatoire** : tire un scénario au hasard (dans l'espace filtré, ou tout).
- **🎲 Session (3 aléatoires)** : enchaîne 3 exercices tirés au sort d'affilée, avec un
  **score cumulé** de session à la fin.
- **Difficulté / charge = « 🎲 Aléatoire »** : le niveau change à chaque exercice
  (utile en session pour ne pas savoir à l'avance ce qui vous attend).

## Lancer l'app (recommandé : localhost pour autoriser le micro)

Dans le dossier du projet :

```bash
python3 -m http.server 5500
```

Puis ouvrez **http://localhost:5500** dans **Google Chrome**.

> ⚠️ La reconnaissance vocale nécessite **Chrome** et une origine sûre.
> Ouvrir le fichier en `file://` peut bloquer le micro : passez par `localhost`.
> 🎧 Utilisez un **casque** pour éviter que le micro capte la voix du contrôle.
> Si le micro est indisponible, une **saisie clavier de secours** s'active
> automatiquement (tapez votre réponse, Entrée).

## Utilisation
1. Choisissez difficulté, charge de travail, espace et scénario. Lisez le briefing.
2. **Démarrer** : le contrôle parle. Quand c'est à vous, cliquez **Appuyer pour parler**,
   énoncez votre réponse (collationnement / message), puis recliquez ou laissez le silence
   couper le micro.
3. L'app évalue les éléments clés (indicatif, transpondeur, QNH, piste, autorisation…),
   affiche ce qui manque, et le contrôle enchaîne.
4. Score et débriefing à la fin.

## Astuce phraséologie
Prononcez les codes **chiffre par chiffre** (transpondeur « quatre deux trois un »,
QNH « un zéro un cinq »), et terminez vos messages par votre indicatif (**F-ET** en abrégé).

## Ajouter des scénarios
Éditez le tableau `SCN` dans `index.html`. Chaque tour est soit `who:'atc'`
(le contrôle parle), soit `who:'pilot'` (à vous) avec la liste `expect` des éléments attendus.
Règle d'écriture : ce qui se dit chiffre par chiffre (transpondeur, QNH, piste, fréquence,
cap) s'écrit **en chiffres** ; les altitudes s'écrivent **en lettres** (« trois mille pieds »).
