import {Languages} from './Languages';

export const getText = (id, lang) => {
    // if (!Languages.all().map(l => l.id).includes(lang)) {
    //     throw new Error(`Language ${lang} not supported`);
    // }
    // console.log(`[DEBUG] all languages:  ${Languages.all().map(l => l.id)}`)
    return texts[id][lang];
}

const texts = {
   
    // --- INFOBOX ---
    "infobox_1": {
        "ITA": "Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. ",
        "ESP": "Miralo que se avecina A la vuelta de la esquina Viene Diego rumbeando Con la luna en las pupilas Y su traje agua marina Van restos de contrabando",
        "ENG":  "This is a test text in English. If you change the language selector this text will be translated into the language of your choice."
    },
    "infobox_2": {
        "ITA": "Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. ",
        "ESP": "Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. ",
        "ENG":  "This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. "
    },
    "infobox_3": {
        "ITA": "Questo è un testo in italiano di prova. Se cambi il selettore della lingua questo testo verrà tradotto nella lingua a tua scelta.",
        "ESP": "Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. ",
        "ENG":  "This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses."
    },

    // --- CONTACTS ---
    "contact_dialog_description": {
        "ITA": "Compila il modulo per contattarci. Ti risponderemo il prima possibile.",
        "ENG": "Fill in the form to contact us. We will get back to you as soon as possible.",
        "ESP": "Rellena el formulario para contactarnos. Te responderemos lo antes posible."
    },
    "contact_field_name": {
        "ITA": "Nome",
        "ENG": "Name",
        "ESP": "Nombre"
    },
    "contact_field_email": {
        "ITA": "Indirizzo email",
        "ENG": "Email address",
        "ESP": "Correo electrónico"
    },
    "contact_field_nationality": {
        "ITA": "Nazionalità",
        "ENG": "Nationality",
        "ESP": "Nacionalidad"
    },
    "contact_field_organisation": {
        "ITA": "Organizzazione",
        "ENG": "Organisation",
        "ESP": "Organización"
    },
    "contact_field_message": {
        "ITA": "Il tuo messaggio",
        "ENG": "Your message",
        "ESP": "Tu mensaje"
    },
    "contact_send_button": {
        "ITA": "Invia",
        "ENG": "Send",
        "ESP": "Enviar"
    },
    "contact_card_title": {
        "ITA": "Contattaci",
        "ENG": "Contact us",
        "ESP": "Contáctanos"
    },
    "story_close_button": {
        "ITA": "Chiudi",
        "ENG": "Close",
        "ESP": "Cerrar"
    },

}

