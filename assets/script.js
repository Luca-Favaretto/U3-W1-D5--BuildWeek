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
console.log("|||||||||||");
console.log("|||||||||||");
console.log("|||||||||||");
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
var p = document.getElementById("schermo");
var div = document.getElementById("xbackGround");
var nokia3320 = /** @class */ (function (_super) {
    __extends(nokia3320, _super);
    function nokia3320(_contatto, _carica, _numerochiamate, _intervalloChiamata, _tempoChiamata, _durezza) {
        if (_carica === void 0) { _carica = 0; }
        if (_numerochiamate === void 0) { _numerochiamate = 0; }
        if (_intervalloChiamata === void 0) { _intervalloChiamata = undefined; }
        if (_tempoChiamata === void 0) { _tempoChiamata = undefined; }
        if (_durezza === void 0) { _durezza = "indistruttible"; }
        var _this = _super.call(this, _carica, _numerochiamate) || this;
        _this.contatto = _contatto;
        _this.intervalloChiamata = _intervalloChiamata;
        _this.tempoChiamata = _tempoChiamata;
        _this.durezza = _durezza;
        return _this;
    }
    nokia3320.prototype.chiamata = function () {
        var _this = this;
        if (this.carica > 0) {
            if (!this.tempoChiamata) {
                this.tempoChiamata = new Date().getTime();
                this.intervalloChiamata = setInterval(function () {
                    return (p.innerText = "Durata chiamata : ".concat(durataChiamataSec(_this.tempoChiamata).durataSecondi));
                }, 1000);
                this.numerochiamate++;
            }
            else {
                p.innerText = "Una chiamata alla volta Tigre";
            }
        }
        else {
            p.innerText = "Caro mi spiace, ma il tuo credito è insufficente";
        }
    };
    nokia3320.prototype.fineChiamata = function () {
        if (this.tempoChiamata) {
            var durataChiamata = durataChiamataSec(this.tempoChiamata).durataSecondi;
            console.log(durataChiamata);
            var costoChiamata = Number((durataChiamata * 0.003).toFixed(2));
            console.log(costoChiamata);
            this.carica -= costoChiamata;
            p.innerText =
                "La chiamata appena terminata ti è costata " + costoChiamata + "$";
            clearInterval(this.intervalloChiamata);
            this.tempoChiamata = undefined;
        }
        else {
            p.innerText = "Inizia la chiamata prima di terminarla.";
        }
    };
    nokia3320.prototype.numero404 = function () {
        p.innerText = "Hai ancora ".concat(this.carica, "$ di ricarica");
    };
    nokia3320.prototype.ricarica = function (num) {
        this.carica += num;
        p.innerText = "Hai caricato 10$";
    };
    nokia3320.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
        p.innerText = "Cronologia chiamate azzerata";
    };
    nokia3320.prototype.getNumeroChiamate = function () {
        p.innerText = "Hai effetuato " + this.numerochiamate + " chiamate";
    };
    nokia3320.prototype.azzeraConto = function () {
        this.carica = 0;
        p.innerText = "Credito esaurito";
    };
    return nokia3320;
}(Telefono));
var luca = new nokia3320("Luca Favaretto", 20);
p.innerText =
    "Tutti i miei pulsanti hanno una funzionalità, quindi che aspetti a premerli!!";
