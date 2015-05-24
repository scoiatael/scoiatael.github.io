$(function() {
  safe_load($( "#accordion-main" ), "accordion-main.html");
});

$(function() {
  try_set_accordion_events();
});

var try_set_accordion_events = function () {
  if(typeof accordion_loaded == "undefined") {
    setTimeout(try_set_accordion_events, 100);
  } else {
    set_accordion_events();
  }
}

var set_accordion_events = function() {
  console.log("setting accordion");
  var site_link = null;
  $( "#accordion" ).accordion();
  $( "#projects-accordion" ).accordion();
};
