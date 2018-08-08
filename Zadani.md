Level 1 - Umístění panáčka
==========================

Umísti panáčka na pevnou pozici 400, 300 pixelů na obrazovce.

Tyto příkazy jsou povinné:
~~~
var objektAlien;
var alienX;
var alienY;
var alienSirka;
var alienVyska;

objektAlien = document.querySelector("#alien");
alienSirka = 64;
alienVyska = 70;
~~~


Dále můžeš použít následující příkazy (ne nutně v tomto pořadí):
~~~
objektAlien.style.left = alienX + "px";
~~~

~~~
alienX = 400;
~~~

~~~
objektAlien.style.top = alienY + "px";
~~~

~~~
alienY = 300;
~~~



Level 2 - Pohyb panáčka
=======================
Naprogramuj pohyb panáčka po obrazovce při stisku klávesy.

Všechny příkazy v tomto levelu budeš psát do funkce `priStiskuKlavesy()`,
proto ji musíš v programu nadefinovat:

~~~
function priStiskuKlavesy(klavesa) {

    alert("Klávesa stisknuta"); 

    // Sem muzes vlozit prikazy ze seznamu (2)

}
~~~

Dále je nutné tuto funkcni nastavit v HTML, aby se vyvolávala:

Původní kousek HTML:
~~~
<body>
~~~

Nový kousek HTML:
~~~
<body onkeydown="priStiskuKlavesy(event);">
~~~


Zpět v JavaScriptu je ve fuknci potřeba naprogramovat,
co se má stát při stisku.
Můžeš použít příkazy ze seznamu (2):

~~~
objektAlien.style.left = alienX + "px";
~~~

~~~
objektAlien.style.top = alienY + "px";
~~~

~~~
alienX = alienX + 10;
~~~

~~~
alienX = alienX - 10;
~~~

~~~
alienY = alienY + 10;
~~~

~~~
alienY = alienY - 10;
~~~

~~~
if (klavesa.key === "ArrowRight") {

    // Sem muzes vlozit kterekoliv prikazy 
    // ze seznamu (2).
    // Prikazy zde se provedou pouze,
    // pokud byla stisknuta 
    // SIPKA VPRAVO

}
~~~

~~~
if (klavesa.key === "ArrowLeft") {

    // Sem muzes vlozit kterekoliv prikazy 
    // ze seznamu (2).
    // Prikazy zde se provedou pouze,
    // pokud byla stisknuta 
    // SIPKA VLEVO

}
~~~

~~~
if (klavesa.key === "ArrowUp") {

    // Sem muzes vlozit kterekoliv prikazy 
    // ze seznamu (2).
    // Prikazy zde se provedou pouze,
    // pokud byla stisknuta 
    // SIPKA NAHORU
    
}
~~~

~~~
if (klavesa.key === "ArrowDown") {

    // Sem muzes vlozit kterekoliv prikazy 
    // ze seznamu (2).
    // Prikazy zde se provedou pouze,
    // pokud byla stisknuta 
    // SIPKA DOLU

}
~~~



Level 3 - Přidej minci
======================

Přidej minci do HTML do `<body>`.

~~~
<!-- předmět k sebrání, id="mince" -->
<img id="mince" src="obrazky/mince.png">
~~~

V JavaScriptu ji ulož do proměnné:

~~~
var objektMince;
var minceX;
var minceY;
var minceSirka;
var minceVyska;

objektMince = document.querySelector("#mince");
minceSirka = 32;
minceVyska = 32;
~~~


Nastav minci buď na pevnou nebo na náhodnou pozici.
Budou se ti hodit tyto příkazy: 

~~~
minceX = 200;
~~~
~~~
minceX = Math.floor(Math.random() * (document.documentElement.clientWidth - minceSirka));
~~~
~~~
minceY = Math.floor(Math.random() * (document.documentElement.clientHeight - minceVyska));
~~~
~~~
minceX = 100;
~~~
~~~
objektMince.style.left = minceX + "px";
~~~
~~~
objektMince.style.top = minceY + "px";
~~~


Level 4 - Umožni sbírání mincí
============================== 

Pro sebrání mince je nutno testovat střet objektu panáčka a objektu mince.

~~~
// zjistíme, zda docháí ke kolizi mimozemšťana a objektMince
// tj. zda se překrývají dva obdélníky o známých souřadnicích
if (!(alienX + alienSirka < minceX ||
      minceX + minceSirka < alienX ||
      alienY + alienVyska < minceY ||
      minceY + minceVyska < alienY)) {
      
    // Sem vloz prikazy, ktere se maji provest
    // pri stretu panacka a mince 
    // Napr. posun minci na jine nehodne misto
    // Zvetsi pocetScore o 1.
      
}
~~~


Level 5 - Změna obrázků panáčka při pohybu
==========================================

Když jde panáček doprava, nastav mu obrázek `obrazky/alien-vpravo.png`,
když jde doleva, nastav mu `obrazky/alien-vlevo.png`, a podobně 
nahoru a dolů.

Panáčkovi nastavíš obrázek nasledujícím příkazem:
~~~
objektAlien.src = "obrazky/alien-vpravo.png";
~~~



Level 6 - Přehrávej zvuky při sbírání mince
===========================================



Level 7 - Přidej nepřátelskou postavičku
========================================
