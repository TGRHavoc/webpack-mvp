
export function indexMethod(){
    $(".content").append("<h4>Hello from index.js</h4>");
}

window.addEventListener("DOMContentLoaded", function(){
    $("body h2").text("Woop, we've loaded");
});
