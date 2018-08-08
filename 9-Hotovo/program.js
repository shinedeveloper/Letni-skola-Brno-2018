var objektAlien;
var alienX;
var alienY;
var alienSirka;
var alienVyska;

var objektMince;
var minceX;
var minceY;
var minceSirka;
var minceVyska;

var objektSkore;
var pocetScore;

var zvukMince;
var zvukFanfara;


// Na stránce najdeme prvek s id="alien"
// a uložíme si ho do proměnné objektAlien pro pozdější použití
objektAlien = document.querySelector("#alien");
alienSirka = 64;
alienVyska = 70;

// do proměnných alienX a alienY si uložíme pozici mimozemšťana
alienX = 400;
alienY = 300;

// pozici mimozemšťana nastavíme do HTML
objektAlien.style.left = alienX + "px";
objektAlien.style.top = alienY + "px";

// to stejné uděláme pro minci
objektMince = document.querySelector("#mince");
minceSirka = 32;
minceVyska = 32;
minceX = Math.floor(Math.random() * (document.documentElement.clientWidth - 32));
minceY = Math.floor(Math.random() * (document.documentElement.clientHeight - 32));
objektMince.style.left = minceX + "px";
objektMince.style.top = minceY + "px";

// najdeme objekt, kam budeme zapisovat dosažené skóre
objektSkore = document.querySelector("#skore");
pocetScore = 0;

// najdeme v HTML a uložíme do proměnných objekty pro zvuky mince a fanfáry
zvukMince = document.querySelector("#zvukmince");
zvukFanfara = document.querySelector("#zvukfanfara");




// tato funkce se volá při stisku klávesy
function priStiskuKlavesy(klavesa) {

    // šipka vpravo
    if (klavesa.key === "ArrowRight") {
        alienX = alienX + 10;
        objektAlien.src = "obrazky/alien-vpravo.png";
    }

    // šipka vlevo
    if (klavesa.key === "ArrowLeft") {
        alienX = alienX - 10;
        objektAlien.src = "obrazky/alien-vlevo.png";
    }

    // šipka nahoru
    if (klavesa.key === "ArrowUp") {
        alienY = alienY - 10;
        objektAlien.src = "obrazky/alien-nahoru.png";
    }

    // šipka dolů
    if (klavesa.key === "ArrowDown") {
        alienY = alienY + 10;
        objektAlien.src = "obrazky/alien.png";
    }

    // mimozemšťana umístíme na nové souřadnice
    // k číslu přidáme text "px" protože hodnoty css
    // vlastností musí být včetně jednotek
    objektAlien.style.left = alienX + "px";
    objektAlien.style.top = alienY + "px";

    // zjistíme, zda docháí ke kolizi mimozemšťana a objektMince
    // tj. zda se překrývají dva obdélníky o známých souřadnicích
    if (!(alienX + alienSirka < minceX ||
          minceX + minceSirka < alienX ||
          alienY + alienVyska < minceY ||
          minceY + minceVyska < alienY)) {

        // obdélníky se překrývají, mimozemšťan našel minci
        // zvýšíme skóre a zapíšeme změnu do html
        pocetScore = pocetScore + 1;
        objektSkore.innerHTML = pocetScore;

        // přehrajeme zvuk sebrané mince
        zvukMince.play();

        // vygenerujeme nahodnou pozici na obrazovce
        // a minci tam přesuneme
        minceX = Math.floor(Math.random() * (document.documentElement.clientWidth - minceSirka));
        minceY = Math.floor(Math.random() * (document.documentElement.clientHeight - minceVyska));
        objektMince.style.left = minceX + "px";
        objektMince.style.top = minceY + "px";

        // pokud jsme našli 3 mince, vyhráli jsme hru
        if (pocetScore === 3) {

            // přehrajeme zvuk fanfáry
            zvukFanfara.play();

            // zobrazíme výherní hlášku
            alert("Hurááá! Vyhrála jsi.");

        }
    }

}
