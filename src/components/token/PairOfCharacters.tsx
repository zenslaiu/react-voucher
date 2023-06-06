export class PairOfCharacters {

    _charPairs:any = {};

    public addPair(pairName: string, pairCharacters: string): void {
        this._charPairs[pairName] = pairCharacters;
    }

    public removePair(pairName: string): void {
        if (this._charPairs.hasOwnProperty(pairName)) {
            delete this._charPairs[pairName];
        }
    }

    getPairsAsAString(): string {
        return Object.values(this.charPairs).join('');
    }


    get charPairs(): any {
        return this._charPairs;
    }
}