function fahrenheit(){

    const cToFahr1 = 22 * 9 / 5 + 32;
    const cToFahr2 = 8 * 9 / 5 + 32;

    const cToFahr3 = 30 * 9 / 5 + 32;
    const cToFahr4 = 20 * 9 / 5 + 32;

    const cToFahr5 = 32 * 9 / 5 + 32;
    const cToFahr6 = 23 * 9 / 5 + 32;

    const cToFahr7 = 31 * 9 / 5 + 32;
    const cToFahr8 = 16 * 9 / 5 + 32;


    const message1 = `High ${cToFahr1}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr2}\xB0F.`;

    const message2 = `High ${cToFahr3}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr4}\xB0F.`;

    const message3 = `High ${cToFahr5}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr6}\xB0F.`;

    const message4 = `High ${cToFahr7}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr8}\xB0F.`;

    document.getElementById("temperature1").innerHTML = message1;
    document.getElementById("temperature2").innerHTML = message2;
    document.getElementById("temperature3").innerHTML = message3;
    document.getElementById("temperature4").innerHTML = message4;
}


function celcius(){

    const cToFahr1 = 22;
    const cToFahr2 = 8;

    const cToFahr3 = 30;
    const cToFahr4 = 20;

    const cToFahr5 = 32;
    const cToFahr6 = 23;

    const cToFahr7 = 31;
    const cToFahr8 = 16;


    const message1 = `High ${cToFahr1}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr2}\xB0C.`;

    const message2 = `High ${cToFahr3}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr4}\xB0C.`;

    const message3 = `High ${cToFahr5}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr6}\xB0C.`;

    const message4 = `High ${cToFahr7}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr8}\xB0C.`;

    document.getElementById("temperature1").innerHTML = message1;
    document.getElementById("temperature2").innerHTML = message2;
    document.getElementById("temperature3").innerHTML = message3;
    document.getElementById("temperature4").innerHTML = message4;
}