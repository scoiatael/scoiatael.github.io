$( function() {
  safe_load($( "#site-link-main" ), "site-link-main.html");
});

var try_set_events = function() {
  if(typeof site_link_loaded == "undefined") {
    setTimeout(try_set_events, 100);
  } else {
    set_events();
  }
};

$( function() {
  try_set_events();
});

var set_events = function () {
  console.log("setting events");

  $( "#site-link" ).click( function(event) {
    console.log("site-link click");
    event.preventDefault();
    $( "#site-link-dialog" ).dialog( "open" );
    site_link = this;
  });
  $( "#site-link-dialog" ).dialog({
    autoOpen:false,
    width: 450,
    modal:true,
    resizeable:false,
    buttons: {
      "Yes": function() {
        window.location = site_link.href;
        $( this ).dialog( "close" );
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    }
  });

};

