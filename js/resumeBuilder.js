/////////////////////////////////////////////////////////////////////////////
// RESUME OBJECTS
/////////////////////////////////////////////////////////////////////////////

//Bio
var bio = {
  name: "Vladimir Bojovic",
  role: "Frontend Developer / Website Designer",
  contacts: {
    mobile: "065-333-222",
    email: "tzaru@example.com",
    github: "VladTzaru",
    location: "Novi Sad"
  },
  welcomeMessage: "Welcome to my resume page.",
  skills: [
    "HTML",
    "CSS",
    "JS",
    "jQuery",
    "Git",
    "Adobe Illustrator"
  ],
  biopic: "images/cartoon_vlad.jpg",
  display: function(){
    //Header
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
    formattedRole = HTMLheaderRole.replace("%data%", bio.role),
    formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
    formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic),
    formattedHeader = formattedName + formattedRole + formattedWelcomeMessage + formattedBiopic;
    $("#header").append(formattedHeader).addClass("animated fadeInDown");

    //TopContacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
    formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
    formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
    formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
    formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
    $("#topContacts").append(formattedContacts);

    // Check is the Skills array empty, if not, iterate over it and append its items.
    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
      }
    }
  }
};

bio.display();


//Education
var education = {
  schools: [
    {
      name: "Cool school 1",
      location: "Novi Sad",
      degree: "Super",
      majors: [
        "Fire",
        "Ice",
        "Air"
      ],
      dates: "2030-2034"
    },
    {
      name: "Cool school 2",
      location: "Cacak",
      degree: "ExtraCool",
      majors: [
        "Fire",
        "Ice",
        "Air"
      ],
      dates: "2015-2020"
    }
  ],
  onlineCourses: [
    {
      title: "Frontend Nanodegree",
      school: "Udacity",
      dates: "2017",
      url: "www.example.com"
    },
    {
      title: "Fullstack Nanodegree",
      school: "Udacity",
      dates: "2018",
      url: "www.example.com"
    }
  ],
  display: function(){
    if(education.schools.length > 0) {
      $("#education").append(HTMLschoolStart);
      for(var i = 0; i < education.schools.length; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name),
        formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location),
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree),
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates),
        formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors),
        formattedSchools = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajors;
        $(".education-entry:last").append(formattedSchools);
      }

      if(education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        for(var course = 0; course < education.onlineCourses.length; course++) {
          var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
              formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
              formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
              formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url),
              formattedOnlineCourses = formattedTitle + formattedSchool + formattedDates + formattedUrl;
          $(".education-entry:last").append(formattedOnlineCourses);
        }
      }


    }
  }
};

education.display();


//Work
var work = {
  jobs: [
    {
      employer: "Tegeto",
      title: "Frontendo",
      location: "Belgrade",
      dates: "2015-2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl velit, sollicitudin vitae velit eu, imperdiet malesuada ipsum. Maecenas volutpat ut enim ac dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in mauris non arcu condimentum fringilla at at enim. Nullam rutrum tempor ante, id egestas erat condimentum ut. Nam massa velit, scelerisque sed egestas at, convallis ut enim."
    },
    {
      employer: "Umpato",
      title: "Frontendo",
      location: "Belgrade",
      dates: "2016-2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl velit, sollicitudin vitae velit eu, imperdiet malesuada ipsum. Maecenas volutpat ut enim ac dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in mauris non arcu condimentum fringilla at at enim. Nullam rutrum tempor ante, id egestas erat condimentum ut. Nam massa velit, scelerisque sed egestas at, convallis ut enim."
    },
    {
      employer: "Davinaldo",
      title: "Frontendo",
      location: "United Kingdom",
      dates: "2016-2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl velit, sollicitudin vitae velit eu, imperdiet malesuada ipsum. Maecenas volutpat ut enim ac dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in mauris non arcu condimentum fringilla at at enim. Nullam rutrum tempor ante, id egestas erat condimentum ut. Nam massa velit, scelerisque sed egestas at, convallis ut enim."
    }
  ],
  display: function(){
    if (work.jobs.length > 0) {
      $("#workExperience").append(HTMLworkStart).addClass("animated slideInLeft");
      for(var job = 0; job < work.jobs.length; job++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location),
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description),
        formattedWork = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
        $(".work-entry:last").append(formattedWork);
      }
    }
  }
};

work.display();


//Projects
var projects = {
  projects: [
    {
      title: "Umpa",
      dates: "2015-2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "images/phone_flat_500_small.jpg",
        "images/photoshop_500_small.jpg",
        "images/droid_flat_500_small.png"
      ]
    },
    {
      title: "Ekpa",
      dates: "2015-2016",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "images/phone_flat_500_small.jpg",
        "images/photoshop_500_small.jpg",
        "images/droid_flat_500_small.png"
      ]
    }
  ],
  display: function(){
    if(projects.projects.length > 0) {
      $("#projects").append(HTMLprojectStart);
      for(var project = 0; project < projects.projects.length; project++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
        formattedProjects = formattedTitle + formattedDates + formattedDescription;
        $(".project-entry:last").append(formattedProjects);

        // Check is the images array empty, if not, iterate over it and append its items.
        if(projects.projects[project].images.length > 0) {
          for(var img = 0; img < projects.projects[project].images.length; img++) {
            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
            $(".project-entry:last").append(formattedImages);
          }
        }
      }
    }
  }
};

projects.display();


/////////////////////////////////////////////////////////////////////////////
// ANIMATION CONTROL
/////////////////////////////////////////////////////////////////////////////

$(window).scroll( function(){

  /* Check the location of each desired element */
  $(".hideMe").each( function(){

    var bottomObj = $(this).offset().top + $(this).outerHeight();
    var botOfWindow = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it in */
    if( botOfWindow > bottomObj ){

      $(this).toggleClass("hideMe").addClass("animated fadeInUp");

    }

  });

});


/////////////////////////////////////////////////////////////////////////////
// OTHER DOM ELEMENTS
/////////////////////////////////////////////////////////////////////////////

//Google Map
$("#mapDiv").append(googleMap);


//Footer
$("#footerContacts").append(HTMLcontactGeneric);
