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

/////////////////////////// fine esercizio base/////////////////////////////////////////////////////////////
// function dividereTempo(millisecondi: number): {
//   ore: number;
//   minuti: number;
//   secondi: number;
//   time: string;
// } {
//   // Calcolare le ore, i minuti, i secondi e i millisecondi
//   const ore = Math.floor(millisecondi / 3600000);
//   const minuti = Math.floor((millisecondi % 3600000) / 60000);
//   const secondi = Math.floor((millisecondi % 60000) / 1000);

//   let time = `${ore}:${minuti}:${secondi}`;

//   return {
//     ore,
//     minuti,
//     secondi,
//     time
//   };
// }
function durataChiamataSec(millisecondi: number): {
  durataSecondi: number;
} {
  const durataSecondi = Math.floor(
    (new Date().getTime() - millisecondi) / 1000
  );
  return { durataSecondi };
}

class nokia3320 extends Telefono {
  contatto: string;
  tempoChiamata: number | undefined;
  intervalloChiamata: number | undefined;
  constructor(
    _contatto: string,
    _carica: number = 0,
    _numerochiamate: number = 0,
    _intervalloChiamata: number | undefined = undefined,
    _tempoChiamata: number | undefined = undefined
  ) {
    super(_carica, _numerochiamate);
    this.contatto = _contatto;
    this.intervalloChiamata = _intervalloChiamata;
    this.tempoChiamata = _tempoChiamata;
  }
  public chiamata(): void {
    this.tempoChiamata = new Date().getTime();
    this.intervalloChiamata = setInterval(
      () => console.log(durataChiamataSec(this.tempoChiamata!)),
      1000
    );

    this.numerochiamate++;
  }
  public fineChiamata(): void {
    if (this.tempoChiamata) {
      let durataChiamata: number = durataChiamataSec(
        this.tempoChiamata
      ).durataSecondi;
      console.log(durataChiamata);
      let costoChiamata = Number((durataChiamata * 0.0033333333).toFixed(2));
      console.log(costoChiamata);
      this.carica -= costoChiamata;

      console.log(
        "La chiamata appena terminata ti è costata " + costoChiamata + "$"
      );
      clearInterval(this.intervalloChiamata);

      this.tempoChiamata = undefined;
    } else {
      console.log("Inizia la chiamata prima di terminarla.");
    }
  }
}

let luca = new nokia3320("Luca Favaretto", 20);

luca.ricarica(20);
luca.chiamata();
luca.fineChiamata();
luca.numero404();
luca.getNumeroChiamate();
luca.azzeraChiamate();
luca.getNumeroChiamate();
