export class TipKnjige {
    TipID: number;
    NazivTipa: string;

    constructor(data: any) {
        this.TipID = data.TipID;
        this.NazivTipa = data.NazivTipa;
    }
}
