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
/// fine esercizio base
