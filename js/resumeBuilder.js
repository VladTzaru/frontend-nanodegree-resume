// Bio
var bio = {
  name: "Vladimir Bojovic",
  role: "Web Developer",
  contacts: {
    mobile: "065-333-5555",
    email: "john@example.com",
    github: "VladTzaru",
    twitter: "@vladimir",
    location: "Novi Sad"
  },
  welcomeMessage: "Welcome to my resume!",
  skills: ["html", "css", "js", "git", "angular", "jquery"],
  bioPic: "images/Vladimir.jpeg"
};

// Work experience
var work = {
  jobs: [
    {
      employer: "Tegetlab",
      title: "Frontend Developer",
      location: "Belgrade",
      dates: 2016,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mi in mattis sollicitudin. Nullam at bibendum est, at tincidunt tellus. In lobortis a ipsum eget laoreet. Sed feugiat, urna sit amet porttitor accumsan, arcu lacus blandit ipsum, nec pellentesque metus massa ac nisl. Nulla facilisi. In sed consectetur leo."
    },
    {
      employer: "Academica",
      title: "Assistant Program Director",
      location: "Belgrade",
      dates: 2016,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mi in mattis sollicitudin. Nullam at bibendum est, at tincidunt tellus. In lobortis a ipsum eget laoreet. Sed feugiat, urna sit amet porttitor accumsan, arcu lacus blandit ipsum, nec pellentesque metus massa ac nisl. Nulla facilisi. In sed consectetur leo."
    }
  ]
};

// Projects
var projects = {
  projects: [
    {
      title: "Taqoo",
      dates: 2016,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "http://images.huffingtonpost.com/2016-06-25-1466835058-3172856-DKCWebDesignBanner.jpg",
        "https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
      ]
    },
    {
      title: "Tegetlab",
      dates: 2016,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      images: [
        "http://images.huffingtonpost.com/2016-06-25-1466835058-3172856-DKCWebDesignBanner.jpg",
        "https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
      ]
    }
  ]
};

// Education
var education = {
  schools: [
    {
      name: "Faculty of Technical Sciences - FTN Novi Sad",
      city: "Cacak",
      degree: "Masters",
      majors: ["E-bussiness", "Online marketing"],
      dates: 2012,
      url: "http://www.uns.ac.rs/index.php/en/faculties/ffaculties/faculty-technical-sciences"
    },
    {
      name: "Faculty of Technical Sciences - FTN Cacak",
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
  ]
};


////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS AND STUFF
////////////////////////////////////////////////////////////////////////////////////////

//Formatted variables
var formattedEmployer,
    formattedTitle,
    formattedEmployerTitle,
    formattedName,
    formattedRole;


formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

for (var key in work.jobs) {
  if (work.jobs.hasOwnProperty(key)) {
    $("#workExperience").append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
    formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
    formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
  }
}
