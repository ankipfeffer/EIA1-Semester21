namespace A06{

    var EU:string="Europe";
    var SA:string="Southamerica";
    var NA:string="Northamerica";
    var Af:string="Africa";
    var As:string="Asia";
    var Au:string="Australa";

    var EU2018 : number = 4209.3;
    var EU2008:number= 4965.7;
    
    var SA2018 : number = 1261.5;
    var SA2008:number= 1132.6;
    
    var NA2018 : number = 6035.6;
    var NA2008:number= 6600.4;
    
    var Af2018 : number = 1235.5;
    var Af2008:number= 1028;
    
    var As2018 : number = 16274.1;
    var As2008:number= 12954.7;
    
    var Au2018 : number = 2100.5;
    var Au2008:number= 1993;
    
    var hundert:number=100;
    
    var alles:number= EU2018+SA2018+NA2018+Af2018+As2018+Au2018;
    
    
    var resultEU2:number = (hundert / alles * EU2018).toFixed(2);
    var resultEU3:number= (hundert / EU2008 * EU2018 - hundert).toFixed(2);
    var resultEU4:number= (EU2018 - EU2008).toFixed(2);
    
    var resultSA2:number= (hundert / alles * SA2018).toFixed(2);
    var resultSA3:number= (hundert / SA2008 * SA2018 - hundert).toFixed(2);
    var resultSA4:number= (SA2018 - SA2008).toFixed(2);
    
    var resultNA2:number= (hundert / alles * NA2018).toFixed(2);
    var resultNA3:number= (hundert / NA2008 * NA2018 - hundert).toFixed(2);
    var resultNA4:number= (NA2018 - NA2008).toFixed(2);
    
    var resultAf2:number= (hundert / alles * Af2018).toFixed(2);
    var resultAf3:number= (hundert / Af2008 * Af2018 - hundert).toFixed(2);
    var resultAf4:number= (Af2018 - Af2008).toFixed(2);
    
    var resultAs2:number= (hundert / alles * As2018).toFixed(2);
    var resultAs3:number= (hundert / As2008 * As2018 - hundert).toFixed(2);
    var resultAs4:number= (As2018 - As2008).toFixed(2);
    
    var resultAu2:number= (hundert / alles * Au2018).toFixed(2);
    var resultAu3:number= (hundert / Au2008 * Au2018 - hundert).toFixed(2);
    var resultAu4:number= (Au2018 - Au2008).toFixed(2);



    window.addEventListener("load", function (){
        document.querySelector(".europe").addEventListener("click", function(){
            document.querySelector("#titleRegion").innerHTML= EU;
            document.querySelector(".one").innerHTML= String(EU2018);
            document.querySelector(".two").innerHTML= resultEU2 +"%";
            document.querySelector(".three").innerHTML= resultEU3 +"%";
            document.querySelector(".four").innerHTML= String(resultEU4);
            document.getElementById("chart").style.height = "13.53%";
            
        })
    })

    window.addEventListener("load", function (){
        document.querySelector(".northamerica").addEventListener("click", function(){
            document.querySelector("#titleRegion").innerHTML= NA;
            document.querySelector(".one").innerHTML= String(NA2018);
            document.querySelector(".two").innerHTML= resultNA2 +"%";
            document.querySelector(".three").innerHTML= resultNA3 +"%";
            document.querySelector(".four").innerHTML= String(resultNA4);
            document.getElementById("chart").style.height = "19.40%";
        })
    })

    window.addEventListener("load", function (){
        document.querySelector(".southamerica").addEventListener("click", function(){
            document.querySelector("#titleRegion").innerHTML= SA;
            document.querySelector(".one").innerHTML= String(SA2018);
            document.querySelector(".two").innerHTML= resultSA2 +"%";
            document.querySelector(".three").innerHTML= resultSA3 +"%";
            document.querySelector(".four").innerHTML= String(resultSA4);
            document.getElementById("chart").style.height = "4.05%";
        })
    })

    window.addEventListener("load", function (){
        document.querySelector(".africa").addEventListener("click", function(){
            document.querySelector("#titleRegion").innerHTML= Af;
            document.querySelector(".one").innerHTML= String(Af2018);
            document.querySelector(".two").innerHTML= resultAf2 +"%";
            document.querySelector(".three").innerHTML= resultAf3 +"%";
            document.querySelector(".four").innerHTML= String(resultAf4);
            document.getElementById("chart").style.height = "20.18%";
        })
    })

    window.addEventListener("load", function (){
        document.querySelector(".asia").addEventListener("click", function(){
            document.querySelector("#titleRegion").innerHTML= As;
            document.querySelector(".one").innerHTML= String(As2018);
            document.querySelector(".two").innerHTML= resultAs2 +"%";
            document.querySelector(".three").innerHTML= resultAs3 +"%";
            document.querySelector(".four").innerHTML= String(resultAs4);
            document.getElementById("chart").style.height = "52.30%";
        })
    })

    window.addEventListener("load", function (){
        document.querySelector(".australia").addEventListener("click", function(){
            document.querySelector("#titleRegion").innerHTML= Au;
            document.querySelector(".one").innerHTML= String(Au2018);
            document.querySelector(".two").innerHTML= resultAu2 +"%";
            document.querySelector(".three").innerHTML= resultAu3 +"%";
            document.querySelector(".four").innerHTML= String(resultAu4);
            document.getElementById("chart").style.height = "6.75%";
        })
    })

// ich vermute es gibt eine einfachere Methode das in Funktionen zu verpacken, aber die habe ich noch nicht rausgefunden

}