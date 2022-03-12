// BUSINESS LOGIC
$(document).ready(function(){
    $(".dev").click(function(){
        $(".development").toggle();
    });
});
$(document).ready(function(){
    $(".product").click(function(){
        $(".planning").toggle();
    });
});

$(document).ready(function(){
    $(".design").click(function(){
        $(".project").toggle();
    });
});
// portfolio 

$(document).ready(function(){
    $(".firstImage").hover(function(){
        $("p.card-text-1").toggle();
    });
});
$(document).ready(function(){
    $(".secondImage").hover(function(){
        $("p.card-text-2").toggle();
    });
});
$(document).ready(function(){
    $(".thirdImage").hover(function(){
        $("p.card-text-3").toggle();
    });
});
$(document).ready(function(){
    $(".fourthImage").hover(function(){
        $("p.card-text-4").toggle();
    });
});
$(document).ready(function(){
    $(".fifthImage").hover(function(){
        $("p.card-text-5").toggle();
    });
});
$(document).ready(function(){
    $(".sixthImage").hover(function(){
        $("p.card-text-6").toggle();
    });
});
$(document).ready(function(){
    $(".seventhImage").hover(function(){
        $("p.card-text-7").toggle();
    });
});
$(document).ready(function(){
    $(".eighthImage").hover(function(){
        $("p.card-text-8").toggle();
    });
});


// USER INTERFACE


$(document).ready(function(){
    document.getElementById("button").onclick = function(){
        let user = document.getElementById("inputName").value;
        let email = document.getElementById("inputEmail4").value;
        let message = document.getElementById("floatingTextarea").value;
        
        if (user != "" && email != "" && message != "") {
            alert (`Hello ${user} we have received your message. Thank you for reaching out to us.`);
        } else {alert (`Hello, ${user} check the input boxes and submit again.`);
    }


    }
});