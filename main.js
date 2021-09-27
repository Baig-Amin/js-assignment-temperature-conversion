function fahrenheit() {
    const cToFahr1 = (22 * 9) / 5 + 32;
    const cToFahr2 = (8 * 9) / 5 + 32;

    const cToFahr3 = (30 * 9) / 5 + 32;
    const cToFahr4 = (20 * 9) / 5 + 32;

    const cToFahr5 = (32 * 9) / 5 + 32;
    const cToFahr6 = (23 * 9) / 5 + 32;

    const cToFahr7 = (31 * 9) / 5 + 32;
    const cToFahr8 = (16 * 9) / 5 + 32;

    const message1 = `High ${cToFahr1}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr2}\xB0F`;

    const message2 = `High ${cToFahr3}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr4}\xB0F`;

    const message3 = `High ${cToFahr5}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr6}\xB0F`;

    const message4 = `High ${cToFahr7}\xB0F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr8}\xB0F`;

    document.getElementById("temperature1").innerHTML = message1;
    document.getElementById("temperature2").innerHTML = message2;
    document.getElementById("temperature3").innerHTML = message3;
    document.getElementById("temperature4").innerHTML = message4;
}

function celcius() {
    const cToFahr1 = 22;
    const cToFahr2 = 8;

    const cToFahr3 = 30;
    const cToFahr4 = 20;

    const cToFahr5 = 32;
    const cToFahr6 = 23;

    const cToFahr7 = 31;
    const cToFahr8 = 16;

    const message1 = `High ${cToFahr1}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr2}\xB0C`;

    const message2 = `High ${cToFahr3}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr4}\xB0C`;

    const message3 = `High ${cToFahr5}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr6}\xB0C`;

    const message4 = `High ${cToFahr7}\xB0C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Low ${cToFahr8}\xB0C`;

    document.getElementById("temperature1").innerHTML = message1;
    document.getElementById("temperature2").innerHTML = message2;
    document.getElementById("temperature3").innerHTML = message3;
    document.getElementById("temperature4").innerHTML = message4;
}



// First card December to February

function showDate1() {


    function monthReturn(mm) {

        var dec = 11;
        var jan = 0;
        var feb = 1;

        if (mm == dec) {
            return 12;    //December
        }
        else if (mm == jan) {
            return 1; //January
        }
        else if (mm == feb) {
            return 2; //February
        }
        else {

            function randomMonthReturn(randomMonth) {

                var randomDec = 0;
                var randomJan = 1;
                var randomFeb = 2;

                if (randomMonth == randomDec) {
                    return 12;
                }
                else if (randomMonth == randomJan) {
                    return 1;
                }
                else if (randomMonth == randomFeb) {
                    return 2;
                }
            }

            var num = Math.random() * 2;
            var num1 = Math.round(num);
            num = parseInt(num1, 10);

            return randomMonthReturn(num);

        }

    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    mm = monthReturn(mm);

    if (mm < today.getMonth()) {
        yyyy = today.getFullYear() + 1;

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }
    else {

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }

}


// Second card March to May 
function showDate2() {


    function monthReturn(mm) {

        var mar = 2;
        var apr = 3;
        var may = 4;

        if (mm == mar) {
            return 3;    //March
        }
        else if (mm == apr) {
            return 4; //April
        }
        else if (mm == may) {
            return 5; //May
        }
        else {

            function randomMonthReturn(randomMonth) {

                var randomMar = 0;
                var randomApr = 1;
                var randomMay = 2;

                if (randomMonth == randomMar) {
                    return 3;
                }
                else if (randomMonth == randomApr) {
                    return 4;
                }
                else if (randomMonth == randomMay) {
                    return 5;
                }
            }

            var num = Math.random() * 2;
            var num1 = Math.round(num);
            num = parseInt(num1, 10);

            return randomMonthReturn(num);

        }

    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    mm = monthReturn(mm);

    if (mm < today.getMonth()+1) {
        yyyy = yyyy +1;

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }
    else {

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }

}




// Third card June to August
function showDate3() {


    function monthReturn(mm) {

        var jun = 5;
        var jul = 6;
        var aug = 7;

        if (mm == jun) {
            return 6;    //June
        }
        else if (mm == jul) {
            return 7; //July
        }
        else if (mm == aug) {
            return 8; //August
        }
        else {

            function randomMonthReturn(randomMonth) {

                var randomJun = 0;
                var randomJul = 1;
                var randomAug = 2;

                if (randomMonth == randomJun) {
                    return 6;
                }
                else if (randomMonth == randomJul) {
                    return 7;
                }
                else if (randomMonth == randomAug) {
                    return 8;
                }
            }

            var num = Math.random() * 2;
            var num1 = Math.round(num);
            num = parseInt(num1, 10);

            return randomMonthReturn(num);

        }

    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    mm = monthReturn(mm);

    if (mm < today.getMonth()+1) {
        yyyy = yyyy + 1;

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }
    else {

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }

}


// Fourth card September to November
function showDate4() {


    function monthReturn(mm) {

        var sep = 8;
        var oct = 9;
        var nov = 10;

        if (mm == sep) {
            return 9;    //September
        }
        else if (mm == oct) {
            return 10; //Octobar
        }
        else if (mm == nov) {
            return 11; //November
        }
        else {

            function randomMonthReturn(randomMonth) {

                var randomSep = 0;
                var randomOct = 1;
                var randomNov = 2;

                if (randomMonth == randomDec) {
                    return 9;
                }
                else if (randomMonth == randomJan) {
                    return 10;
                }
                else if (randomMonth == randomFeb) {
                    return 11;
                }
            }

            var num = Math.random() * 2;
            var num1 = Math.round(num);
            num = parseInt(num1, 10);

            return randomMonthReturn(num);

        }

    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();

    mm = monthReturn(mm);

    if (mm < today.getMonth()+1) {
        yyyy = today.getFullYear() + 1;

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }
    else {

        if (dd < 10) {
            dd = "0" + dd;
        }
        
        if (mm < 10) {
            mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
        document.getElementById("outputDate").innerHTML = today;
    }

}
