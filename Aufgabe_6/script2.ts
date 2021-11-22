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
    
    var alles:number= EU2018+SA2018+NA2018+Af2018+As2018+Au2018;
    

    function emission(country, e2018, e2008){
        document.querySelector("#titleRegion").innerHTML=country;
        document.querySelector(".oneCountry").innerHTML=country;
        document.querySelector(".one").innerHTML=e2018.toString();
        document.querySelector(".two").innerHTML= Math.round(e2018/alles*100*100)/100 + "%";
        document.querySelector(".three").innerHTML= Math.round((e2018-e2008)/e2008*100*100/100)+"%";
        document.querySelector(".four").innerHTML= `${Math.round((e2018-e2008)*100)/100}`;
        document.getElementById("chart").style.height=`${Math.round((e2018/alles/100*100)/100)}%`;
    }

    window.addEventListener("load", function(){
        document.querySelector(".europe").addEventListener("click", function(){emission(EU, EU2018, EU2008);});
        document.querySelector(".northamerica").addEventListener("click", function(){emission(NA, NA2018, NA2008);});
        document.querySelector(".southamerica").addEventListener("click", function(){emission(SA, SA2018, SA2008);});
        document.querySelector(".africa").addEventListener("click", function(){emission(Af, Af2018, Af2008);});
        document.querySelector(".asia").addEventListener("click", function(){emission(As, As2018, As2008);});
        document.querySelector(".australia").addEventListener("click", function(){emission(Au, Au2018, Au2008);});
    })
    
   
}