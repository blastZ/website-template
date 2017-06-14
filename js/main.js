var navBar = $("#navBar");

$(document).scroll(function() {
    if($(this).scrollTop() >= 120) {
        navBar.removeClass("w3-text-white").addClass("w3-white w3-card w3-animate-top");
    }else {
        navBar.removeClass("w3-white w3-card w3-animate-top").addClass("w3-text-white");
    }
});

function onClick(element) {
  $("#img01").attr("src", element.src).css("max-height", "700px");
  $("#modal01").css("display", "block");
  var captionText = $("#caption")[0];
  captionText.innerHTML = element.alt;
}
