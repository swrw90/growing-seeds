$(document).ready(function (){
let onepage = $(".onepage");
let root = $("html, body");

for(i = 0; i < onepage.length; i++) {
    let id = onepage[i].id;

    $("#"+id).append("<a href='"+id+"'></a>")
}
});
