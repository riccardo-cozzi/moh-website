import { Languages } from "./Languages"


/**
 * Container for all the texts, in all the available languages.
 * Example of use: 
 * ```
 * import { Texts } from "./multilingual/Texts";
 * import { Languages } from './multilingual/Languages';
 * 
 * language = Languages.ITA 
 * Texts.set(language)
 * 
 * console.log(Texts.get(Texts.PROVA))
 * ```
 */
export class Texts {

    constructor() {
        throw Error("Class Text is abstract. You can use its methods in a static way, as Texts.<methodName()>")
    }

    static usedLanguage = undefined

    /**
     * Set the language to use. Choose one of those provided by the class Languages:
     * ```
     * Language.ITA
     * Language.ENG 
     * Language.ESP
     * ```
     * @param {obj} language 
     */
    static set(language) {
        if (!Languages.all().includes(language)) {
            throw new Error(`[DEBUG] Texts.set()\nProvided language '${Texts.usedLanguage}' is not valid`)
        }
        Texts.usedLanguage = language.id
        console.log(`[DEBUG] language set to '${Texts.usedLanguage}'`)
    }

    /**
     * 
     * @param {obj} text You can use one of the texts provided from the calss Text:
     * @param {obj} language You can use one of the languages provided from the calss Languages:
     * ```
     *  Languages.ITA, 
        Languages.ENG,
        Languages.ESP
     * 
     * ```
     * @returns 
     */
    static get(text) {
        if (!Texts.usedLanguage) {
            throw new Error("[DEBUG] Texts.get()\nLanguage is not set. Please use Language.set() before accett the get() method")
        }
        try {
            return Texts.#allTexts[text][Texts.usedLanguage]
        } catch (error) {
            throw new Error(`[DEBUG] Texts.get()\nRequired text: ${text}\nLanguage '${Texts.usedLanguage}' is not valid. `)
        }
        
    }

    static _TEST                        = "TEST" //! ONLY FOR DEBUG
    static TITLE_MISSION                = "TITLE_MISSION"
    static TITLE_CONTACTS               = "TITLE_CONTACTS"
    static TITLE_PROJECTS               = "TITLE_PROJECTS"
    
    static FORM_FIRST_NAME              = "FORM_FIRST_NAME"
    static FORM_SUBMIT                  = "FORM_SUBMIT"
    static HEADER                       = "HEADER"
    static MISSION_CONTENT              = "MISSION_CONTENT"

    // story titles
    static FIRST_STORY_TITLE            = "FIRST_STORY"
    static SECOND_STORY_TITLE           = "SECOND_STORY"
    static THIRD_STORY_TITLE            = "THIRD_STORY"

    // story contents
    static FIRST_STORY_CONTENT          = "FIRST_STORY_CONTENT"
    static SECOND_STORY_CONTENT         = "SECOND_STORY_CONTENT"
    static THIRD_STORY_CONTENT          = "THIRD_STORY_CONTENT"



    static #allTexts = { 
        "TEST" : {
            "ITA": "Prova",
            "ENG": "Test",
            "ESP": "Burrito"
        },

        "TITLE_MISSION" : {
            "ITA": "La nostra missione",
            "ENG": "Our mission",
            "ESP": "..."
        },

        "TITLE_CONTACTS" : {
            "ITA": "Contatti",
            "ENG": "Contacts",
            "ESP": "..."
        },
        "TITLE_PROJECTS" : {
            "ITA": "Progetti",
            "ENG": "Projects",
            "ESP": "..."
        },

        "FORM_FIRST_NAME" : {
            "ITA": "Nome",
            "ENG": "Name",
            "ESP": "..."
        },
        "FORM_SUBMIT" : {
            "ITA": "Invia",
            "ENG": "Submit",
            "ESP": "..."
        },
        "HEADER" : {
            "ITA": "Qualcosa di breve e importante sulla raccolta di seguito: i suoi contenuti, il creatore, ecc. Rendilo breve e dolce, ma non troppo breve in modo che la gente non lo salti semplicemente del tutto.",
            "ENG": "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.",
            "ESP": "Algo breve y principal sobre la colección a continuación: su contenido, el creador, etc. Hágalo breve y dulce, pero no demasiado corto para que la gente no se lo salte por completo.",
        },
        "MISSION_CONTENT" : {
            "ITA": "Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni.  Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. ",
            "ENG": "This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses.",
            "ESP": "Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes.",
        },


        // STORY TITLES
        "FIRST_STORY_TITLE" : {
            "ITA": "Prima storia",
            "ENG": "First story",
            "ESP": "Primera historia",
        },
        "SECOND_STORY_TITLE" : {
            "ITA": "Seconda storia",
            "ENG": "Second story",
            "ESP": "Secunda historia",
        },
        "THIRD_STORY_TITLE" : {
            "ITA": "Prima storia",
            "ENG": "Third story",
            "ESP": "Tercera historia",
        },
        

        // STORY CONTENTS
        "FIRST_STORY_CONTENT" : {
            "ITA": "Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni.  Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. ",
            "ENG": "This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses.",
            "ESP": "Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes.",
        },
        "SECOND_STORY_CONTENT" : {
            "ITA": "Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni.  Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. ",
            "ENG": "This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses.",
            "ESP": "Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes.",
        },
        "THIRD_STORY_CONTENT" : {
            "ITA": "Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni.  Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. Questo è un testo di prova. Rosanna mettici tu qualcosa qui, io scrivo il codice, non il testo, il capo sei tu. Bacioni. ",
            "ENG": "This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses. This is a test text. Rosanna you put something here, I write the code, not the text, you are the boss. Big kisses.",
            "ESP": "Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes. Este es un texto de prueba. Rosanna tú pones algo aquí, yo escribo el código, no el texto, tú eres la jefa. Besotes.",
        },

    }

    
}