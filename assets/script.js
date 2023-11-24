var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telefono = /** @class */ (function () {
    function Telefono(_carica, _numerochiamate) {
        if (_carica === void 0) { _carica = 0; }
        if (_numerochiamate === void 0) { _numerochiamate = 0; }
        this.carica = _carica;
        this.numerochiamate = _numerochiamate;
    }
    Telefono.prototype.ricarica = function (num) {
        this.carica += num;
    };
    Telefono.prototype.chiamata = function (num) {
        this.carica -= num * 0.2;
        this.numerochiamate++;
    };
    Telefono.prototype.numero404 = function () {
        console.log("ti rimangono " + this.carica + "$ di carica");
    };
    Telefono.prototype.getNumeroChiamate = function () {
        console.log("Hai effetuato " + this.numerochiamate + " chiamate");
    };
    Telefono.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
    };
    return Telefono;
}());
var firstUser = new Telefono();
firstUser.ricarica(20);
firstUser.chiamata(10);
firstUser.chiamata(20);
firstUser.numero404();
firstUser.getNumeroChiamate();
firstUser.azzeraChiamate();
firstUser.getNumeroChiamate();
var secondUser = new Telefono();
secondUser.ricarica(20);
secondUser.chiamata(10);
secondUser.chiamata(20);
secondUser.numero404();
secondUser.getNumeroChiamate();
secondUser.azzeraChiamate();
secondUser.getNumeroChiamate();
var thirdUser = new Telefono();
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
function durataChiamataSec(millisecondi) {
    var durataSecondi = Math.floor((new Date().getTime() - millisecondi) / 1000);
    return { durataSecondi: durataSecondi };
}
var nokia3320 = /** @class */ (function (_super) {
    __extends(nokia3320, _super);
    function nokia3320(_contatto, _carica, _numerochiamate, _intervalloChiamata, _tempoChiamata) {
        if (_carica === void 0) { _carica = 0; }
        if (_numerochiamate === void 0) { _numerochiamate = 0; }
        if (_intervalloChiamata === void 0) { _intervalloChiamata = undefined; }
        if (_tempoChiamata === void 0) { _tempoChiamata = undefined; }
        var _this = _super.call(this, _carica, _numerochiamate) || this;
        _this.contatto = _contatto;
        _this.intervalloChiamata = _intervalloChiamata;
        _this.tempoChiamata = _tempoChiamata;
        return _this;
    }
    nokia3320.prototype.chiamata = function () {
        var _this = this;
        this.tempoChiamata = new Date().getTime();
        this.intervalloChiamata = setInterval(function () { return console.log(durataChiamataSec(_this.tempoChiamata)); }, 1000);
        this.numerochiamate++;
    };
    nokia3320.prototype.fineChiamata = function () {
        if (this.tempoChiamata) {
            var durataChiamata = durataChiamataSec(this.tempoChiamata).durataSecondi;
            console.log(durataChiamata);
            var costoChiamata = Number((durataChiamata * 0.0033333333).toFixed(2));
            console.log(costoChiamata);
            this.carica -= costoChiamata;
            console.log("La chiamata appena terminata ti è costata " + costoChiamata + "$");
            clearInterval(this.intervalloChiamata);
            this.tempoChiamata = undefined;
        }
        else {
            console.log("Inizia la chiamata prima di terminarla.");
        }
    };
    return nokia3320;
}(Telefono));
var luca = new nokia3320("Luca Favaretto", 20);
luca.ricarica(20);
luca.chiamata();
luca.fineChiamata();
luca.numero404();
luca.getNumeroChiamate();
luca.azzeraChiamate();
luca.getNumeroChiamate();
