$(document).ready(function () {
    let onepage = $(".onepage");
    let root = $("html, body");

    let currentHorizontalPos = 0;
    let horizontalWidth = $(window).width();
    let numberOfHorizontalSlides = $(".horizontal").length;

    for (i = 0; i < onepage.length; i++) {
        let id = onepage[i].id;

        $("#" + id).append("<a href='" + id + "'> </a>")
    }

    $("a").click(function () {

        if ($.attr(this, "href").indexOf("#") != -1 && $.attr(this, "href") != "#") {

            console.log($.attr(this, "href"));
            root.animate({
                scrollTop: $($.attr(this, "href")).offset().top
            }, 1000);
        }

    });

    $(".horizontalWrap").append("<div id='buttonLeft'>&lt</div><div id='buttonRight'>&gt</div>");
    $(".horizontalWrap").css("width", numberOfHorizontalSlides * horizontalWidth);
    $(".horizontal").css("width", horizontalWidth);

    function moveSlide() {
        $(".horizontalWrap").animate({ "marginLeft": horizontalWidth * (-currentHorizontalPos) });
    }

    function changePosition(left) {
        if (currentHorizontalPos == numberOfHorizontalSlides - 1 && !left) {
            currentHorizontalPos = 0;
        }
        else if (!left) {
            currentHorizontalPos++;
        }
        if(currentHorizontalPos == 0 && left){
            currentHorizontalPos = numberOfHorizontalSlides - 1;
        } 
        else if(left) {
            currentHorizontalPos--;
        }
        moveSlide();
    }

    $("#buttonLeft").click(function() {
        changePosition(true);
    });
        $("#buttonRight").click(function() {
        changePosition(false);
    });
});
