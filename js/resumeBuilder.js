// Bio
var bio = {
  "name": "Ankou Vesta",
  "role": "Frontend developer",
  "contacts": {
    "mobile": "065-555-3333",
    "email": "name@example.com",
    "github": "VladTzaru",
    "twitter": "@vladimir",
    "location": "Novi Sad"
  },
  "welcomeMessage": "Lorem ipsum dolor sit amet.",
  "skills": ["sleeping", "eating", "drinking", "other"],
  "bioPic": "images/fry.jpg"
};


// Education
var education = {
  "schools": [
    {
      "name": "Faculty of Tehnical Sciences - FTN Novi Sad",
      "city": "Novi Sad",
      "degree": "Masters",
      "majors": ["E-biz", "Online marketing"],
      "dates": 2012,
      "url": "http://www.uns.ac.rs/index.php/en/faculties/ffaculties/faculty-technical-sciences"
    },
    {
      "name": "Faculty of Tehnical Sciences - FTN Cacak",
      "city": "Cacak",
      "degree": "BA",
      "majors": ["Management", "English"],
      "dates": 2009,
      "url": "http://www.ftn.kg.ac.rs/en/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Frontend Nanodegree",
      "school": "Udacity",
      "dates": 2017,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};


// Work
var work = {
  "jobs": [
    {
      "employer": "Tegetlab",
      "title": "Frontend Developer",
      "dates": "May 2016 - May 2017",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mi in mattis sollicitudin. Nullam at bibendum est, at tincidunt tellus. In lobortis a ipsum eget laoreet. Sed feugiat, urna sit amet porttitor accumsan, arcu lacus blandit ipsum, nec pellentesque metus massa ac nisl. Nulla facilisi. In sed consectetur leo."
    },
    {
      "employer": "Academica",
      "title": "Assistant program director",
      "dates": "Jan 2009- Jan 2011",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mi in mattis sollicitudin. Nullam at bibendum est, at tincidunt tellus. In lobortis a ipsum eget laoreet. Sed feugiat, urna sit amet porttitor accumsan, arcu lacus blandit ipsum, nec pellentesque metus massa ac nisl. Nulla facilisi. In sed consectetur leo."
    }
  ]
};


// Projects
var projects = {
  "projects": [
    {
      "title": "PhiProject",
      "dates": 2016,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "images": [
        "http://images.huffingtonpost.com/2016-06-25-1466835058-3172856-DKCWebDesignBanner.jpg",
        "https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
      ]
    }
  ]
};


////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS AND STUFF
////////////////////////////////////////////////////////////////////////////////////////
<<<<<<< HEAD


//Formatted variables
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
=======
>>>>>>> development
