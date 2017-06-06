// Initial variables
var name = "Vladimir Bojovic";
var role = "Web Developer";


// Formatted variables
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


// Appending
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
