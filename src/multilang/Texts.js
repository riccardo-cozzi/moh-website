import {Languages} from './Languages';

export const getText = (id, lang) => {
    // if (!Languages.all().map(l => l.id).includes(lang)) {
    //     throw new Error(`Language ${lang} not supported`);
    // }
    console.log(`[DEBUG] all languages:  ${Languages.all().map(l => l.id)}`)
    return texts[id][lang];
}

const texts = {
    "text_1": {
        "ITA": "Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni.  Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. ",
        "ENG": "This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses.",
        "ESP": "Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes.",
    },
    "text_2": {
        "ITA": "Prova prova prova",
        "ENG": "test test test",
        "ESP": "prueba prueba prueba",
    },
}

