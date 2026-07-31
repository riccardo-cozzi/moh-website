import { Languages } from './Languages';

export const getText = (id, lang) => {
    // if (!Languages.all().map(l => l.id).includes(lang)) {
    //     throw new Error(`Language ${lang} not supported`);
    // }
    // console.log(`[DEBUG] all languages:  ${Languages.all().map(l => l.id)}`)
    return texts[id][lang];
}

const texts = {

    // --- TITLES
    "about_us_title": {
        "ITA": "Chi siamo",
        "ENG": "About us",
        "ESP": "Sobre nosotros"
    },
    "our_stories_title": {
        "ITA": "Le nostre storie",
        "ENG": "Our stories",
        "ESP": "Nuestras historias"
    },
    "our_partnerships_title": {
        "ITA": "I nostri partner",
        "ENG": "Our partnerships",
        "ESP": "Nuestras asociaciones"
    },

     // --- ABOUT US ---
    "about_us_content": {
        "ITA": "Il nome MOH è una parola che unisce due lingue: sanscrito e dialetto Barese. \"Moh!\" è stupore, è meraviglia, è quell'esclamazione spontanea che diciamo quando iniziamo a guardare il mondo da un'altra prospettiva.",
        "ENG": "The name MOH is a word that unites two languages: Sanskrit and Barese. \"Moh!\" is amazement, it is wonder, it is that spontaneous exclamation we say when we start looking at the world from another perspective.",
        "ESP": "El nombre MOH es una palabra que une dos idiomas: sánscrito y barese. \"Moh!\" es asombro, es maravilla, es esa exclamación espontánea que decimos cuando empezamos a mirar el mundo desde otra perspectiva."
    },

    // --- INFOBOX ---
    "mobility_info_title": {
        "ITA": "Mobilità giovanile ed educazione non formale",
        "ENG": "Youth mobility and non-formal education",
        "ESP": "Movilidad juvenil y educación no formal"
    },
    "sustainability_info_title": {
        "ITA": "Sostenibilità e tutela dell'ambiente",
        "ENG": "Sustainability and environmental protection",
        "ESP": "Sostenibilidad y protección del medio ambiente"
    },
    
    "mobility_info_text": {
        "ITA": "Accompagniamo giovani e youth worker nello sviluppo di competenze personali e professionali, favorendo il dialogo interculturale, la partecipazione e la cittadinanza europea.",
        "ESP": "Acompañamos a jóvenes y trabajadores juveniles en el desarrollo de competencias personales y profesionales, fomentando el diálogo intercultural, la participación y la ciudadanía europea.",
        "ENG": "We support young people and youth workers in developing personal and professional skills, fostering intercultural dialogue, participation and European citizenship."
    },
    "sustainability_info_text": {
        "ITA": "Promuoviamo una cultura della sostenibilità attraverso percorsi educativi dedicati al cambiamento climatico, alla biodiversità, agli stili di vita sostenibili e alla cittadinanza ecologica.",
        "ESP": "Promovemos una cultura de sostenibilidad a través de programas educativos dedicados al cambio climático, la biodiversidad, los estilos de vida sostenibles y la ciudadanía ecológica.",
        "ENG": "We promote a culture of sustainability through educational programs dedicated to climate change, biodiversity, sustainable lifestyles and ecological citizenship."
    },

    "inclusion_info_title": {
        "ITA": "Inclusione, diritti umani e partecipazione",
        "ENG": "Inclusion, human rights and participation",
        "ESP": "Inclusión, derechos humanos y participación"
    },
    "inclusion_info_text": {
        "ITA": "Promuoviamo la diversità, il dialogo interculturale e la partecipazione, creando spazi inclusivi in cui ogni giovane possa sentirsi accolto e valorizzato, indipendentemente dal proprio background sociale, culturale o economico.",
        "ESP": "Promovemos la diversidad, el diálogo intercultural y la participación, creando espacios inclusivos en los que cada joven pueda sentirse acogido y valorado, independientemente de su origen social, cultural o económico.",
        "ENG": "We promote diversity, intercultural dialogue and participation, creating inclusive spaces where every young person can feel welcomed and valued, regardless of their social, cultural or economic background."
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

