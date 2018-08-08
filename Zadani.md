Level 1
=======

Umísti panáčka na náhodnou pozici na obrazovce.

Nejprve určitě použij následující příkazy:
~~~
var alien;
var alienX;
var alienY;

alien = document.querySelector("#alien");
~~~


Dále můžeš použít následující příkazy:
~~~
alien.style.left = alienX + "px";
~~~

~~~
alienX = 400;
~~~

~~~
alienX = Math.random() * 800;
~~~

~~~
alien.style.top = alienY + "px";
~~~

~~~
alienY = 300;
~~~

~~~
alienY = Math.random() * 600;
~~~



Level 2
=======
Naprogramuj pohyb panáčka po obrazovce při stisku klávesy.

Všechny příkazy v tomto levelu budeš psát do funkce `priStiskuKlavesy()`,
proto ji musíš v programu nadefinovat:

~~~
function priStiskuKlavesy(klavesa) {

    // Sem muzes vlozit prikazy ze seznamu (2)

}
~~~


Seznam (2) příkazů pro použití:
~~~
alien.style.left = alienX + "px";
~~~

~~~
alien.style.top = alienY + "px";
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



Level 3
=======

Umísti minci na náhodnou pozici na obrazovce.


Level 4
=======

Umožni sebrat minci a přičti skóre.
