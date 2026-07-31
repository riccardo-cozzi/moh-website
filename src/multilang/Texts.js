export const TEXT_KEYS = Object.freeze({
    ABOUT_US_TITLE: 'about_us_title',
    OUR_STORIES_TITLE: 'our_stories_title',
    OUR_PARTNERSHIPS_TITLE: 'our_partnerships_title',
    SHOW_ALL_PARTNERS: 'show_all_partners',
    ABOUT_US_CONTENT: 'about_us_content',
    MOBILITY_INFO_TITLE: 'mobility_info_title',
    SUSTAINABILITY_INFO_TITLE: 'sustainability_info_title',
    MOBILITY_INFO_TEXT: 'mobility_info_text',
    SUSTAINABILITY_INFO_TEXT: 'sustainability_info_text',
    INCLUSION_INFO_TITLE: 'inclusion_info_title',
    INCLUSION_INFO_TEXT: 'inclusion_info_text',
    CONTACT_DIALOG_DESCRIPTION: 'contact_dialog_description',
    CONTACT_FIELD_NAME: 'contact_field_name',
    CONTACT_FIELD_EMAIL: 'contact_field_email',
    CONTACT_FIELD_NATIONALITY: 'contact_field_nationality',
    CONTACT_FIELD_ORGANISATION: 'contact_field_organisation',
    CONTACT_FIELD_MESSAGE: 'contact_field_message',
    CONTACT_SEND_BUTTON: 'contact_send_button',
    CONTACT_CARD_TITLE: 'contact_card_title',
    STORY_CLOSE_BUTTON: 'story_close_button',
    DOWNLOAD_FILE: 'download_file',
    OPEN_LINK: 'open_link',
    OPEN_ATTACHMENT: 'open_attachment',
});

export const getText = (id, lang) => {
    // if (!Languages.all().map(l => l.id).includes(lang)) {
    //     throw new Error(`Language ${lang} not supported`);
    // }
    // console.log(`[DEBUG] all languages:  ${Languages.all().map(l => l.id)}`)
    return texts[id][lang];
}

