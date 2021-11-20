var A06;
(function (A06) {
    var EU = "Europe";
    var SA = "Southamerica";
    var NA = "Northamerica";
    var Af = "Africa";
    var As = "Asia";
    var Au = "Australa";
    var EU2018 = 4209.3;
    var EU2008 = 4965.7;
    var SA2018 = 1261.5;
    var SA2008 = 1132.6;
    var NA2018 = 6035.6;
    var NA2008 = 6600.4;
    var Af2018 = 1235.5;
    var Af2008 = 1028;
    var As2018 = 16274.1;
    var As2008 = 12954.7;
    var Au2018 = 2100.5;
    var Au2008 = 1993;
    var hundert = 100;
    var alles = EU2018 + SA2018 + NA2018 + Af2018 + As2018 + Au2018;
    var resultEU2 = (hundert / alles * EU2018).toFixed(2);
    var resultEU3 = (hundert / EU2008 * EU2018 - hundert).toFixed(2);
    var resultEU4 = (EU2018 - EU2008).toFixed(2);
    var resultSA2 = (hundert / alles * SA2018).toFixed(2);
    var resultSA3 = (hundert / SA2008 * SA2018 - hundert).toFixed(2);
    var resultSA4 = (SA2018 - SA2008).toFixed(2);
    var resultNA2 = (hundert / alles * NA2018).toFixed(2);
    var resultNA3 = (hundert / NA2008 * NA2018 - hundert).toFixed(2);
    var resultNA4 = (NA2018 - NA2008).toFixed(2);
    var resultAf2 = (hundert / alles * Af2018).toFixed(2);
    var resultAf3 = (hundert / Af2008 * Af2018 - hundert).toFixed(2);
    var resultAf4 = (Af2018 - Af2008).toFixed(2);
    var resultAs2 = (hundert / alles * As2018).toFixed(2);
    var resultAs3 = (hundert / As2008 * As2018 - hundert).toFixed(2);
    var resultAs4 = (As2018 - As2008).toFixed(2);
    var resultAu2 = (hundert / alles * Au2018).toFixed(2);
    var resultAu3 = (hundert / Au2008 * Au2018 - hundert).toFixed(2);
    var resultAu4 = (Au2018 - Au2008).toFixed(2);
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () {
            document.querySelector("#titleRegion").innerHTML = EU;
            document.querySelector(".one").innerHTML = String(EU2018);
            document.querySelector(".two").innerHTML = resultEU2 + "%";
            document.querySelector(".three").innerHTML = resultEU3 + "%";
            document.querySelector(".four").innerHTML = String(resultEU4);
            document.getElementById("chart").style.height = "13.53%";
        });
    });
    window.addEventListener("load", function () {
        document.querySelector(".northamerica").addEventListener("click", function () {
            document.querySelector("#titleRegion").innerHTML = NA;
            document.querySelector(".one").innerHTML = String(NA2018);
            document.querySelector(".two").innerHTML = resultNA2 + "%";
            document.querySelector(".three").innerHTML = resultNA3 + "%";
            document.querySelector(".four").innerHTML = String(resultNA4);
            document.getElementById("chart").style.height = "19.40%";
        });
    });
    window.addEventListener("load", function () {
        document.querySelector(".southamerica").addEventListener("click", function () {
            document.querySelector("#titleRegion").innerHTML = SA;
            document.querySelector(".one").innerHTML = String(SA2018);
            document.querySelector(".two").innerHTML = resultSA2 + "%";
            document.querySelector(".three").innerHTML = resultSA3 + "%";
            document.querySelector(".four").innerHTML = String(resultSA4);
            document.getElementById("chart").style.height = "4.05%";
        });
    });
    window.addEventListener("load", function () {
        document.querySelector(".africa").addEventListener("click", function () {
            document.querySelector("#titleRegion").innerHTML = Af;
            document.querySelector(".one").innerHTML = String(Af2018);
            document.querySelector(".two").innerHTML = resultAf2 + "%";
            document.querySelector(".three").innerHTML = resultAf3 + "%";
            document.querySelector(".four").innerHTML = String(resultAf4);
            document.getElementById("chart").style.height = "20.18%";
        });
    });
    window.addEventListener("load", function () {
        document.querySelector(".asia").addEventListener("click", function () {
            document.querySelector("#titleRegion").innerHTML = As;
            document.querySelector(".one").innerHTML = String(As2018);
            document.querySelector(".two").innerHTML = resultAs2 + "%";
            document.querySelector(".three").innerHTML = resultAs3 + "%";
            document.querySelector(".four").innerHTML = String(resultAs4);
            document.getElementById("chart").style.height = "52.30%";
        });
    });
    window.addEventListener("load", function () {
        document.querySelector(".australia").addEventListener("click", function () {
            document.querySelector("#titleRegion").innerHTML = Au;
            document.querySelector(".one").innerHTML = String(Au2018);
            document.querySelector(".two").innerHTML = resultAu2 + "%";
            document.querySelector(".three").innerHTML = resultAu3 + "%";
            document.querySelector(".four").innerHTML = String(resultAu4);
            document.getElementById("chart").style.height = "6.75%";
        });
    });
    // ich vermute es gibt eine einfachere Methode das in Funktionen zu verpacken, aber die habe ich noch nicht rausgefunden
})(A06 || (A06 = {}));
//# sourceMappingURL=script.js.map