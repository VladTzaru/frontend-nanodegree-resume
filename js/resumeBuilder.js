//Bio
var bio = {
  name: "Tzaru",
  role: "Frontend Developer",
  contacts: {
    mobile: "065-333-222",
    email: "tzaru@example.com",
    github: "VladTzaru",
    location: "Tristram"
  },
  welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  skills: [
    "HTML",
    "CSS",
    "JS",
    "jQuery",
    "Git"
  ],
  biopic: "images/fry.jpg",
  display: function(){
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

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

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
      location: "Candyland",
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
      location: "Mojoland",
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
      title: "Frondend Nanodegree",
      school: "Udacity",
      dates: "2017",
      url: "www.example.com"
    }
  ],
  display: function(){
    console.log(education);
  }
};

education.display();


//Work
var work = {
  jobs: [
    {
      employer: "Tegeto",
      title: "Frontendo",
      location: "Rutosima",
      dates: "2015-2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      employer: "Umpato",
      title: "Frontendo",
      location: "Helina",
      dates: "2016-2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ],
  display: function(){
    if (work.jobs.length > 0) {
      $("#workExperience").append(HTMLworkStart);
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
    console.log(projects);
  }
};
