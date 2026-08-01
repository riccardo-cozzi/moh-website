# Analisi della repository

## Executive summary

La repository contiene una landing page React statica per MOH – Mobility Opportunities Happening, pubblicata presumibilmente tramite GitHub Pages sul dominio `wearemoh.it`.

L’applicazione è funzionalmente vicina a un **MVP di sito istituzionale statico**: presenta l’organizzazione, i progetti, l’impatto, le storie, i partner, i documenti scaricabili, i contatti, i social e la privacy policy in italiano, inglese e spagnolo.

Lo stato attuale è sufficiente per una pubblicazione informativa, ma non lo considererei ancora completamente “production-ready” senza:

- test funzionali e responsive su browser reali;
- correzione del test automatico residuo;
- verifica degli asset e dei link esterni;
- miglioramento del modulo contatti;
- audit accessibilità, privacy, SEO e sicurezza;
- razionalizzazione del codice duplicato e della pipeline di build/deploy.

La diagnostica statica della directory `src` non evidenzia errori, non risultano file modificati localmente e non sono stati apportati cambiamenti durante l’analisi.

---

# 1. Funzionalità implementate

## 1.1 Landing page istituzionale

L’applicazione presenta una singola pagina principale composta da:

1. hero/banner iniziale;
2. sezione “Chi siamo”;
3. tre aree tematiche:
   - mobilità giovanile ed educazione non formale;
   - sostenibilità e tutela ambientale;
   - inclusione, diritti umani e partecipazione;
4. sezione impatto;
5. storie/progetti;
6. partner;
7. contatti;
8. social;
9. documenti scaricabili;
10. privacy policy;
11. barra informativa fissa con dati istituzionali.

