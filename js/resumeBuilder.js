// Bio
var bio = {
  name: "Vladimir Bojovic",
  role: "Frontend developer",
  contacts: {
    mobile: "065-555-3333",
    email: "name@example.com",
    github: "VladTzaru",
    twitter: "@vladimir",
    location: "Novi Sad"
  },
  welcomeMessage: "Lorem ipsum dolor sit amet.",
  skills: ["HTML", "CSS", "JS", "jQuery", "Git"],
  bioPic: "images/fry.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    // Checks the length of the skills array, and iterates over it
    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

bio.display();


// Education
var education = {
  schools: [
    {
      name: "Faculty of Tehnical Sciences - FTN Novi Sad",
      city: "Novi Sad",
      degree: "Masters",
      majors: ["E-biz", "Online marketing"],
      dates: 2012,
      url: "http://www.uns.ac.rs/index.php/en/faculties/ffaculties/faculty-technical-sciences"
    },
    {
      name: "Faculty of Tehnical Sciences - FTN Cacak",
      city: "Cacak",
      degree: "BA",
      majors: ["Management", "English"],
      dates: 2009,
      url: "http://www.ftn.kg.ac.rs/en/"
    }
  ],
  onlineCourses: [
    {
      title: "Frontend Nanodegree",
      school: "Udacity",
      dates: 2017,
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  display: function () {
    $("#education").append(HTMLschoolStart);
    // Loop that iterates over the Schools array
    for(var i = 0; i < education.schools.length; i++) {
      var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
      $(".education-entry:last").append(formattedName);

      var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[i].city);
      $(".education-entry:last").append(formattedCity);

      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(formattedDate);

      var formattedURL = HTMLschoolUrl.replace("%data%", education.schools[i].url);
      $(".education-entry:last").append(formattedURL);
    }
    // Appending onlineCourses
    $(".education-entry:last").append(HTMLonlineClasses);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
    $(".education-entry:last").append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
    $(".education-entry:last").append(formattedOnlineSchool);

    var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
    $(".education-entry:last").append(formattedOnlineDate);

    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
};

education.display();


// Work
var work = {
  jobs: [
    {
      employer: "Tegetlab",
      title: "Frontend Developer",
      dates: "May 2016 - May 2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mi in mattis sollicitudin. Nullam at bibendum est, at tincidunt tellus. In lobortis a ipsum eget laoreet. Sed feugiat, urna sit amet porttitor accumsan, arcu lacus blandit ipsum, nec pellentesque metus massa ac nisl. Nulla facilisi. In sed consectetur leo."
    },
    {
      employer: "Academica",
      title: "Assistant program director",
      dates: "Jan 2009- Jan 2011",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mi in mattis sollicitudin. Nullam at bibendum est, at tincidunt tellus. In lobortis a ipsum eget laoreet. Sed feugiat, urna sit amet porttitor accumsan, arcu lacus blandit ipsum, nec pellentesque metus massa ac nisl. Nulla facilisi. In sed consectetur leo."
    }
  ],
  display: function() {
    for (var job = 0; job < work.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
          formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
          formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
          formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description),
          formattedJobs = formattedEmployer + formattedTitle + formattedDates + formattedDescription;
          output = $(".work-entry:last").append(formattedJobs);
    }
  }
};

work.display();


// Projects
var projects = {
  projects: [
    {
      title: "PhiProject",
      dates: 2016,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "images/droid_flat_500_small.png",
        "images/photoshop_500_small.jpg"
      ]
    },
    {
      title: "Taqoo",
      dates: 2016,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "images/phone_flat_500_small.jpg",
      ]
    }
  ],
  display: function() {
    for(var project = 0; project < projects.projects.length; project++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedDescription);

      //Checks the images array and iterates over it
      if(projects.projects[project].images.length > 0) {
        for(var img = 0; img < projects.projects[project].images.length; img++) {
          var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
          $(".project-entry:last").append(formattedImages);
        }
      }
    }
  }
};

projects.display();


////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////
// $("#main").append(internationalizeButton);
//
// // Function for internationalize
// function inName(name) {
//   name = name.split(" ");
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//   name = name.join(" ");
//   return name;
// }
