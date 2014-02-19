var top_menu_data;
var github_data_loaded;

$( function() {
  safe_load($( "#top-menu-main" ), "top-menu-main.html"); 

  var githubapiurl = "https://api.github.com/users/scoiatael";
  $.getJSON(githubapiurl, function (s,d,t) { 
    console.log(s);
    error_handler(s,d,t); 
    top_menu_data = s; 
    github_data_loaded = true; });
});

var try_set_top_menu = function() {
  if(typeof top_menu_loaded == "undefined" || 
      typeof github_data_loaded == "undefined") {
    setTimeout(try_set_top_menu, 100);
  } else {
    set_top_menu();
  }
};

$( function() {
  try_set_top_menu();
});

var set_top_menu = function () {
  console.log("setting top_menu");
  if(top_menu_data == "Not Found") {
    $( "#ghdata" ).html( "Not Found" );
  } else {
    $( "#ghdata" ).html( 
"<div id=\"left\" class=\"column\" style=\" width: 300px; padding: 0 0; left: 215px; position: absolute; float: left;\"><h2>" + 
  top_menu_data.name + "" +  
  " (@<a href=\"" +  top_menu_data.html_url + 
    "\" target=\"_blank\">" + top_menu_data.login + "</a>)</h2></div>" +
"<div id=\"center\" class=\"column\"style=\" padding: 0 0; width: 100%; position: absolute; float: left;\"> <a href=\"" + 
  top_menu_data.profileurl + 
    " target=\"_blank\"><img src=\"" + top_menu_data.avatar_url + 
    "\" width=\"100\" height=\"100\" alt=\"" + top_menu_data.login + "\"></a></div>" + 
"<div id=\"right\" class=\"column\"style=\" width: 300px; padding: 0 0; right: 215px; position: absolute; float: right;\"><h4>" + 
  " Followers: " + top_menu_data.followers + " - Following: " + top_menu_data.following + "" + 
  "<br>Repos: " + top_menu_data.public_repos + "</h4></div>");
  }
};
