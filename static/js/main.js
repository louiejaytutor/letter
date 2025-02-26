$(document).ready(function() {
    var envelope = $("#envelope");
    var letter = $("#letter");

    var button1 = $("#button-1");
    var button2 = $("#button-2");
    var button3 = $("#button-3");

    button1.click(function() {
        envelope.addClass("open").removeClass("close");

        button1.css("display", "none");
        button2.css("display", "inline-block");
        button3.css("display", "inline-block");
    });

    button2.click(function() {
        if (letter.hasClass("expand")) {
            letter.removeClass("expand");

            button2.text("Read");
            button3.css("display", "inline-block");
        }
        else {
            letter.addClass("expand");

            button2.text("Back");
            button3.css("display", "none");
        }
    });

    button3.click(function() {
        envelope.addClass("close").removeClass("open");
        letter.removeClass("expand");

        button1.css("display", "inline-block");
        button2.css("display", "none");
        button3.css("display", "none");
    });
})