La composizione è definita in [src/pages/HomePage.js](src/pages/HomePage.js#L1-L95).

La pagina è raggiungibile attraverso un’unica route wildcard React Router in [src/App.js](src/App.js#L20-L31). Non risultano vere pagine applicative separate, nonostante sia presente `react-router-dom`.

## 1.2 Multilingua

Sono supportate tre lingue:

- italiano;
- inglese;
- spagnolo.

Le lingue sono definite in [src/multilang/Languages.js](src/multilang/Languages.js#L1-L22), mentre le traduzioni dell’interfaccia sono concentrate in [src/multilang/Texts.js](src/multilang/Texts.js#L1-L196).

Il cambio lingua:

- avviene tramite uno `SpeedDial` flottante;
- aggiorna il contesto React;
- viene persistito in `localStorage` con la chiave `language_id`;
- usa l’inglese come fallback iniziale.

La logica è implementata in [src/App.js](src/App.js#L10-L18) e [src/components/LanguageSelectors.js](src/components/LanguageSelectors.js#L22-L58).

Le storie caricano inoltre il corpo HTML nella lingua selezionata, tramite file separati in `public/stories/`.

### Problemi rilevati

- Alcuni testi del dialog download sono hardcoded in italiano, ad esempio “Downloads”, “Consulta o scarica i documenti di MOH” e “Chiudi”, invece di passare da `Texts.js`.
- Le traduzioni non sono validate automaticamente: una chiave mancante può produrre `undefined`.
- Non è presente una gestione esplicita della lingua del documento HTML dopo il cambio lingua: l’attributo `lang` iniziale in [public/index.html](public/index.html#L1) resta `it`.
- La selezione della lingua è salvata senza gestione di eccezioni per ambienti in cui `localStorage` non sia disponibile.

## 1.3 Banner e responsive layout

Il banner:

- utilizza immagini separate per il cerchio e il testo del logo;
- mostra una variante desktop e una mobile;
- determina la modalità in base a `window.innerWidth`;
- aggiorna la modalità al resize;
- applica una rotazione animata al logo.

La logica si trova in [src/components/Banner.js](src/components/Banner.js#L1-L111).

Sono presenti breakpoint responsive sia tramite Material UI sia tramite CSS in [src/App.css](src/App.css#L1-L354).

### Rischi

- La modalità mobile è determinata manualmente a `950px`, mentre il layout Material UI usa breakpoint diversi.
- La lettura diretta di `window.innerWidth` rende il componente meno adatto a rendering server-side o a test isolati.
- Sono presenti `console.log` in produzione in [src/components/Banner.js](src/components/Banner.js#L31) e [src/components/AboutSection.js](src/components/AboutSection.js#L25).

## 1.4 Sezione “Chi siamo”

La sezione utilizza:

- testo localizzato;
- tre card informative;
- icone Material UI;
- colori e gradienti coerenti con il brand.

È implementata in [src/components/AboutSection.js](src/components/AboutSection.js#L1-L119).

La funzione è puramente informativa: le card non sono interattive e non conducono ad approfondimenti.

## 1.5 Sezione impatto

La sezione impatto mostra:

- numero di paesi coinvolti;
- elenco di paesi tramite emoji delle bandiere;
- numero di giovani mandati all’estero;
- numero di progetti guidati;
- elementi grafici decorativi;
- immagine `didi.png`.

La logica è in [src/components/ImpactBento.js](src/components/ImpactBento.js#L1-L111), mentre i dati sono in [src/config.json](src/config.json#L1-L190).

### Rischi

- Le bandiere dipendono da una mappa manuale `countryFlags`.
- L’elenco dei paesi viene mantenuto in italiano anche nelle versioni inglese e spagnola.
- I valori di impatto sono contenuti in un file statico senza fonte, data di aggiornamento o validazione.
- La chiave `IMPACT_TITLE` esiste nelle traduzioni, ma non sembra essere utilizzata nel componente.

## 1.6 Storie e progetti

Sono presenti sei storie:

- `story_1`;
- `story_2`;
- `story_3`;
- `story_4`;
- `story_5`;
- `story_6`.

Ogni storia include:

- immagine;
- titolo;
- sottotitolo;
- località;
- contenuto HTML in tre lingue;
- eventuale allegato esterno.

Le card sono generate dinamicamente da `config.stories` in [src/components/Stories.js](src/components/Stories.js#L1-L48).

Il dialog:

- si apre cliccando una card;
- mostra immagine, titolo, località e sottotitolo;
- carica dinamicamente il file `ITA.html`, `ENG.html` o `ESP.html`;
- visualizza il contenuto HTML;
- supporta un eventuale allegato esterno;
- consente di aprire l’immagine in una nuova scheda.

La parte di caricamento è in [src/components/Stories.js](src/components/Stories.js#L133-L159), mentre il rendering HTML è in [src/components/Stories.js](src/components/Stories.js#L230-L250).

### Rischio sicurezza principale

Il contenuto viene inserito tramite `dangerouslySetInnerHTML`:

[Rendering del contenuto HTML delle storie](src/components/Stories.js#L230-L250)

Oggi i file sono controllati dal repository, quindi il rischio è limitato al momento del commit. Tuttavia:

- non esiste sanitizzazione;
- qualsiasi HTML futuro inserito nei file potrebbe introdurre markup indesiderato o script;
- il processo editoriale descritto nel README incentiva la gestione di HTML libero.

Per un sito pubblico sarebbe preferibile sanitizzare il contenuto con una libreria come DOMPurify oppure limitare il formato a Markdown strutturato.

### Incoerenza con README

Il README descrive una struttura con `details.json` per ogni storia e un array `stories` con elementi come:

```json
{ "id": 5, "image": "nome-immagine.jpg" }
```

La struttura realmente utilizzata è diversa: metadati e contenuti sono definiti direttamente in [src/config.json](src/config.json#L1-L99), mentre sotto `public/stories/` risultano presenti file HTML ma non risultano presenti `details.json`.

Questa è una fonte concreta di errore per chi dovrà aggiornare i contenuti.

## 1.7 Partner

La sezione partner:

- legge l’elenco da `config.partners`;
- mostra due marquee orizzontali animati;
- duplica l’elenco per ottenere uno scrolling continuo;
- mette in pausa l’animazione al passaggio del mouse;
- collega ogni logo al sito del partner, quando presente;
- supporta partner senza URL;
- offre un dialog con l’elenco completo ordinato alfabeticamente.

L’implementazione è in [src/components/Partners.js](src/components/Partners.js#L1-L72).

Sono presenti numerosi partner, con immagini in `public/img/partner/`.

### Aspetti positivi

- gestione esplicita dei partner privi di sito;
- `rel="noopener noreferrer"` sui link esterni;
- alt text derivato dal nome del partner;
- rispetto di `prefers-reduced-motion` per l’animazione in [src/App.css](src/App.css#L344-L353).

### Aspetti da verificare

- Le immagini sono asset locali ma non risultano controlli automatici che garantiscano la corrispondenza tra nomi in `config.json` e file realmente esistenti.
- Il marquee duplica il numero di elementi, aumentando il numero di immagini renderizzate.
- I partner senza URL non hanno un comportamento interattivo equivalente.
- Sarebbe opportuno fornire controlli accessibili alternativi all’animazione automatica.

## 1.8 Modulo contatti

Il modulo include:

- nome;
- email;
- nazionalità;
- organizzazione;
- messaggio;
- limite massimo di 255 caratteri per campo;
- generazione di oggetto e corpo email;
- apertura del client di posta tramite `mailto:`.

La logica è in [src/components/Contacts.js](src/components/Contacts.js#L45-L144).

### Funzionamento effettivo

Il modulo non invia dati a un backend. Prepara soltanto un link `mailto:` verso l’indirizzo definito in [src/config.json](src/config.json#L147-L149).

### Rischi e difetti

- Non c’è validazione applicativa effettiva, nonostante alcuni campi abbiano `required`.
- Il pulsante può essere premuto anche con dati vuoti.
- Non c’è validazione del formato email.
- Il successo non è verificabile.
- Il client email può non essere configurato.
- `window.open()` può essere bloccato o comportarsi diversamente tra browser.
- I dati finiscono nel client email dell’utente e nel relativo provider.
- I nomi `sent`, `setSent`, `handleCloseSnack`, `Snackbar` e `Alert` risultano inutilizzati o incompleti.
- Il limite di 255 caratteri per il messaggio è probabilmente troppo restrittivo per un modulo di contatto.
- La logica di trimming è contenuta in un `useEffect` che modifica lo stesso stato osservato, rendendo il flusso più complesso del necessario.

Per una soluzione professionale sarebbe preferibile un endpoint serverless o un servizio form con:

- validazione server-side;
- protezione antispam;
- rate limiting;
- messaggio di conferma;
- logging minimo e conforme alla privacy.

## 1.9 Download e documenti

Il footer apre un dialog con i file definiti in `config.downloads`.

Sono supportati:

- PDF;
- ZIP;
- link esterni;
- visualizzazione in nuova scheda dei file non ZIP;
- download tramite icona;
- link esterni tramite icona dedicata.

La configurazione è in [src/config.json](src/config.json#L100-L145), mentre il componente usato effettivamente è [src/components/DownloadDialog.js](src/components/DownloadDialog.js#L1-L98).

I documenti locali presenti in `public/files/` includono:

- policy per minori;
- report ZIP;
- privacy policy nelle tre lingue.

### Problemi rilevati

- Esiste una seconda implementazione quasi duplicata in [src/pages/DownloadDialog.js](src/pages/DownloadDialog.js#L1-L98).
- Il file sotto `src/pages/` utilizza `React.useContext` ma non importa `React`; al momento non è importato dal percorso principale, quindi non produce necessariamente un errore nella build, ma è codice fragile.
- Il comportamento dell’attributo `download` sui link esterni non è sempre coerente tra browser.
- Il link Canva presente nella configurazione punta a un URL di modifica, non necessariamente a un link pubblico in sola lettura.
- Il titolo e la descrizione del dialog sono hardcoded in italiano.
- Non risultano controlli automatici su file mancanti, nomi con spazi o link non più validi.

## 1.10 Footer e informazioni legali

Il footer include:

- pulsante contatti;
- logo;
- Instagram;
- Facebook;
- YouTube;
- X;
- pulsante download;
- privacy policy localizzata;
- codice fiscale;
- PEC;
- OID.

È implementato in [src/components/Footer.js](src/components/Footer.js#L1-L105).

Le privacy policy sono documenti HTML autonomi in:

- [public/files/privacy-ITA.html](public/files/privacy-ITA.html);
- [public/files/privacy-ENG.html](public/files/privacy-ENG.html);
- [public/files/privacy-ESP.html](public/files/privacy-ESP.html).

La privacy policy dichiara:

- assenza di analytics;
- assenza di cookie di profilazione;
- uso di `localStorage` per la lingua;
- presenza di link esterni;
- uso di `mailto:`;
- hosting su GitHub Pages.

La validità legale effettiva deve comunque essere verificata dal titolare o da un consulente privacy.

---

# 2. Aspetti tecnici

## 2.1 Stack

Il progetto usa:

- React 18;
- React DOM 18;
- Create React App tramite `react-scripts` 5.0.1;
- Material UI 5;
- Emotion;
- React Router DOM 6;
- React Helmet, apparentemente installato ma non utilizzato;
- Testing Library;
- `web-vitals`;
- `gh-pages`.

Le dipendenze e gli script sono in [package.json](package.json#L1-L58).

## 2.2 Build e deployment

Il deployment è configurato tramite:

```text
npm run build
npm run deploy
```

Lo script di deploy usa `gh-pages -d build`, come indicato in [package.json](package.json#L27-L33).

Sono presenti:

- directory `build/`;
- directory `public/`;
- file `CNAME` in entrambi gli alberi;
- dominio `wearemoh.it` nei file CNAME;
- `homepage` in package.json impostata a `https://moh-website.it`.

### Rischio di configurazione

C’è una discrepanza importante:

- [public/CNAME](public/CNAME) contiene `wearemoh.it`;
- [build/CNAME](build/CNAME) contiene `wearemoh.it`;
- [package.json](package.json#L4) contiene `https://moh-website.it`;
- [public/index.html](public/index.html#L8-L16) usa `https://wearemoh.it/`.

Il dominio canonico e quello GitHub Pages sembrano essere `wearemoh.it`; `homepage` dovrebbe essere verificata e probabilmente allineata.

Inoltre, mantenere `build/` versionata accanto a `src/` e `public/` crea il rischio che l’artefatto pubblicato non corrisponda al sorgente corrente.

## 2.3 Routing

Viene utilizzato `BrowserRouter`, ma l’applicazione ha una sola route wildcard:

[Route wildcard](src/App.js#L20-L31)

Per il sito attuale il routing non è realmente necessario. Se in futuro verranno aggiunte route come `/download` o `/stories/story_1`, GitHub Pages dovrà essere configurato per gestire correttamente i fallback SPA; altrimenti il caricamento diretto di una sottopagina può restituire 404.

La privacy policy è invece un file HTML statico e non una route React.

## 2.4 SEO e metadati

Sono già presenti in [public/index.html](public/index.html#L1-L43):

- `description`;
- canonical;
- Open Graph base;
- titolo;
- JSON-LD Organization;
- favicon;
- manifest.

Aspetti positivi:

- il contenuto istituzionale è coerente;
- i social principali sono inclusi nel JSON-LD;
- il dominio canonical è esplicito.

Miglioramenti necessari:

- aggiungere immagini Open Graph e Twitter/X card;
- aggiungere `og:locale` e varianti multilingua;
- aggiornare dinamicamente title e meta description per lingua;
- aggiungere eventuali `hreflang`;
- valutare sitemap XML;
- verificare la configurazione del dominio e Search Console;
- aggiornare il manifest, che contiene ancora valori generici Create React App in [public/manifest.json](public/manifest.json#L1-L29);
- sostituire `short_name: "React App"` e `name: "Create React App Sample"`.

## 2.5 Accessibilità

Sono presenti alcuni elementi corretti:

- `alt` sui loghi partner;
- `aria-label` su diversi controlli;
- dialog Material UI;
- supporto a `prefers-reduced-motion`;
- `rel="noopener noreferrer"` sui link esterni.

Restano però criticità:

- il contatto è un `Paper` cliccabile, non un vero bottone;
- alcune icone chiudi sono rese cliccabili direttamente senza un controllo semantico completo;
- il `SpeedDial` ha un’`ariaLabel` generica;
- l’animazione marquee può creare problemi di leggibilità o movimento;
- alcuni testi sono visualizzati con contrasto ridotto;
- la struttura semantica degli heading dovrebbe essere verificata;
- il contenuto HTML delle storie non è normalizzato;
- non è evidente una gestione completa del focus quando i dialog vengono aperti e chiusi;
- non risultano test automatici di accessibilità.

## 2.6 Qualità del codice

Il codice è generalmente leggibile e relativamente semplice, ma presenta segnali di debito tecnico:

- componenti duplicati per i download;
- import inutilizzati;
- variabili e stato inutilizzati;
- `console.log` residui;
- stili inline mescolati a CSS globale e `sx`;
- commenti di codice disattivato;
- breakpoint duplicati;
- `useEffect` usati per logica che potrebbe essere espressa direttamente;
- assenza di tipi o schema per `config.json`;
- assenza di validazione della configurazione;
- nessuna separazione netta tra contenuti e componenti per tutte le sezioni;
- assenza di una strategia per errori di caricamento degli asset;
- nessuna gestione esplicita dello stato di loading delle storie.

## 2.7 Test

Il test presente in [src/App.test.js](src/App.test.js#L1-L8) è ancora quello standard di Create React App:

```js
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

È quasi certamente non coerente con l’applicazione attuale e dovrebbe fallire perché non esiste più il testo “learn react”.

Questa è la principale lacuna tecnica immediatamente evidente.

Non risultano test per:

- cambio lingua;
- persistenza della lingua;
- apertura e chiusura dialog;
- caricamento storie;
- errori HTTP;
- download;
- link partner;
- modulo contatti;
- responsive behavior;
- accessibilità;
- presenza degli asset;
- coerenza delle traduzioni.

## 2.8 Gestione degli asset

Gli asset sono distribuiti tra:

- `src/img`;
- `src/fonts`;
- `public/img`;
- `public/files`;
- `public/stories`;
- `build/static`.

Questa separazione è legittima, ma deve essere documentata chiaramente:

- gli asset importati da `src` vengono processati dal bundler;
- gli asset sotto `public` vengono serviti direttamente;
- i riferimenti usano `process.env.PUBLIC_URL`.

Sono presenti immagini non apparentemente utilizzate o riferimenti storici, come diversi file `fullbody*.jpg`, `banner_green.png` e `banner_white.png`. Sarebbe utile eseguire un audit degli asset e rimuovere quelli inutilizzati.

---

# 3. User stories e requisiti funzionali deducibili

## Utente pubblico

### US-01 – Consultazione del sito

Come visitatore, voglio comprendere chi è MOH e quali attività svolge, così da valutarne missione e impatto.

**Criteri deducibili:**

- la homepage deve caricarsi senza autenticazione;
- devono essere visibili missione, aree di attività e dati di impatto;
- il layout deve essere utilizzabile da desktop e mobile.

### US-02 – Cambio lingua

Come visitatore internazionale, voglio scegliere italiano, inglese o spagnolo, così da leggere i contenuti nella mia lingua.

**Criteri:**

- il cambio lingua deve aggiornare l’interfaccia;
- la preferenza deve essere mantenuta tra visite;
- le storie devono caricarsi nella lingua selezionata;
- il fallback deve essere prevedibile in caso di traduzione mancante.

### US-03 – Consultazione delle storie

Come visitatore, voglio aprire una storia e leggerne contenuti, immagini, luogo e sottotitolo.

**Criteri:**

- ogni card deve essere apribile;
- il dialog deve mostrare contenuto e immagine;
- il testo deve essere disponibile nelle tre lingue;
- gli errori di caricamento devono essere gestiti con un messaggio comprensibile.

### US-04 – Accesso agli allegati

Come visitatore, voglio aprire eventuali documenti o materiali associati a una storia.

**Criteri:**

- il pulsante deve apparire solo se l’allegato esiste;
- il link deve aprirsi in sicurezza;
- il link deve essere verificato periodicamente.

### US-05 – Consultazione dei partner

Come visitatore, voglio vedere i partner di MOH e visitare i loro siti.

**Criteri:**

- i partner devono avere nome e logo;
- i partner con URL devono essere cliccabili;
- quelli senza URL devono restare visualizzabili;
- l’elenco completo deve essere accessibile senza dipendere solo dal marquee.

### US-06 – Download documenti

Come visitatore, voglio visualizzare o scaricare policy, report e materiali pubblici.

**Criteri:**

- i documenti devono essere presenti;
- PDF e ZIP devono avere comportamento coerente;
- i link esterni devono essere distinti dai download locali;
- gli errori di file mancante devono essere evitati.

### US-07 – Contatti

Come visitatore, voglio contattare MOH tramite un modulo.

**Criteri minimi attuali:**

- compilazione dei campi;
- validazione dei campi obbligatori;
- apertura del client email;
- messaggio precompilato.

**Requisito di produzione consigliato:**

- invio affidabile senza dipendere dal client email locale;
- protezione antispam;
- conferma di invio;
- informativa privacy coerente.

### US-08 – Consultazione della privacy policy

Come visitatore, voglio leggere l’informativa nella lingua selezionata.

**Criteri:**

- il link deve puntare al documento della lingua corrente;
- il documento deve essere raggiungibile direttamente;
- il contenuto deve essere verificato legalmente.

### US-09 – Accesso ai social

Come visitatore, voglio raggiungere i profili social ufficiali di MOH.

**Criteri:**

- i link devono essere validi;
- devono aprirsi in una nuova scheda;
- gli account devono essere realmente ufficiali.

## Amministratore/editor dei contenuti

### US-10 – Aggiunta di una storia

Come editor, voglio aggiungere una storia modificando configurazione, immagine e file HTML.

### US-11 – Aggiunta di un partner

Come editor, voglio aggiungere un partner tramite un record di configurazione e un’immagine.

### US-12 – Aggiornamento dei documenti

Come editor, voglio aggiungere file locali o link esterni all’elenco download.

### US-13 – Aggiornamento delle traduzioni

Come editor, voglio modificare i testi dell’interfaccia in un unico file.

Queste user story sono supportate dal README, ma il README deve essere aggiornato per rispecchiare la struttura reale.

---

# 4. Qualità e debito tecnico

## Criticità alte

### Test automatico non aggiornato

Il test Create React App probabilmente fallisce e non verifica funzionalità reali.

**Impatto:** la pipeline non può fornire fiducia sulla regressione.

### `dangerouslySetInnerHTML`

Il contenuto HTML delle storie non viene sanitizzato.

**Impatto:** rischio XSS se il repository o il processo editoriale viene compromesso o se contenuti non fidati vengono inseriti.

### Modulo contatti non realmente transazionale

Il modulo apre `mailto:` senza validazione completa e senza conferma di invio.

**Impatto:** affidabilità bassa e rischio di perdita delle richieste.

### Duplicazione del componente download

Sono presenti due implementazioni quasi identiche.

**Impatto:** divergenza funzionale e manutenzione duplicata.

### README non allineato

La documentazione descrive `details.json` e una struttura che non corrisponde all’implementazione reale.

**Impatto:** elevato rischio di errore durante gli aggiornamenti dei contenuti.

## Criticità medie

- `homepage` incoerente con il dominio in CNAME e canonical.
- Manifest ancora basato sul template CRA.
- Asset e link non verificati automaticamente.
- Traduzioni non validate.
- Stato di loading/error delle storie poco visibile.
- Presenza di log in produzione.
- Assenza di test reali.
- Assenza di linting e quality gate espliciti in CI.
- Nessuna verifica automatica dei link esterni.
- Build versionata potenzialmente non sincronizzata con `src`.

## Criticità basse

- import inutilizzati;
- commenti di codice obsoleto;
- componenti e naming non sempre coerenti;
- stili distribuiti in più sistemi;
- componenti con responsabilità miste;
- testo alternativo e semantica migliorabili;
- presenza di file probabilmente inutilizzati.

---

# 5. Attività necessarie per portare il sito in produzione

## Area A – Verifica build e deployment

1. installazione pulita delle dipendenze;
2. esecuzione della build;
3. verifica che la build pubblicata corrisponda al sorgente;
4. verifica dominio `wearemoh.it`;
5. verifica HTTPS;
6. verifica CNAME;
7. verifica asset con spazi nei nomi;
8. verifica funzionamento da root e da URL diretti;
9. verifica cache e invalidazione asset;
10. decisione se versionare o rimuovere `build/`.

## Area B – Correzione funzionale

1. aggiornare o sostituire `App.test.js`;
2. rimuovere la duplicazione del download dialog;
3. aggiungere validazione del modulo contatti;
4. gestire stati `loading`, `success` ed `error`;
5. verificare tutti i link esterni;
6. verificare tutti i documenti;
7. verificare tutte le immagini partner e storie;
8. aggiungere fallback per traduzioni mancanti;
9. correggere testi non localizzati;
10. allineare README e struttura effettiva.

## Area C – Sicurezza e privacy

1. sanitizzare l’HTML delle storie;
2. verificare gli URL esterni;
3. decidere se usare un servizio form o backend serverless;
4. definire protezione antispam;
5. verificare trattamento e conservazione delle richieste;
6. fare validare la privacy policy;
7. controllare eventuali dati personali presenti nei documenti pubblici;
8. verificare permessi degli allegati Canva e di altri servizi esterni.

## Area D – Accessibilità

1. audit tastiera;
2. audit screen reader;
3. verifica focus sui dialog;
4. trasformazione degli elementi cliccabili non semantici in bottoni;
5. controllo contrasto;
6. gestione `prefers-reduced-motion`;
7. aggiornamento aria-label;
8. verifica heading hierarchy;
9. verifica form error messages;
10. test con VoiceOver su macOS e browser principali.

## Area E – QA responsive e cross-browser

Test su:

- Safari macOS;
- Chrome macOS;
- Firefox;
- Safari iOS;
- Chrome Android;
- larghezze 320px, 375px, 768px, 1024px e desktop;
- zoom browser al 200%;
- connessione lenta;
- JavaScript disabilitato;
- `prefers-reduced-motion`;
- client email assente;
- link e file non raggiungibili.

## Area F – SEO e metadati

1. aggiornare manifest;
2. allineare `homepage`;
3. aggiungere Open Graph image;
4. aggiungere Twitter/X card;
5. valutare sitemap;
6. verificare Search Console;
7. aggiungere gestione multilingua SEO;
8. controllare canonical e dominio;
9. ottimizzare immagini e font;
10. verificare Lighthouse.

## Area G – DevOps e manutenzione

1. aggiungere lockfile se assente;
2. definire versione Node supportata;
3. aggiungere GitHub Actions;
4. eseguire build automatica;
5. eseguire test automatici;
6. controllare link e asset;
7. aggiungere preview per pull request;
8. definire procedura di rollback;
9. documentare deploy;
10. definire proprietari e frequenza di aggiornamento dei contenuti.

---

# 6. Stima per un singolo sviluppatore senior

Le stime assumono:

- progetto statico senza autenticazione;
- contenuti forniti dal committente;
- nessuna riscrittura completa in Next.js o altro framework;
- nessun backend complesso;
- accesso al repository, GitHub Pages e dominio;
- verifica manuale sui principali browser;
- eventuale servizio form semplice, non backend enterprise.

## 6.1 MVP attuale: messa in esercizio dell’implementazione esistente

| Area | Ore |
|---|---:|
| Comprensione finale e inventario asset | 3–5 |
| Installazione, build e verifica deploy | 3–5 |
| Verifica dominio/CNAME/homepage | 1–2 |
| Correzioni bloccanti minime | 3–6 |
| Verifica manuale homepage, dialog, download e link | 4–8 |
| Correzione test CRA residuo | 2–4 |
| Aggiornamento minimo README | 2–4 |
| **Totale MVP operativo** | **18–34** |

Questo risultato rappresenta un **MVP statico pubblicabile**, non ancora un prodotto completamente hardenizzato.

## 6.2 Hardening e QA per produzione

| Area | Ore |
|---|---:|
| Test funzionali React e component test | 8–14 |
| QA responsive e cross-browser | 8–14 |
| Accessibilità e tastiera/screen reader | 6–10 |
| Revisione modulo contatti | 6–12 |
| Sicurezza HTML e link esterni | 4–8 |
| Validazione configurazione, asset e traduzioni | 5–9 |
| SEO, manifest e metadati | 3–6 |
| Pulizia codice e rimozione duplicazioni | 5–9 |
| CI/CD e quality gate | 4–8 |
| Privacy/legal review tecnica | 2–4 |
| **Totale hardening/QA** | **51–94** |

## 6.3 Totale core consigliato

| Scenario | Ore |
|---|---:|
| MVP operativo minimo | 18–34 |
| Hardening/QA | 51–94 |
| **Totale per una produzione ragionevolmente affidabile** | **69–128** |

Una stima realistica centrale è quindi circa **90 ore**, equivalenti a:

- 11–12 giornate da 8 ore;
- oppure 2–3 settimane lavorative considerando revisioni, attese e validazioni esterne.

## 6.4 Attività opzionali

| Attività opzionale | Ore |
|---|---:|
| Backend/serverless per contatti | 12–24 |
| CAPTCHA o protezione antispam avanzata | 4–10 |
| CMS/headless CMS per storie e partner | 30–70 |
| Migrazione a framework con routing/SEO avanzato | 30–60 |
| Ottimizzazione immagini e performance approfondita | 8–16 |
| Dashboard o analytics privacy-friendly | 6–14 |
| Sistema di validazione contenuti/editoriale | 12–25 |
| Internazionalizzazione più strutturata | 10–20 |
| **Totale opzionali possibili** | **112–239** |

Non è necessario implementare tutte le attività opzionali per il sito attuale. Il CMS, in particolare, sarebbe giustificato soltanto se gli aggiornamenti dei contenuti diventassero frequenti o gestiti da persone non tecniche.

---

# 7. Priorità consigliata

## Prima della pubblicazione

1. verificare build e deployment reale;
2. allineare `homepage`, CNAME e dominio;
3. sostituire il test CRA;
4. verificare tutti gli asset;
5. verificare tutti i documenti e link esterni;
6. rimuovere o correggere il componente download duplicato;
7. testare il modulo contatti su Safari, Chrome e mobile;
8. verificare le sei storie in tutte le lingue;
9. controllare il contenuto delle privacy policy;
10. aggiornare il manifest.

## Subito dopo

1. sanitizzare il contenuto HTML;
2. introdurre test component e smoke test;
3. completare audit accessibilità;
4. aggiungere CI;
5. aggiungere gestione esplicita degli errori;
6. eliminare log e codice morto;
7. aggiornare completamente il README.

## Solo se necessario

1. sostituire `mailto:` con un servizio form;
2. introdurre CMS;
3. migrare da Create React App;
4. aggiungere analytics;
5. aggiungere routing applicativo reale.

---

# 8. Assunzioni e limiti dell’analisi

- L’analisi è stata svolta in sola lettura.
- Non è stata eseguita una verifica visuale interattiva in browser.
- Non è stata eseguita una build o una pubblicazione reale.
- La diagnostica statica della directory `src` non ha riportato errori.
- Non è stato possibile certificare la raggiungibilità dei link esterni.
- Non è stata verificata la correttezza legale delle privacy policy.
- Non è stata verificata l’effettiva disponibilità del client email dell’utente.
- La stima non include produzione di nuovi contenuti, traduzioni professionali, attività grafiche o consulenza legale.
- Si assume che GitHub Pages e il dominio siano già configurati e accessibili al team.
- Si assume che il sito debba rimanere una landing page statica, senza area amministrativa.

## Valutazione finale

**Stato funzionale:** buono per un sito istituzionale statico iniziale.  
**Stato tecnico:** discreto, ma con debito evidente nella qualità dei test, nella duplicazione del codice e nella gestione dei contenuti HTML.  
**Stato production-ready:** parziale.  
**Rischi principali:** test non aggiornati, `dangerouslySetInnerHTML`, modulo contatti basato su `mailto:`, incoerenza tra README e implementazione, possibile divergenza tra build e sorgente, configurazione dominio non completamente allineata.  
**Stima consigliata:** circa **69–128 ore** per una messa in produzione affidabile, con valore centrale di circa **90 ore** per un singolo sviluppatore senior.