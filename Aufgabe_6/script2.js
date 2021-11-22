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
    var alles = EU2018 + SA2018 + NA2018 + Af2018 + As2018 + Au2018;
    function emission(country, e2018, e2008) {
        document.querySelector("#titleRegion").innerHTML = country;
        document.querySelector(".oneCountry").innerHTML = country;
        document.querySelector(".one").innerHTML = e2018.toString();
        document.querySelector(".two").innerHTML = Math.round(e2018 / alles * 100 * 100) / 100 + "%";
        document.querySelector(".three").innerHTML = Math.round((e2018 - e2008) / e2008 * 100 * 100 / 100) + "%";
        document.querySelector(".four").innerHTML = `${Math.round((e2018 - e2008) * 100) / 100}`;
        document.getElementById("chart").style.height = `${Math.round((e2018 / alles / 100 * 100) / 100)}%`;
    }
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () { emission(EU, EU2018, EU2008); });
        document.querySelector(".northamerica").addEventListener("click", function () { emission(NA, NA2018, NA2008); });
        document.querySelector(".southamerica").addEventListener("click", function () { emission(SA, SA2018, SA2008); });
        document.querySelector(".africa").addEventListener("click", function () { emission(Af, Af2018, Af2008); });
        document.querySelector(".asia").addEventListener("click", function () { emission(As, As2018, As2008); });
        document.querySelector(".australia").addEventListener("click", function () { emission(Au, Au2018, Au2008); });
    });
})(A06 || (A06 = {}));
//# sourceMappingURL=script2.js.map