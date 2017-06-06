// Initial variables
var bio = {
  name: "Vladimir Bojovic",
  role: "Web Developer",
  contacts: {
    mobile: "065-555-5555",
    email: "john@example.com",
    github: "VladTzaru",
    twitter: "@vladimir",
    location: "Novi Sad"
  },
  welcomeMessage: "Welcome to my resume!",
  skills: ["html", "css", "js", "git", "angular", "jquery"],
  bioPic: "images/Vladimir.jpeg"
};
console.log(bio);


// Formatted variables
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);



// Appending
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
