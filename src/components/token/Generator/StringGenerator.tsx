import {PairOfCharacters} from "../PairOfCharacters";
import StringGeneratorSettings from "./StringGeneratorSettings";

export default class StringGenerator {

    private pairOfCharacters: PairOfCharacters;
    private generatorSettings: StringGeneratorSettings;

    constructor(PairOfCharacters: PairOfCharacters, GeneratorSettings: StringGeneratorSettings) {
        this.pairOfCharacters = PairOfCharacters;
        this.generatorSettings = GeneratorSettings;
    }

    generate(): string {
        const codeLength: number = this.generatorSettings.codeLength;
        let result: string = '';
        let counter: number = 0;

        const characters: string = this.pairOfCharacters.getPairsAsAString();
        const charactersLength: number = characters.length;

        while (counter < codeLength) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }

        return result;
    }


}

export const tokenGenerator = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}