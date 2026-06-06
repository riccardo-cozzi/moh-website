# MOH Website

## Testi multi-lingua

Tutti i testi visibili nel sito si trovano in `src/multilang/Texts.js`.  
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

---

## Aggiungere una storia alla sezione "Our stories"

1. Copia l'immagine in `public/img/storiesImages/`
2. Aggiungi una riga nell'array `stories` in `src/config.json`:
   ```json
   { "id": 5, "image": "nome-immagine.jpg" }
   ```
3. Aggiungi le chiavi corrispondenti in `src/multilang/Texts.js`:
   ```js
   "story_5_title":    { "ITA": "...", "ENG": "...", "ESP": "..." },
   "story_5_subtitle": { "ITA": "...", "ENG": "...", "ESP": "..." },
   "story_5_location": { "ITA": "...", "ENG": "...", "ESP": "..." },
   "story_5":          { "ITA": "...", "ENG": "...", "ESP": "..." },
   ```
4. Deploya con `npm run deploy`

Per rimuovere una storia: rimuovi la riga da `stories` in `src/config.json` (le chiavi in `Texts.js` possono restare).

---


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
cd src
npm start
```

## Deploying to GitHub Pages
```
npm run deploy
```