const texts = {

    // --- TITLES
    [TEXT_KEYS.ABOUT_US_TITLE]: {
        "ITA": "Chi siamo",
        "ENG": "About us",
        "ESP": "Sobre nosotros"
    },
    [TEXT_KEYS.OUR_STORIES_TITLE]: {
        "ITA": "Le nostre storie",
        "ENG": "Our stories",
        "ESP": "Nuestras historias"
    },
    [TEXT_KEYS.OUR_PARTNERSHIPS_TITLE]: {
        "ITA": "I nostri partner",
        "ENG": "Our partnerships",
        "ESP": "Nuestras asociaciones"
    },
    [TEXT_KEYS.SHOW_ALL_PARTNERS]: {
        "ITA": "Mostra tutti",
        "ENG": "Show all",
        "ESP": "Mostrar todos"
    },

     // --- ABOUT US ---
    [TEXT_KEYS.ABOUT_US_CONTENT]: {
        "ITA": "Il nome MOH è una parola che unisce due lingue: sanscrito e dialetto Barese. \"Moh!\" è stupore, è meraviglia, è quell'esclamazione spontanea che diciamo quando iniziamo a guardare il mondo da un'altra prospettiva.",
        "ENG": "The name MOH is a word that unites two languages: Sanskrit and Barese. \"Moh!\" is amazement, it is wonder, it is that spontaneous exclamation we say when we start looking at the world from another perspective.",
        "ESP": "El nombre MOH es una palabra que une dos idiomas: sánscrito y barese. \"Moh!\" es asombro, es maravilla, es esa exclamación espontánea que decimos cuando empezamos a mirar el mundo desde otra perspectiva."
    },

    // --- INFOBOX ---
    [TEXT_KEYS.MOBILITY_INFO_TITLE]: {
        "ITA": "Mobilità giovanile ed educazione non formale",
        "ENG": "Youth mobility and non-formal education",
        "ESP": "Movilidad juvenil y educación no formal"
    },
    [TEXT_KEYS.SUSTAINABILITY_INFO_TITLE]: {
        "ITA": "Sostenibilità e tutela dell'ambiente",
        "ENG": "Sustainability and environmental protection",
        "ESP": "Sostenibilidad y protección del medio ambiente"
    },
    
    [TEXT_KEYS.MOBILITY_INFO_TEXT]: {
        "ITA": "Accompagniamo giovani e youth worker nello sviluppo di competenze personali e professionali, favorendo il dialogo interculturale, la partecipazione e la cittadinanza europea.",
        "ESP": "Acompañamos a jóvenes y trabajadores juveniles en el desarrollo de competencias personales y profesionales, fomentando el diálogo intercultural, la participación y la ciudadanía europea.",
        "ENG": "We support young people and youth workers in developing personal and professional skills, fostering intercultural dialogue, participation and European citizenship."
    },
    [TEXT_KEYS.SUSTAINABILITY_INFO_TEXT]: {
        "ITA": "Promuoviamo una cultura della sostenibilità attraverso percorsi educativi dedicati al cambiamento climatico, alla biodiversità, agli stili di vita sostenibili e alla cittadinanza ecologica.",
        "ESP": "Promovemos una cultura de sostenibilidad a través de programas educativos dedicados al cambio climático, la biodiversidad, los estilos de vida sostenibles y la ciudadanía ecológica.",
        "ENG": "We promote a culture of sustainability through educational programs dedicated to climate change, biodiversity, sustainable lifestyles and ecological citizenship."
    },

    [TEXT_KEYS.INCLUSION_INFO_TITLE]: {
        "ITA": "Inclusione, diritti umani e partecipazione",
        "ENG": "Inclusion, human rights and participation",
        "ESP": "Inclusión, derechos humanos y participación"
    },
    [TEXT_KEYS.INCLUSION_INFO_TEXT]: {
        "ITA": "Promuoviamo la diversità, il dialogo interculturale e la partecipazione, creando spazi inclusivi in cui ogni giovane possa sentirsi accolto e valorizzato, indipendentemente dal proprio background sociale, culturale o economico.",
        "ESP": "Promovemos la diversidad, el diálogo intercultural y la participación, creando espacios inclusivos en los que cada joven pueda sentirse acogido y valorado, independientemente de su origen social, cultural o económico.",
        "ENG": "We promote diversity, intercultural dialogue and participation, creating inclusive spaces where every young person can feel welcomed and valued, regardless of their social, cultural or economic background."
    },

    // --- CONTACTS ---
    [TEXT_KEYS.CONTACT_DIALOG_DESCRIPTION]: {
        "ITA": "Compila il modulo per contattarci. Ti risponderemo il prima possibile.",
        "ENG": "Fill in the form to contact us. We will get back to you as soon as possible.",
        "ESP": "Rellena el formulario para contactarnos. Te responderemos lo antes posible."
    },
    [TEXT_KEYS.CONTACT_FIELD_NAME]: {
        "ITA": "Nome",
        "ENG": "Name",
        "ESP": "Nombre"
    },
    [TEXT_KEYS.CONTACT_FIELD_EMAIL]: {
        "ITA": "Indirizzo email",
        "ENG": "Email address",
        "ESP": "Correo electrónico"
    },
    [TEXT_KEYS.CONTACT_FIELD_NATIONALITY]: {
        "ITA": "Nazionalità",
        "ENG": "Nationality",
        "ESP": "Nacionalidad"
    },
    [TEXT_KEYS.CONTACT_FIELD_ORGANISATION]: {
        "ITA": "Organizzazione",
        "ENG": "Organisation",
        "ESP": "Organización"
    },
    [TEXT_KEYS.CONTACT_FIELD_MESSAGE]: {
        "ITA": "Il tuo messaggio",
        "ENG": "Your message",
        "ESP": "Tu mensaje"
    },
    [TEXT_KEYS.CONTACT_SEND_BUTTON]: {
        "ITA": "Invia",
        "ENG": "Send",
        "ESP": "Enviar"
    },
    [TEXT_KEYS.CONTACT_CARD_TITLE]: {
        "ITA": "Contattaci",
        "ENG": "Contact us",
        "ESP": "Contáctanos"
    },
    [TEXT_KEYS.STORY_CLOSE_BUTTON]: {
        "ITA": "Chiudi",
        "ENG": "Close",
        "ESP": "Cerrar"
    },
    [TEXT_KEYS.DOWNLOAD_FILE]: {
        "ITA": "Scarica il file",
        "ENG": "Download file",
        "ESP": "Descargar archivo"
    },
    [TEXT_KEYS.OPEN_LINK]: {
        "ITA": "Apri il link",
        "ENG": "Open link",
        "ESP": "Abrir el enlace"
    },
    [TEXT_KEYS.OPEN_ATTACHMENT]: {
        "ITA": "Apri l'allegato",
        "ENG": "Open attachment",
        "ESP": "Abrir el archivo adjunto"
    }

}