var btnCuore = document.getElementById("btn-cuore");
btnCuore.onclick = function () {
    p.innerText = "Te amo<3";
    div.style.backgroundImage = "none";
};
var btnHome = document.getElementById("btn-home");
btnHome.onclick = function () {
    p.innerText = "HOME";
    div.style.backgroundImage = "none";
};
var btn4 = document.getElementById("btn-4");
btn4.onclick = function () {
    luca.numero404();
    div.style.backgroundImage = "none";
};
var btnTop = document.getElementById("arrow-top");
btnTop.onclick = function () {
    luca.ricarica(10);
    div.style.backgroundImage = "none";
};
var btnBot = document.getElementById("arrow-bot");
console.log(btnBot);
btnBot.onclick = function () {
    luca.azzeraChiamate();
    div.style.backgroundImage = "none";
};
var navigazione = document.getElementById("navigazione");
navigazione.onclick = function () {
    luca.azzeraConto();
    div.style.backgroundImage = "none";
};
var chiamateEffetuate = document.getElementById("chiamate-effetuate");
chiamateEffetuate.onclick = function () {
    luca.getNumeroChiamate();
};
var btn0 = document.getElementById("btn-0");
btn0.onclick = function () {
    p.innerText = "Sono " + luca.durezza.toUpperCase();
    div.style.backgroundImage = "none";
};
var btn1 = document.getElementById("btn-1");
btn1.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('https://images.everyeye.it/img-notizie/che-nostalgia-snake-space-impact-giochi-cellulari-nokia-v4-663121-1280x720.webp')";
    div.style.backgroundSize = "contain";
};
var btn2 = document.getElementById("btn-2");
btn2.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('https://images.everyeye.it/img-screenshot/nokia-v1-814685-640.webp')";
    div.style.backgroundSize = "contain";
};
var btn3 = document.getElementById("btn-3");
btn3.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('https://www.hardware-programmi.com/wp-content/uploads/2015/05/snake-nokia-download.jpg')";
    div.style.backgroundSize = "contain";
};
var btn5 = document.getElementById("btn-5");
btn5.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhQWFhUXGCAYGBYXGBodFRkXHhkjHRgXGBgZHSggHRolHR0XITEhJSorLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS8tLS0vLS0vLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAEEBQcDAv/EAEgQAAECBAMEBwUGBAQFAwUAAAECAwAEESESIjEFBjJBEyMzQlFhkQcUJFJicXKBobHRFUNj8ILBwuEWNFODknOi4iVUk6PS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EAD0RAAEDAgMEBQcMAwEBAAAAAAEAAhEDIQQSMUFRYXETMoGRsQUUM2Kh0fAiI0JSY3KCkrLB4fEkwtI0U//aAAwDAQACEQMRAD8AKfXWEPxhU/WGAjxaanH4wvWGAhUiKJ/WF6w1PKFSIon9YR/GGpCIiKJz+MI/jDEQiIiif11hD8YVP1hgIiicfjC9YYCFSIohvbu9C5d7ohLKcARixhZArQnDToz4Dnzhth70rmHktmWUgKSTjxkgUFadmB+cWG9TRVKPJSlSiUWSkEqN9AAD+ked0GlJk2kqSpJAVVKgQoZzqCB+kbPmvN82S8xqdxMx+0Qgvm1XiX28VTjkqWilKE16XHY2SaYcNuLx5Qtn7eU7NOy3RFIbBIcxEhVCkcOEU4vE6QMzm7/vO0ZhLiHUNqFekCchICKAEop+fIxJ3T2UpifeT0boQlsoS4oEJVQopQ4QK25HkYY+jRDCRrkBjiYvM316vsQhzpjiu07vuttbqBKqVgcKK9IRiAKhi7I04fPWLbd7by5lbqVMKaCKUJUTiqSLVQnw89Yz7bOy3S9MkS75BmFEEIVQgqXcdXpf8xGgbubVeeU4h2XU0G6BKlBQx3ItiSPAaeMFXo0m0g5jRMXubabCb6nko1xJg+H8K99YXrrDUh6frHNTUh+MIfjDAQqeURRP6wvWGpCpEUT+sL1hqQqRFE5/GEfxhiIRERRP66wvXWFSFSIokPxhesMBCpEUXqFDUhRFSaBbbu9RbW0JfoXUq4lYq0NRbKrwNY6737bel1MJaDZDhUFY9bFIGHOPmPjyjOJUdnkb7T5/u/XHRweFa4Z36bBbiN40IS3viwRY3vvMnD1TV61url/ihk77zNupaulR1VqMVO95D1gVZ0byt97v+Q+uGSOHI32au/8Af/qR0DhaH1R38/WSs5Wpbu7cS+22XFNpeVi6sKFaBSqUSSToKxcxlG7DyG5qXWvo0JSlZKsemVz6z/ZjU5Z9DiQtCkqSRZQNQb0sY5OMoClU+Tob8BciJvu2lOY6QqjePboYbWWi2t1JTVsqFQCRUlIIIsQYGl78TND1LVgnmrmKnvRVb2j4yZyoNk6qodG9RjEVLicqsreiO/8AT9+Ohh8JR6MFwkmDfiBbUb0t1R0ose33mRjoy1ZVBdWmb6vIQzu/E0MVGWrKoLq8/q8oFZodplb4x3/v/XCeF15W+0+f731w4YWh9QfEesqzu3rY5acbcr0a0Lwm+FQND4GhtARJb7zClNBTTQCnAlRqbJqmp4vM+kS/Z2LTNkjONFV+bXMYBpVNmsjfH8/3P6kY6GFph9RjrxGvEE7xw7kTnmAQtnlZptwVbWlYBpVKgRWmlRzuPWOW1ZktMOOJAKkIUoA6EgEgHygU9nk+0hktrU2ha3jhRjuqqUgUzHnaCTeUfCP2HYr1NuE6msYX0ujq5Nk7dt+7uTA6WyhvZG+Lq3mkOoaQ2oKKl4iMNAqlyqndHrBcZ1ro+l6RHR/PiGDWnFWmtvtjHB3crfZr7/3/AK4OGZVbmx0obbC1EWQDY0fqb4vAE6xuxeEpBzS2wJDdm0m+p3bTCWx5MrntXfJ5DzqGkNLbSBhXUnEDhvUKpzPpEVW/EzRXUtWSDqrnT6vOKde7k3m+F7iRqdRhqO08j6RXzLJQXEqbQFJSkEFdwRhqDnjTTw2GcAAATz9tnIS96KHt+JkY6MtWVQXVpf6vIQnN+JkYupasqmqtL/V5CB1uQdeU6lplKyF1ISq9KqFT1n91iW7u7N5/hdV1FzcZr9p5j1i+gwoIBDe/l6ymZ/H47FqMzNtt06RaEVNsSgK/ZXWAhnfWZKkAtNZnMJubCqb8Wtz6RK9o4tL2Sc6tVU+XTMID5ftG8rfb/P8AUj69Yy4PC03Ug94mZ7Ikbxqje4zAWyUiv2vtNDKF5m+kDalIQpQBUQDS1akEilosP3jPN/x8W3lQeo5qodXOWIRhw1IVXhp5910x7oCnbF3tmHX2W1NNhK61IJqOLTN5D1i+29tlLDa8Cmy8lNQ2pQqb/LUHSp/CM+3VHxcrlRz0VU9/QYzWJe+w+NXlQeqFyqh4DyxiOg/C0jiA0CBlnnB0Sg85ZUxW/EzfqWrJSdVanDXveZ9ILti7WQ82iqm+lKApTaVAlOlctSaXHrGTKHFlb7NHf+5/Ui83Mm22porcLbaehpiK+ZwUF1mLxOFpdGXMEEXtBnS2p37FTKhm608iOM1NNtiri0IBNAVqCQT4CvOOjTiVJCkkFKgCCDYgioI8oCfaHtBlxpKG1trUh3MnHdJwqBrRQvW0c2jRNSoGd/D9k5zoErk7vtMhSgGmqBzCLnSpvxeUXO7e83TY/eC00QsJQMVMX2YlXNaaeMZ2vVWVvtfn8z9cdJTtGsrfbfP9Sfr1jrvwdFzbCOI/tIFQrWNobQbaScS0JXQlKVKAKiBYAE1N6C0CuyN75h15ltTTQCzRRBNRrpmjj7RB18vlSbHVVDxDTMIod2f+alcqOLkup1Omc1jPh8NTOHzuEkgnlAPEbpRucc0fGxa3Ch4UcpOQN7Rk9ZK2Sbr1VTm3pmFYHNgbHdeLakMpU2l4dIQ4Moqgn+ZWtK6Vgk9op6yVunVeqa829LGkd/Zoeocuk9b3RQcCfIR12VXUsGHN/faXDYQkEA1IPxorFO5kkKUbNq06xfP/ABQL7zbsqaXiYZHQIZJKlOaGi68TgNLjlzjRhA9vZtllDbsupYDq2VFKShRFCDSpwkcjrGShiK5eACXcJJ5nXYEbmthZsE8OVvs19/7/ANcaluePgmbDhOhqOM86mM0kZdbrjbbfRlakLCRhAqaLOpTQaRqW7kotqWbbcAC0g1ApTiJtS2hjZ5ScMgaTeZ/UgpC8rO97U/GTOVGidV0Ojeoxikd90tltTDy23kJKQ0lWVw1qMIHCutKExx3tV8ZM3RonVN9G9Thiy9np+JcujsBomh7n0i0Oe5zcLIMHKN+5qEdftRGvcySNatm5qesXrf6vMxnE63RboCW6B4gZ+QKtc+sbPGN7QV1j12+2Pc+pX06wjyfVqPLsxJ01J3oqjRARh7OxaZskZxoqvza5jSAaVTZrK3x/P9z64OfZ4bTN08Y0FPm1sIB5U2au3x/J9z6I0Up6arHq/pKF3VHauuz3ChTS0pbBSoqGcG4AI797wdy20HJjZj7juAqwOCxATQJtcKp+cAMurgu3qrueQ+iJcvtV5DXQpdQGlNrKkYE0NcVe5XkPSCxNB1UaCQRe+gkneqY6FDCeHK32a+/9/wCuNQ3MHwTNhorQ1HaK51MZgDw3b7Nfc+/9EahuYfgmdNFaCg7RXKghHlKeiE/W/wC0VHVXMZLvKn4mayo4ua6HUa5xT8o1qMm3lV8TNXb4uab6jXLeM/kz0h5fuEdXRXvs+T8RMWSLclVPGdcxpB6YAvZ8fiJi6NOSaHjOuUQeGEY70x5DwCKn1UG+0cWl7JOdWqqfLpmEB0unrG8rfb/P9SPr1gw9o5tL3Txq4hX5dLGA+XV1jd2+2+T6kfTrHTwU+btj1vFyU/rLZP3jPN/0/Ft2Qeo5qodXOWIRof7xnu/5+LbujsOaanVznhMczAemHI+CZU0VTuqn4uVyo56Lqe/oMZrEvfZPxq7IPVDVVDwHliERd1VfFyt0c9E37+mWJe+yvjV3R2Q1TU8B54TaOqZ86/Af1JX0O1D6k8WVvs0d/wC59cIp4srfZp7/ANz64dZ4rt8Ce59z6ISjxXb7NPc+59EaW57dm/1Uta5sAfDMadkjQ24BzrGVbXHWzGVvt1d/6l659YO9lb1SjbDaFu0UhtCVANroDhGlE/pAFtNwFx9QU3QvEiqORUsiuTWObgKVRlRxII5gjam1CMoj4svC03Vlb7X5/M/XHuUT1jWVvtvn+pP16x5Wq6rt9p8nmfp1jpKHrGrt9sO59Sfp1jo/Kjs47ksIn9oievl7JNjqqneGmYVih3ZHxUrlRxcl1Op0zmsX/tDPXy906HVNTxDTKYoN2VfFSt2+Lkm+p0yxkw8+aD7p/wBkbuv8cFrcKFCjhLSgj2jHrJW6RdfEmvNvTKaflAtsrazzQQlp9KApzMEooDwj/p+EFPtGXRyVzAXX3a1u36QFyzoq3nHafIPpjvYNodhmgidfF3NZnmHK1a3lm6I+K1rXLr/+uIMzPOOqSt11C1dGoYii9Bjp/L0jgy6KN5x3u4PCGS6MucdmruD6409Cxtw0dw48EEyNUU7mbGeU5LzQLRaAWDQUXXOmwwDmRzHONCgC3c3tYYl22lhalALVVKU4aYlH5hyEGey59L7SXUVCVioCgK60vQnwji45tTpC54tJAMbJJHPatFMiLLNd7VfGTOZAsnVFTo3qcBrHXdPazUs8tx1ScJaSnI3epwkaJFqAxx3tcHvkzmAsm2EHk3zipddGFWcaI7g+WOtTpCpRaw6EN05N4JBMOlGW8+96VN0lHi2tLlFkoPDhVa6TzA9IEJhdSslbdS5U5Pvf09YJEbmzDiMaXWQHClaag1AIJocmuYQNzSsKnElYqHacA5FQ8IDCiiBlpmSNdJ2ervmFb51KNfZ4bTN0nOOFNPm1yisA8qbNZm+P5Puf04OfZ4uomcwOcd2nzQCyroo1nHH8g+iBpCa1X8P6TwKt3VHavcseDM3qrueQ/pwyVcOZvs19z7/9OPUu6Mmcaq7g8BHlLoy5x2a+4PrjW5uvbsG48ECQVw5m+zX3Pv8A9ONP3LPwTNwbK0FB2iuVB+kZgHRlzjs19wfXGobmK+CZvWyr0p/MVyjB5TEUx97/AL4BNpaq6jJt5T8TNZm+Lmip1GuQ1/ONZrGS7yuD3mazAZvlFrj1jP5ME1Dy/cIquivvZ8fiJi6Dbkmh4zqcIrB5AH7Pl1mJjMDb5QO+YPawjHemPIeARU+qgz2jm0vdIzq4k1+XTKYDZc9Y3mb7f5PqR9GsGXtIVQS96Z1cq/LAdLujpG847b5B8yLR1MEPmG/i8XcClP6y2T94zzf8/Ft5kDqOaanVznhNo0P94zzf9dJtvMB1GmEHm5zjl4D0w5HwTKmiq91VfFyuZvnoih7+hwCkSt9lfGrzIHVCxTU8B54D+sRd1XB73K5gde6B8/pErfZz41eYDqhbCD3DzjquH+V+A/qSfodqoVHizN9mjufc/pwirizN9mnufc/pwlOjNnHZp7g+iGLozZx2ae4PojSG6dmwerwQ/HxdO8bLzN93ueX/AKcKZPaZm+0+T739OE86KLzju9weEKZdHWZx2nyD6ovL8QOHBQr2tV1Zm+1+TzP0ax0lD1jeZvtvk+pP0axyW6KqzjtfkHiY9yjg6RvOO2+QfMm0DlEfwPcrRV7Qz18vdAsdU1PENMppFBuyfipXM3xckUOp0yCn5Rfe0RdH5fMBY90HvCKHdlwe9SuYHN8ovc+kZMOP8QfdP+yN3X+OC1uFDwo4S0IH9ozlHJXOpN18PO7euYf2Y9ezlpDjLhV1hDtitIJGRNhUm0L2iV6SVpj1Xwi2qNb/AN3iu3O26WAlotur6V4DETTDXCnShqL1jrBhdggG6+5zkmYej0SDNurR/wCCf2gV3u2Ac8whzo20MmraU0qQFVIoQK3HpBmPxiLtOVLrLjQUU40FOKlaVGtKj9Y5tGsWPBB/e223JNc2QsfExw9a52a/9f1/3SCLcqdWZptHTOlPRHIScHDWtMZFa30iv2zs1cu90XSOrwtk4gkgGoUdMRuKxO3Lxe+N1LnZniBpw/brHcrFj6TnCIgkacd44rO2Q66ib2vUnJkdI4LJsNBZvTOP7MT9wglcwtKiXB0INFgEVyXuo3v+ZiHvXi98maF3ROgNNG9L/wB3iy9n+L3ldS52I4gaao89YXU/8n4R4NVjr9qPwALCwGgGgjG9oP8AWPdY52x5fUq3HpGy+sY7tDF0j13e2PI/MrS+kZvJvWd2eKKrsRd7PHKiZzKVnGvLi0zGAeVmLNda5x+H3Nc8HXs9rSZqV8Y4v8Wl4CJXHRq73H4H6Nb/AN3jVSjpqv4f0nggPVHajLcWVS9JviuJRWtKVrSCpJLSaUNSaAmtjA3tuSVKupZW+tSuhKqgGl+k8V62gw9m1fdl1x9qeLXgT56Rc7yJ+Ff1r0S7gX4Tp5xj84NLEOGoJ08Nh0nZCMNlgWTiY4etc7Nf+v6/7pGobmLrJMnETZVzr2ivMxmQxZbvdmrkfr89f9o07c6vuTNcWiuLXtFaxo8pejH3v+1VLrK4rGTbyv0mZrrHBRWg0FxpnH+Ua16xlG8mL3maoXeLkDTUaXjP5N9IeX7hFV0V17PnazExnWbaHQZzpmMHlYBdwMXvExUuad4GnGdLwd+sJx3pjyHgEVPqoL9o7lBL5lJzq4efDrmEB8u/1jfWOdv/AKkW49IM/aNWkvTHxq4f8Ot9IDWlKC0HrrOk6HxT56R0sHHQN/F4u4JT+stjr+sZ7v8Au0m2xjWOo0Gmrl+IXiwb37rh+FczKpxaaX4fP8oHtu7WVMutuhDrfVlOG50KzUm3j+UZMJhqtOpLxAg7Ru4EonuBFlz3VerNyo6Rw62Oh49c5/sRL32epOrGNY6oWGnAb8QiPuti97lql3nqDTv63/u0St9MXvq6Fzsxwg04D56xtP8A6fwHx5IPodqrNkSipl7oUvLSVNg1INBRKTyX/dY5bTbLLrzSnlkoSlJIFq5Liq4udycXvqalynRd4GnAPPWJm+WwlI6aZ6ZZCykdGlJqKlOhxX08OcQ1g2uGE2IEW2k8lMvyZQi9MWX1rnd5eX34U1Mdp1rnH/8A19cdHsdF3e7vI+HK8Wuxthrm1voDrjeE4qlJIN1CgzCNDnsYMztB/G4IYJsEt4dkLlcBW+pXSrqMINqcjVf1D0itlH+sb6xztv8AUm3HpBj7RQaS4BXxK4QfBOt4EJTF0jd3e28DTiT56QjDPL6Ic7W+7YSN3BE4Q6Aib2hu0fl8602Nhocw1zCKDdl6s1K9Y4c2h0NzrnMEPtBxdPL0Lmh4QacQ1vFDu1i95lql3i5g01Ot4Xh480H3T/twVu6/xwWsV84eG9YUcNaFS7xbvpmi2pS1p6IqICQL1wm9fu/nGaS0k51fUP8AHzCrcOvV6RstP1hCNlDGvpNyxI2cNd3NLdTBMrGmdnro31D/AHuRt9vVx5Ts9eX4d/gVyP127PX942cfjCjQfKjz9H2lD0IWNJkXMvUP9mrkr67dnr+4g23P3dCeimiXErwEFtQ01TewNeekF8NSE1se+o0gCJ4zvtfmrbTAQRvlu5TpplJdWpZSOjSPNIqKAnu108Y4bgSy0zKypt1I6ECqwaVyWukX/aD6kOYDztxpGk4Tx3admxFkGaUjGcb17t9DnR0zpdcKiEjh1PJJtf8AKNGIhyIXQruouzDtG9W5ocEH+z5hSfeMSHEVWKY634riqRaKHbm7XuymENh50EkkgcN0ihwpPh5c4Mdvbbcbw+6tiYOIhYQSoo8MQRWlTXXwis/4jn6ge4qpjIr0bugpRWnmfSNlOpWLzVEQdRmA0Ebb8e1LIbELt7OGVJllhSFoPSmy614E3ukW/aCHaEoHWltEkBaCkkaioIqIFmt5Z84ayKhVVD1btha+nmfSEjeWfOGsioVrXq3beHKE1KNR9Qv+SDM9Ye9E1wAhDm3NhKYe6NCHnEho5wDSpCzSyCK38fCDvc9siTaBSpJoqyuIZzrUD9Ip07zT9vgV3SSerdsRioNOdB6whvLP2+BVdJPZuaitBpzoPWHVumq0wx2XWZzDcezahblaZ/ZGNIyveOTcMzNEMvEFVikGhuOHIf8AOCM7yT9/gVcIPZua2qNPM+kI7zT9/gVWSCOrduTSo08z6QOGZUoOLoafxAcd6txDgrHdnd9LBU8FLJdSCUqAy1zUFuVaQQ0gNXvLP3+BVoCOrduTry5XhnN5Z8YqSKjRVB1btxe+nkPWFPoVqjsziJ+81WHNAgK73h2Ama6PEtSMCiRhAvWmtfsjNEyTlUdQ/wBoTor6b9npBg5vNPjFSRUaKoOrduL308h6x7VvHP1/5JXHTs3dPm0jRh3VqTcvySNnyhbXceO1C7K7+kFy0i51fUP8fgr6bnq9ITUk5k6h/hVyV9WvVwZo3ln6pHuK7qoerdsLX08z6RbbA22txPxKBLuFeFCFEpUoUFCAuhNyRbwhz8XVaJLR2Onf8cNqEMB2qi3N3bqGZlRdQpBUOjUNbquagHveEV++cqtU4shp1Q6PVIOHgNrIN/xjR6Q8YhjX9KahE2IA3AmeaZ0YywhDc/d0I6OaJcCyihbUNLYb2BrYHTnE3fxpSpRQShajiTZFcWvkD+kENIVIUcQ41RVN4NuQMgIsoywFjb0i5RfUP93krw/9OC3cGXUl+ZKm3E1pQrrQ5jpVIg4MMRD6uONRhZl14nh7kIpwZlVG8OwEzfR4lqRgUSMNL1prX7IziUknOkb6h/tq6KoMybnJpGv0hfvC6GMdSbliRs2Rru5qOph10Db/AMupT8uUtuKABqUVoMw1okxy3M3cxhuYX0ram1miFDWgrU1SDzPpB8IakQYt7aIpNtx79mm1XkGaU8KGpCjIjT/vDCEo25QBbK3g2m+lKm22lgLosppQWSf+prQmHUqLqgJBAiNTGv8ASEuAR6I8POpQkqWQlKQSVEgADmSToIDlbU2slIUthsABRWctAAK17T7Yho2ltKaZIDLa21oUlRTQXuKA9J931howbtS5sbflD45Ic4RgNvSlviWdCe0RoK1OvkfSEdvSn/3LOle0Rp46wIK3aS3IKedawPoQoYSs4QCsgVounCfHnE3d/daWelm3HEHEpFDhcNKBVBShPgIN1Cg1pdmMAxoO/XRTM6YhEJ29KX+JZ0B7RGhpQ6+Y9Y7yu0mHSUtutrUACQlaSaeNAdLj1gXmtj7JQpaFrCVBICgXFVAy0r/7Yr93JuXYnH1YkJZwYULKiaiqcNcx5A8hpFebMcwlmaQJEtidNNTt2bL8pnIN4WhGH/ePCFhQCk0INCD4gioMe/3jEUxBm4g6+dskdYNFVJzua5jT8oM/3gM3EHXztkjrBoqpOdzXMaflBn+8acZ6Y9n6Qgp9VMIjT82G0g0qVKCEi5GNXDWmia6nlEoRC2pI9KlI5oWHE6UKk3SDUGgJ1Iv4RnaBN0XJQ2pyaxJCkSoFQFUeViAqK0GHXWg+zxhk7QmPeOh6NqlMeLGuvRYymvDTHzw1iC7sZ5biFqYlEEOJcUtCiVmigVXU3etD4cIuOUxMrM+99NgZwlPR8ZxdGFlWLgripyrT9YaWt4ae1DddVzz7hUZdttSASmriloVjSSFWCTlqE0POp/H0vbFUDo01cUpTaQoKCOkQMwUqlQmxoql7RyTKzDOJMuhpaFKUuriylWJRKiKIRSlcN9bmvmjsUpSlSKFxC1vJSrCEFxwHEkkJqEjEbi/jW8XDJ4fGvbGxXdSJZybKwHG2AitylxRVS9KApArw8+Z8LxDtZ5dVMJYwHTpXFIcqKg1ThNBUW8rxLlnJvGOkbYCK3KXFFVL0oCkCvDz5nwvE2Vu40loB9hlTlVVOFJqCpRF8I5Gmn7xXyQCSBNtL7DPgN3apdW0lNpdQHEVoSdQQbEg2PmI7/vFdsKSUywlteHECo5Ta61EaAciOXrrFj+8Le1ocQ3STCsaJfvAVvgPjpGyTnRqqhHXp0GIV9DBrAVvgPjpKyTnRqqhHXp0GIV9DGjB+k7HeBQv0RpDw0KMqNKkKFHCdnG2klbqkoTYYibVOkWATYKLuYRiqVvLJ369u1K3P4RaJUCKihBuD5RbmOb1gRzkKgZXr94X7wv3hifsgVaQEIRVI3lkzSj7dzQX1Nv3ETZCebeTjaWlaakVBtXw/MQRpvaJLSOwqpBUmFChQKtC++W13mFy6WlIAcKgoKAJNCgClfvGBzZz01IKaaWG2kuOgqFQolNUpJBxKpasW3tCUA7KVKRmVqCTxN6UBi0cck55tTyQHC0FAKUlacKqYrA0ryMdOm5rKDJbLTM22ycvDfEpRu4qBt3abz6SqTKFy2BSXlGgoaEqGaiuEjTxip3cXtAMp91S2Ws3NJz3+dVdcMWm4qke4vlzCW8S8eFJph6JOK1AdK6RXtbwtNTDSZZwIk8JUtHRqqTnxEYkFXJPPlBtBAfSYwHKTcgkGJ1jV31bIZmHErnPT+0HF+5u9GVuINW8oJspScwNBYA6wpGen2lCTaDYWhFm8pINlHMTexJ1iQxtBt/arLjSklKkmlUqCrNrB1Ta4Me955OZZfdnW1NoThSAugKhUJQcuE86iGSMwpFrRLQYItnJiI5czxU4z/SWz923npla51lOFaBiUF0JWAilkLtodByjzvrsGWl5cLabCVFaUkqW4RhwKtdXkI6Sh2s62HG3kFK0JKSQgXtU0Lf3vWPG0ti7UfRgdU0sDCQDgpiCaE2QPE+sLa94qAuqtAGoDnAQOHZBvqoYIsCo85tfaMuyFHo0NkpS0SEGqcJI5k6AaxoDKqpBNKkA/lGe737UaXLIYStPSMLCHApCsIUlCkqAOGhzA3EaDLcCdNB+kZsUPm2uLQCSdBEi0c/jejYbkSh/aeyHmSVbOQlK3FkvFSq11Ip0hIF1K08Yif/WKjs6Yz/0+G1Px1jvtHaT02SiQdCFMrIdxigvUACqVVulURzs7a1R8Q3TGSbjhtQdl9sMaSBFTJPrhxdwkx3cFXKexM1/Gctej4s3ZcNv/AJQ7f8Zy16Pni7L8I8tbN2vlrMt8Wa4um1uy+31h29nbXy1mG+eK4v4fyovMz7L8rvcp3pD+M27PhNey4s1P9MIfxm3Z8Jr2XFfD/phk7N2vb4lvhNbjizUPZfd9ISdm7XtWZb4TW44r0PZfd9ImZm+l+V3uU705/jN+z4R/0uK1f84R/jN+z4RTsuK1f9UMrZu17/Et8I5jitU9l9sI7N2vf4lvhFLjiy1PZfe9YvM37L8rvcpfj3r0v+M3p0egp2WvP/OGc/jOanR8Vuy0v/tDL2bte9JlvQUuNef8r7YTmzdsZqTLfFa4sL27L7PSJmZvo/ld7lO9O5/Gc1Oj4rdlpf8A2j0r+MVNOj47dlw/vHhzZu2M1JlvitcWF7dl9npHpWztrVNJhvjqLjh8Oyiszd9L8rvcp3pJ/jFU16OmK/ZcNv8AeJuydjuO4XdoISp5tdWylVAEjCoWQaHODrEFGztr1TWYbpiqbjhtbsvtiVsvajksUMT7uN51wdGUiownCkAkJTTNXlzgXklvzeSfUBDovOsWjXgoOM9qI5mYS2grWQEpBKjew8bQMTm0J51eOSwLlynKrIKqAIPGQriFNIuN5/8AlH9OzVqLac7QKbsTEy0028txAkkheMJSK1qoWGDFxlMBh2Doy8AEzEOuDabD6xNhvkq3G8Jv41tMvKlwW+lCQcFEVrhSo3rTQk6xx3iXtAsqE0lvosvNIz1HyKr80TNtbdk+selVBM0Qk9IW18Jwg8SSngoNI9TG0PfpVMs2tK5nCha8SSlBpTEalNOYtGxstLH9EGiRJLSCNCSDpl3HXegO0SuM9uwlcmyuWZCnlhBX1isJGCpIxLAF6aRI2DvOULdRNuIShs4EAJNQQSKHCDyH5QkSG10JwIcbCUhKUDJYAUpdEQ91dmtvzE0mYS24UqqRQii8agokgCvOFktNJ3SuDgL2JLhJG+w3d4V7RCKDvVJX65PFThXr4cMeV70SZFA8mpJSMq9fDh8xA5udstl9yZDqULCHE4QAoYaqX5Cug8dIrttPSSnGPdcKUhw9JVC6k4kaYgeVYHzSiahpjPbbaNJGzbsUzmJspm52xGX5ZaltpU4hZCMK1gA4EkVzUN6aw+wHpqVeYlVhDaXFYlIqFEg1FQqp+Xx5ROl8awk7JUhDIUQ6CKVXROnSJJ4aaRXJRMpn5UTa0KdtoBXDiVShSgDXFDszqheHEQZOUyXNgHZeOKrSFo0KFCjjJ6CvaCetk7pupWqa1zN6ZTSJ+1dhvhSEyJaZaNelQBhCyaDQINctRyi9m5FpyhcbQsprhKkglJNLgkW0GngIAp56clHZdL80peJYUQkkhSQpIKTiprf1jfQJqtaxpEtBsbzMnTSw37dEp1iSdq4BL8ktph5xHRrONxtCapWgmigRgFyARFonbGybdQOEkdSNM1f0VFvL7RlJtlc0WMQZCgekbQV0SnEQm5tQ+IjjJubPcllTSZVAbQlVQWWsdE1xAAWvU8+cE6tmvUa7MDBg5bknW2uzs7qA3EfwhtvaksieaeaAQwlCjhDYCuBYNLfN5xabzb0y78stpsqxKCVDEjLQLSb68vKLvY0tIzDSXm5VsJOIAKabCgAopOlRStefOH2xKyUuyp5yVbKUgAhLTZNCoAC9BSpHOLNZhqtBY7M2BEjUHQ2uZKuDBuELr3nSmSSyy4UPoQiqgiiaVFaW8COUS5SU2q60lxE0ii0IUmpoaFNTUdHFnMuyCJUTZlUdGoJsGW8dCQACNPDnyiE3tEyo97cWoyjqUhlhAFW8SQpsYSQkAJSoWJ1idJb5tl5PWAdJtYW2HZutrE1G8/1vUTfrZyGpZtWFpLqljpV4AcaujUVE5b1VU1pBzLcCfsH6RQ7N2Yt1TjkypDzDh6RltYxdGFElOVQoCEkCxMEQoNP0jLXeMgZMxJnnFuzTdusjaLyg7cVdX529aODugUzucxrBnX9YC9xHavzudSqOCx5Z3NLn/LSDP11i8Zasez9IUp9Vc3QSkhJoSCAfA0sYr93ZN9prDMO9KvESFXOWgoLgcwfWLF5JKSASCQQD4GljAc1upOjDWeWaVr1j1/8A3QFLK5haXgaa66bwrPJXk1IzJm23UPYWEpopqpzHNU0pTmnnyjvtd1aAhaTRCFFTtACejCTWgwkm9LChil2Vu5NtutLXNrWlFcSCpwhXFqCqnMa+EE77KVpKFjElQIUDoQdQYuo5rXNAcHACLCNvGJMfsJsqHJQJqaUp1pDSjYpcdFKAtKBAuUmpxUsCD/nWbRnlhZ6R91hVOBpnpUgUVhVj6M3IAJHIgDne6kZANkqJKlkYcRABDYNUN27qakDnEVezJi9Jx4f4Gra07vKo/wDEecUx7AdnxPB3tE7ourIKnSSClFFOFw64iEg0JqBRIAsLfhFdsiQmW3nlvPdI2ono0VJwDESBQimlB+EWcrLJbThQMIqTQDmTVR+0kk/jApObrTiluFM6tIU4VJGN3KklRCbK8xp4RdMtcXAuAneOOyJj4Ch5K53lkZl1CRLPdEoKJJqRUUsLA84txAW9ulPHFSeWKqqM71he3F5j0g1H4xVUtDWtDgYnQb41Np4br71G8k9f1gJ3wXSekhWmdHdBr16eZ0g19dYCd8XaT0iMahVaLDQ9cnXMP84Zg/SdjvAqn6Ih3oPwj9x2atRUaeFIqN332k7LSp8JW0MWIBFiOlNMtBzpBQ62lSSlQCkkEFJAII8CDrAxtaRLCy8op9xQnNLJSKGoIs2QEcZCteVdYlBwczo+IPOBECJudmyVHCDKn7P2XIvNpdRLtYVptVsA0BpQj8Pyikmd2JtD7rkqtlpJACKWUE5ag9WbWPM8o6MzimvjgsiRKQES6QApNcKOz4BnxK4ucdP4k40VT7jq1SjiRgZHaJKsOElJITaitFc4a0VGOOQzNoIJvPUuIzDbsQ2OvxxXNeytrZqTLfKmbyv/ACojN7tbRbU6tp5lClqqVA0JFVG/Va1IMTP4quWxTj7i1yz1OiaTdaMWdNQohIokEWJ1gtacCkhQ0IBFuRFYp9eqwSA2DtyiDvGmzb7LXMDQd/egeV3b2i0pZadZRjXU4TQkAnXqtbxYbvbrhoLM0hlw4sSCEg4RS+qRfT0gr/eBE7Qcnilco4ppDKqOpXbGDQ0GAqBsFC9NYoV6tUGYAtJiOUkXvoP7V5Q1WW7k/KKZW5LICG0qJUAgJqQkEmg1y0irabM7NMzjBR0LdEKxpo5iSVKOHKbUUnmOcUczttt1bKJLFLNuLwKQEISlSlFIqoIJFKECDPdXZS5ZktuKQo4yqqBQUIA8Be0HUZ0Az6OOgNyAZBmwk7ju46UDmsrmFCrCjnpqYq53gHe33lnUgFldVVSlSgglJIFDr5jTwi+3j2IuYLSkvqaDZUSACcVcJvRQ+U+OsZjKuHq8zvH4fd1zR08FhqdRpcbm2kiNe+YHJKe8gwpOydpltTJLrxQFkqRU4VgUqFDHQ1Fr1gqQ70oE+2paJZtKscryXhxYiUhWA1qNR3RAay4aIzO979OeaE28qiRjepgVa9O/yxa/7R0K2GznMLHlsvNo13HUQI0EKa6AtX2BPofYQ62goQcVE0ApRRB4bagmKjbjKmHXJx11bjACR7vcpqcKAaKVg4s2kAKJhYwgOPDq1aE/X9Wv+0JyYWQauPHqxzPiPq1jM3yeWvJB+SZtB0nSd9tRfcjNSyMFO9GDtBalqlnEpwyvJGLCAQkqwWIJsO8Ysth7OUtZmVOFTDyApthQJS3UApoCopBAqLDnGeLeVRQxvU6NNr07nLFr/vCXMrCTRx7RGhPy8s0GcC5zYBibabLQOB3uEE7dSqzrZgKWFgOQhEwPbq7e6fEzgUC0lIKia4qZa/lWCL1ji1Kbqbi1yeDIVLvFsNUwEBt4slKiSUpOavI4Vpio/wCDXqg++ucZVTCrQ0y9r5fnHqacXtFS221uS5YXdVzjqSLYVJtlrz1jydzX6g++ucZVTCvQ0y9r5fnG5jnUm5HVA07ssxN9YvOvsSyJMwvLW5T4w/HOGiq8K76W7Xy/OHb3MeGH41w0rXKq9f8AuwzW5b4w/HOGiqnKu4tbtfL84dvcx8YfjXLVrlXev/dgjiPth+TnwVZfV9qYblv2+OcskjhXcnFfteVR6Qk7lP2+OcskjhXzrQ9ryqPSEnct+3xzlkkcK7k4r9ryqPSEncuYt8c5ZJHCvU1v2vKo9InnH2w/J/CvL6vtSVuW/f45zhA4V6il+18vzhHcp+/xzl0gcK7UpftedD6wlblv3+Oc4QOFeopftfL84R3Lfv8AHOXSBwrtTDftedD6xOn+2H5P4Uj1fakvct81+NcuAOFVqDXtedPzhOblPnF8c4KqrwrtrbtfP8oS9y3zX45y4HdXalP6vOGc3LmDi+OcFVV4V21t2vn+UTzj7Yfk/hVl9X2p3Nynzi+OcFVV4V21t2vn+UelbmPE/wDOuXXi4VafL2seHNy5g4vjnBVVRlXYXt2vn+Ue17mv1PxrnHi4V6fL2sTpz/8AYfk/hTL6vtTI3Mfqk++uWVi4VXFrdr5fnF1u5sZUu2UuOl5RXiClJNQKAYRiUo6gnXnFKncx+qT765ZeLhXcWt2vl+cdJCYVs9Tcs4pyYL7gIcuAgKKUUIUpVgb684XUc6q3KKgdwy5dL6wNN033FEIBmEW1gb25vWyy6phxta6JxHhwkUxaExd7TlS60tsLKCtJSFDVNeeo/WMw21JqYfLSnXFlLZzUN6pJ5qNxX8oHBUGVXHN3X75HhqpUcQpid5ECaW6elLGBJEvboxVCAKIx4eLNpzMKX3kQmZddX0q2SgFLBoUJrgpRJVhBF9BzMUanDmzO8Cf9H1QlOHNmd4E/6PqjrDCMjQ6AeHDW+uvGEnMd6M3XxLJM48pbrD9OjlyKhrEMaaBSsAokFNhzgyZXiSCKgEAgeAI0jHH3lUUMbtMtr0FuQxQ8xMr6zrHuPkT9Vhm0jNU8nOeBe/I6Wi3bc6nbdEKkLZvXWAthz34hyVWuWSwvrEiwdrQivRqANkkXrxQILmV1V1j3aeJ8T9WkeWXlBSaLdFXeVb3Trm0iqfk9zATN9lrDWbXmdh2ahWakowkWk7QW1MS5LCGXAFIwjOQUr7iqaWvBpWMd2bNqQplWN6gdxEXANCg0ObQ6fjGn7u7Y96a6UIUiiimhNTYA1/OM2Nwz6YBHVFuVz2nbfs2BFTcDzVpWFC9YeOemrm8sgW8eekRw48pSUt4VKJoBhNz/AOcc9tuFLRULUUP1Ed/Z/NNuzOdyjiRVtFLKyqx1NLUFPDWPSeScHQqYV1WowOIcdROxqRUcc4aCuO0vepZxlMwlvC6opGEnFyFdSO8IlurokmhNATQamg0HnFTvmWBtBronluLL/WoVwtqxJwpTlGubmdBFq+rChSvBJPoCYyeV8LSZUpikwDMLwIk5u3h4oqTtZOhUeRmz7uH5gJaxqUlCCqirCwUFUub2HKmhsPDW0CUKcISEJITx5ionhSOagLkch9sU23kTDzLTzuRhKh0STUYlKIqpP2gk3IqEkitItZjYtQFdLUJAoL5QTWl9LnSvnpeKxfkt2HIL2i4NgQYc2Ab3kam268bHP/yIOG0vqC3U/Js6+gVn6wj+MN+EIiONAVJz+ML11hiIen6xNiiDtxknp52oWOsHFpxuaW/u0GPrrAZua30T84XEqbCnBhLmUKzr4cSRXUaV1EFnvbXzo1+ZMa8ZesY4fpG5BT6qgbQUVzDcuSQhSFOHCopXiSpNKKCgcN7ihB8fGG8OgWWUKWUql3HDjWVLxJASCFKVUCnhzvUc7Kb6B0AKcAuLpcCVWINMSTWnlHKUlpdCSgOVCgQSp3EqmHCQFKNRYcud4BroaPCPb4bNiuFRbPVK9E2r3lRmMCSEe8qNXaCiejx0NVYRhrfFSt4nTqQsNlxL6pgtJK2WXcBSKGqyjHQDFVNanlrSLWWEuhKUpKKJTQEqSVUGhJNybaxHnpOWdWFqcIVhw5HimwJPdPmf7EX0gLpv8d3j3qoUbZWy1ErJ6dtCkFvA44ouVrUrSoLIApYUuKGIkissy0zMJUorQpxIxrKkAIcNLKXSvjcfhpFkzIyyQsB9edGE1mVGgJ1TVVj5i8e5GUlmiopcriFwt3Em5rWijTU6/ZE6QXm+mzds1PLaVAFE2lIhhlcwhTuNCSsY3VFut9UqUEkZjao0HgIh7TmFIcm3go4mUNKQCo9GCtJCsSOkAI+2l73i0bkJZK8fSqJBrRUwSi9dUlVKZjb7PARKSJcLcXjTVeEKBWCnKCE0STQRbaoGsn+xbuB79FCFCQz0sxNtqUvDRk0SsgixNqKtUi9hXzh90Gvh0OFS1KcFSSsqFiQMNVKp+Bh0bPlUpcAeVnKcR94OLKSRRVajn9otHfZzEuwCEOWJFlO4qU8MRtAueC0tE7Nm4Qdp1PgoBdWfrAXvek+/SVAs50aaDrhraC0TbVs6NfmTAjvQ10k7JrbQtxKVoqpGZKetScxCSBa+otB4S1S+53gVH6I19YXrDUhUjJCNP6wvWGpCpEgblFW7xbW91a6To1OZgnCDQ3BNa0PhFAvfhQr8I4aU7xvUfciV7RUVlBlUesTYa8KvIx32etsIlj02CjacYLxoKIACcBcCQda5DoeE0MbGMpCkHOZJk7SNI3JZJzQCum7+8RmXHEdCpvBzKq1uR8o8IW8G8RlnG0dCpzHeoVSlwPlMU25CfjJw4VUKiQSbHrVXFoW+6fjJM4VUCgSQbDrE3NoZ5vS85y5bRMX+rPPVTM7LK6N78KOH4RwVJ7xtprki+3d2t7010nRqboopwk1NgDWtB4xy2jOoLUwOkQcSFBADgJV1dKAVN61FAB9h1Nf7OUUlDlUOsVY68KfIQD2UjSL2sykEbSdVATMEophQ1IUY0xR9pSgdbUitK8/Ag1FoibsbKMpMJfxBdAoYcOHUUrWp/SGhRtw2OxFFppU3Q03Ihp1ttB3BAabSZK5TOwuknFTSl0CnOk6MDQ1qBircV8ouHEBQIOhBB+w1hoUKr4qtiC11R0kARoIvsgD3qw0NFlSTOwFrCEqfUUtnq0lIokcwKHnQVPOLbo1kYSvL4YRWla0xa0rS3kIUKHYvyjisQ4dK+YmLNGtz1QNSrofNFwZbbv0EDWdi7wjChRhVpzDGFCiKlV7wbAbmwgOqcGBRIwFIufHEkxUf8AStQcb9llXE3qaf09LCFCh7K9VjBlcQNyotB1CZr2fyow0W/lViGZvW39PyEJG4MqMOd/LWmZrn/wBuFCi/O65+me9VkbuSHs/lbdY/ZJTxNaGtf5f1GEPZ/KinWP2SU8TWhrX+X9RhQonnmI+ue9TI3ckdwJW+d/hCeJrQU/p+UMfZ/K36x+6Qnia0FKfy/pEKFE88xH1z3qZG7k69wJU1zv3oOJvlp/L8oZz2fypxZ38yqnM1rf8Ap+ZhQonnleeue9TI3ck57P5U4s7+ZVTma1vp1fmY9q3Alia437rxcTev/wCPSFCied19M571Mjdy8o9n8qCk437KxcTetv6elhFzu/sRuUbLbZWQpeM4ykmtAO6kWokQoUDUr1XsOZxOmqsNA0Cs4eFChKtNChQoitV23tkommuicKkjEFVTStQCOYIpeKJz2fyxxdY9cjmjl/ghQobTxFVgytcQPehLQblWuwt2mpVbi0KWouahRTQXJtRI8YW3t2mppba1qWkoqAElNDcG9UnwhoUF0tTP0mY5tJ9ngplGiq2/Z/LjD1r1j4t+X0RebB2QiVa6JsqUCoqqqlakAd0AUtChQNTEVXthziVA0C4VlChQoUiX/9k=')";
    div.style.backgroundSize = "contain";
};
var btn6 = document.getElementById("btn-6");
btn6.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QR2VqsmjjF9vR7GOIKE_lA5HeiD1csXrNWKuzfO4SYzVSppf7tX6iav0WNHQJWGodmc&usqp=CAU')";
    div.style.backgroundSize = "contain";
};
var btn7 = document.getElementById("btn-7");
btn7.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAQvsTguA_UKvsMB2Fa5ZkMF8GJJrkDZb8g&usqp=CAU')";
    div.style.backgroundSize = "contain";
};
var btn8 = document.getElementById("btn-8");
btn8.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0xBw3YQW0C62o9UjLMKDE7qzW9dtU1nXow&usqp=CAU')";
    div.style.backgroundSize = "contain";
};
var btn9 = document.getElementById("btn-9");
btn9.onclick = function () {
    p.innerText = "";
    div.style.backgroundImage =
        "url('data:image/jpeg;base64,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')";
    div.style.backgroundSize = "contain";
};
