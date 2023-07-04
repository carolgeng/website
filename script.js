document.addEventListener('DOMContentLoaded', function(event) {
    var dataText = ["Designer, Developer, Innovator"];
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typewriter(text, i, fnCallback) {
        if(i < (text.length)) {
            // add next character to h2
            //access the element in the HTML file, set its innerHTML equal to first index of the array and a blinker icon, reveals one by one 
            document.querySelector("h2").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typewriter(text, i + 1, fnCallback)
            }, 100);
        } 
        else if(typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if(typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        // show text one by one
        if(i < dataText[i].length) {
            typewriter(dataText[i], 0, function() {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0);
});