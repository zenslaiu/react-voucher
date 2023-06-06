import {PairOfCharacters} from "./PairOfCharacters";

export class DefaultPairOfCharacters extends PairOfCharacters {

    lowerCaseLetters: string = 'abcdefghijklmnopqrstuvwxyz';
    upperCaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    numbers: string = '0123456789';

    addUpperCaseCharacters: boolean = true;
    addLowerCaseCharacters: boolean = true;
    addNumbers: boolean = true;

    get charPairs(): {} {
        if (this.addUpperCaseCharacters) {
            this.addPair('UPPERCASE_LETTERS', this.upperCaseLetters);
        }

        if (this.addLowerCaseCharacters) {
            this.addPair('LOWERCASE_LETTERS', this.lowerCaseLetters);
        }

        if (this.addNumbers) {
            this.addPair('NUMBERS', this.numbers);
        }

        return this._charPairs;
    }


}
