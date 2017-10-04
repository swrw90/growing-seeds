$(document).ready(function () {
    let onepage = $(".onepage");
    let root = $("html, body");

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
});
