export class Languages {
    constructor() {
        throw Error("Class Languages is abstract. You can use its methods in a static way, as Languages.<methodName()>")
    }

    static ITA = { id: "ITA", label:"Italiano", flag: "🇮🇹"}
    static ENG = { id: "ENG", label:"English", flag: "🇬🇧"}
    static ESP = { id: "ESP", label: "Español", flag: "🇪🇸"}

    static all() {
        return [
            Languages.ITA, 
            Languages.ENG,
            Languages.ESP
        ]
    }
}