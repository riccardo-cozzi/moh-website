# MOH Website

## Testi multi-lingua

I testi del sito si dividono in due categorie con approcci diversi.

### Testi dell'interfaccia (Texts.js)

I testi di UI (navbar, infobox, form contatti, pulsanti, ecc.) si trovano in `src/multilang/Texts.js`.  
Le lingue supportate sono **ITA**, **ENG**, **ESP** (definite in `src/multilang/Languages.js`).

Ogni testo è identificato da una chiave e contiene una versione per ogni lingua:
```js
"nome_chiave": {
    "ITA": "Testo in italiano",
    "ENG": "Text in English",
    "ESP": "Texto en español"
}
```

Il componente recupera il testo corretto in base alla lingua selezionata dall'utente:
```js
getText("nome_chiave", language.id)
```

**Per modificare un testo esistente:** cerca la chiave in `src/multilang/Texts.js` e modifica il valore nella lingua desiderata.

**Per aggiungere un nuovo testo:**
1. Aggiungi una nuova chiave in `src/multilang/Texts.js` con le tre traduzioni
2. Usa `getText("nome_chiave", language.id)` nel componente React dove vuoi mostrarlo
3. Deploya con `npm run deploy`

### Testi delle storie

I testi delle storie **non** si trovano in `Texts.js` ma in file dedicati dentro `public/stories/`.  
Ogni storia ha la propria cartella con questa struttura:

```
public/stories/
└── story_1/
    ├── details.json   ← titolo, sottotitolo, luogo (nelle 3 lingue)
    ├── ITA.html       ← corpo della storia in italiano (può contenere HTML formattato)
    ├── ENG.html
    └── ESP.html
```

**`details.json`** contiene i metadati:
```json
{
  "title":    { "ITA": "...", "ENG": "...", "ESP": "..." },
  "subtitle": { "ITA": "...", "ENG": "...", "ESP": "..." },
  "location": { "ITA": "...", "ENG": "...", "ESP": "..." }
}
```

**`ITA.html` / `ENG.html` / `ESP.html`** contengono il corpo della storia come HTML libero:
```html
<h3>Titolo sezione</h3>
<p>Paragrafo con <strong>grassetto</strong>.</p>
<ul>
  <li>Punto elenco</li>
</ul>
```

I file HTML vengono caricati dinamicamente dal browser e iniettati nel dialog della storia.

---

## Aggiungere una storia alla sezione "Our stories"

1. Copia l'immagine in `public/img/storiesImages/`
2. Aggiungi una riga nell'array `stories` in `src/config.json`:
   ```json
   { "id": 5, "image": "nome-immagine.jpg" }
   ```
3. Crea la cartella `public/stories/story_5/` con i file:
   - `details.json` con titolo, sottotitolo e luogo nelle 3 lingue
   - `ITA.html`, `ENG.html`, `ESP.html` con il corpo della storia
4. Deploya con `npm run deploy`

Per rimuovere una storia: rimuovi la riga da `stories` in `src/config.json` e cancella la cartella `public/stories/story_N/`.

---

## Aggiungere un partner alla sezione "Partners"

1. Copia l'immagine in `src/img/partner/`
2. Importare il file immagine in `PartnerInfo.js`:
   ```javascript
   import XXX from '../img/partner/XXX.png';
   ```
3. Aggiungi una riga nell'oggetto `partnerInfo` in `PartnerInfo.js`:
   ```javascript
   XXX: {
       src: XXX,
       alt: "Nome completo del partner",
       url: "https://link-al-sito-del-partner.com"
   }
   ```


## Aggiornare i file scaricabili dalla pagina `/download`

1. Copia il nuovo file in `public/files/`
2. Aggiungi una riga nell'array `downloads` in `src/config.json`:
   ```json
   { "file": "nome-file.pdf", "label": "Etichetta del bottone" }
   ```
3. Deploya con `npm run deploy`

Per rimuovere un file: elimina il file da `public/files/` e rimuovi la riga corrispondente da `src/config.json`.


## Running the app
```
npm start
```

## Deploying to GitHub Pages
```
npm run deploy
```