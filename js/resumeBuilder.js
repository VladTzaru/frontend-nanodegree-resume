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
    "Git",
    "Bootstrap",
    "AngularJS Material"
  ],
  biopic: "images/fry.jpg",
  display: function(){
    console.log(bio);
  }
};


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
    console.log(work);
  }
};


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
