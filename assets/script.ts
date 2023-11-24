class Telefono {
  carica: number;
  numerochiamate: number;
  constructor(_carica: number = 0, _numerochiamate: number = 0) {
    this.carica = _carica;
    this.numerochiamate = _numerochiamate;
  }
  public ricarica(num: number): void {
    this.carica += num;
  }

  public chiamata(num: number): void {
    this.carica -= num * 0.2;
    this.numerochiamate++;
  }

  public numero404(): void {
    console.log("ti rimangono " + this.carica + "$ di carica");
  }
  public getNumeroChiamate(): void {
    console.log("Hai effetuato " + this.numerochiamate + " chiamate");
  }
  public azzeraChiamate(): void {
    this.numerochiamate = 0;
  }
}

let firstUser = new Telefono();
firstUser.ricarica(20);
firstUser.chiamata(10);
firstUser.chiamata(20);
firstUser.numero404();
firstUser.getNumeroChiamate();
firstUser.azzeraChiamate();
firstUser.getNumeroChiamate();
let secondUser = new Telefono();
secondUser.ricarica(20);
secondUser.chiamata(10);
secondUser.chiamata(20);
secondUser.numero404();
secondUser.getNumeroChiamate();
secondUser.azzeraChiamate();
secondUser.getNumeroChiamate();
let thirdUser = new Telefono();
thirdUser.ricarica(20);
thirdUser.chiamata(10);
thirdUser.chiamata(20);
thirdUser.numero404();
thirdUser.getNumeroChiamate();
thirdUser.azzeraChiamate();
thirdUser.getNumeroChiamate();

/// fine esercizio base
