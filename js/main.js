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

function toggleNavBar() {
    var navBar = $('#small-nav-bar');
    var classList = navBar.attr('class').split(' ');
    if(classList.length === 6) {
        navBar.addClass('w3-show');
    }else {
        navBar.removeClass('w3-show');
    }
}

var map, marker;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.274084, lng: 120.15507000000002},
    zoom: 8,
    scrollwheel: false,
    draggable: false
  });
  marker = new google.maps.Marker({
      position: {lat: 30.274084, lng: 120.15507000000002},
      map: map
  })
}
