/////////////////////////////////////////////////////////////////////////////
// RESUME OBJECTS
/////////////////////////////////////////////////////////////////////////////

//Bio
var bio = {
    name: "Johnny Macaroni",
    role: "Chocolate Beer Specialist",
    contacts: {
        mobile: "065-333-222",
        email: "johnny@example.com",
        github: "JohnnyMC",
        location: "Hazardville"
    },
    welcomeMessage: "Welcome to my resume page.",
    skills: [
        "Willing to be big spoon or little spoon",
        "Very reliable for giving rides to / from the airport",
        "Listens attentively to boring stories",
        "Showers regularly",
        "Is not racist",
        "Gives sincere apologies"
    ],
    biopic: "images/cartoon_vlad.jpg",
    display: function() {
        //Header
        var formattedName = HTMLheaderName.replace("%data%", bio.name),
            formattedRole = HTMLheaderRole.replace("%data%", bio.role),
            formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
            formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic),
            formattedHeader = formattedName + formattedRole + formattedWelcomeMessage + formattedBiopic,
            //TopContacts & Footer contacts
            formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
            formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
            formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
            formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location),
            formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

        $("#header").append(formattedHeader);
        $("#topContacts, #footerContacts").append(formattedContacts);

        // Check is the Skills array empty, if not, iterate over it and append its items.
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};


//Education
var education = {
    schools: [{
            name: "Cool school 1",
            location: "China",
            degree: "Super-duper",
            majors: ["CANNABIS CULTIVATION", "FERMENTATION SCIENCES", "FLORAL MANAGEMENT"],
            dates: "2010-2015"
        },
        {
            name: "Cool school 2",
            location: "North Korea",
            degree: "Ballistic Missile Defense Intelligence Analyst",
            majors: ["BOMB DISPOSAL"],
            dates: "2010-2015"
        }
    ],
    onlineCourses: [{
        title: "European Witchcraft",
        school: "McJunkin",
        dates: "2017",
        url: "www.example.com"
    }],
    display: function() {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            for (var i = 0; i < education.schools.length; i++) {
                var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name),
                    formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location),
                    formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree),
                    formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates),
                    formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors),
                    formattedSchools = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajors;
                $(".education-entry:last").append(formattedSchools);
            }

            if (education.onlineCourses.length > 0) {
                $(".education-entry:last").append(HTMLonlineClasses);
                for (var course = 0; course < education.onlineCourses.length; course++) {
                    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title),
                        formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school),
                        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates),
                        formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url),
                        formattedOnlineCourses = formattedTitle + formattedSchool + formattedOnlineDates + formattedUrl;
                    $(".education-entry:last").append(formattedOnlineCourses);
                }
            }
        }
    }
};


//Work
var work = {
    jobs: [{
            employer: "Bai Brands",
            title: "Chief Flavor Officer",
            location: "Mexico",
            dates: "Jan 2000 - May 2005",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, rutrum ornare rutrum quis, vestibulum ut libero. Etiam egestas finibus porttitor. Nullam tincidunt lacus at quam egestas lacinia. Integer vitae nunc libero. Nam ornare dignissim augue, hendrerit tincidunt odio euismod non. Integer consequat, ligula sit amet rutrum ultrices, est nisl efficitur enim, id egestas velit mauris ac dui. Integer tristique ultricies lacus, in accumsan mauris fringilla at. Nullam auctor rutrum metus. Nulla ut neque quis massa placerat vehicula. Vivamus vel efficitur odio, eu vestibulum ipsum. Nullam id luctus nunc, et consectetur ante. Nullam facilisis ipsum eu leo molestie, ac lacinia ex imperdiet. Donec rhoncus vel leo sit amet lobortis. Ut posuere enim sed orci elementum commodo.",
        },
        {
            employer: "Microsoft",
            title: "Galactic Viceroy of Research Excellence",
            location: "Chicago",
            dates: "Jan 2011- May 2013",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, rutrum ornare rutrum quis, vestibulum ut libero. Etiam egestas finibus porttitor. Nullam tincidunt lacus at quam egestas lacinia. Integer vitae nunc libero. Nam ornare dignissim augue, hendrerit tincidunt odio euismod non. Integer consequat, ligula sit amet rutrum ultrices, est nisl efficitur enim, id egestas velit mauris ac dui. Integer tristique ultricies lacus, in accumsan mauris fringilla at. Nullam auctor rutrum metus. Nulla ut neque quis massa placerat vehicula. Vivamus vel efficitur odio, eu vestibulum ipsum. Nullam id luctus nunc, et consectetur ante. Nullam facilisis ipsum eu leo molestie, ac lacinia ex imperdiet. Donec rhoncus vel leo sit amet lobortis. Ut posuere enim sed orci elementum commodo."
        },
        {
            employer: "Tumblr",
            title: "Fashion Evangelist",
            location: "London",
            dates: "Ongoing...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, rutrum ornare rutrum quis, vestibulum ut libero. Etiam egestas finibus porttitor. Nullam tincidunt lacus at quam egestas lacinia. Integer vitae nunc libero. Nam ornare dignissim augue, hendrerit tincidunt odio euismod non. Integer consequat, ligula sit amet rutrum ultrices, est nisl efficitur enim, id egestas velit mauris ac dui. Integer tristique ultricies lacus, in accumsan mauris fringilla at. Nullam auctor rutrum metus. Nulla ut neque quis massa placerat vehicula. Vivamus vel efficitur odio, eu vestibulum ipsum. Nullam id luctus nunc, et consectetur ante. Nullam facilisis ipsum eu leo molestie, ac lacinia ex imperdiet. Donec rhoncus vel leo sit amet lobortis. Ut posuere enim sed orci elementum commodo."
        },
        {
            employer: "Google",
            title: "In-House Philosopher",
            location: "India",
            dates: "2016-2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, rutrum ornare rutrum quis, vestibulum ut libero. Etiam egestas finibus porttitor. Nullam tincidunt lacus at quam egestas lacinia. Integer vitae nunc libero. Nam ornare dignissim augue, hendrerit tincidunt odio euismod non. Integer consequat, ligula sit amet rutrum ultrices, est nisl efficitur enim, id egestas velit mauris ac dui. Integer tristique ultricies lacus, in accumsan mauris fringilla at. Nullam auctor rutrum metus. Nulla ut neque quis massa placerat vehicula. Vivamus vel efficitur odio, eu vestibulum ipsum. Nullam id luctus nunc, et consectetur ante. Nullam facilisis ipsum eu leo molestie, ac lacinia ex imperdiet. Donec rhoncus vel leo sit amet lobortis. Ut posuere enim sed orci elementum commodo."
        }
    ],
    display: function() {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            for (var job = 0; job < work.jobs.length; job++) {
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


//Projects
var projects = {
    projects: [{
            title: "Maximum Mustard",
            dates: "May 2016 - May 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna odio, rutrum ornare rutrum quis, vestibulum ut libero. Etiam egestas finibus porttitor. Nullam tincidunt lacus at quam egestas lacinia. Integer vitae nunc libero. Nam ornare dignissim augue, hendrerit tincidunt odio euismod non. Integer consequat, ligula sit amet rutrum ultrices, est nisl efficitur enim, id egestas velit mauris ac dui. Integer tristique ultricies lacus, in accumsan mauris fringilla at. Nullam auctor rutrum metus. Nulla ut neque quis massa placerat vehicula. Vivamus vel efficitur odio, eu vestibulum ipsum. Nullam id luctus nunc, et consectetur ante. Nullam facilisis ipsum eu leo molestie, ac lacinia ex imperdiet. Donec rhoncus vel leo sit amet lobortis. Ut posuere enim sed orci elementum commodo.",
            images: [
                "images/project_1.png",
                "images/project_2.png",
                "images/project_3.png"
            ]
        },
        {
            title: "Bitter Lobster",
            dates: "May 2012- May 2014",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            images: [
                "images/phone_flat_500_small.jpg",
                "images/photoshop_500_small.jpg",
                "images/droid_flat_500_small.png"
            ]
        }
    ],
    display: function() {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
            for (var project = 0; project < projects.projects.length; project++) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
                    formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
                    formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description),
                    formattedProjects = formattedTitle + formattedDates + formattedDescription;
                $(".project-entry:last").append(formattedProjects);

                // Check is the images array empty, if not, iterate over it and append its items.
                if (projects.projects[project].images.length > 0) {
                    for (var img = 0; img < projects.projects[project].images.length; img++) {
                        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                        $(".project-entry:last").append(formattedImages);
                    }
                }
            }
        }
    }
};


/////////////////////////////////////////////////////////////////////////////
// ANIMATION CONTROL
/////////////////////////////////////////////////////////////////////////////

$(window).scroll(function() {

    /* Check the location of each desired element */
    $(".hideMe").each(function() {

        var bottomObj = $(this).offset().top + $(this).outerHeight();
        var botOfWindow = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (botOfWindow > bottomObj) {
            $(this).toggleClass("hideMe").addClass("animated fadeInUp");
        }

    });

});


/////////////////////////////////////////////////////////////////////////////
// OTHER DOM ELEMENTS
/////////////////////////////////////////////////////////////////////////////

//Google Map
$("#mapDiv").append(googleMap);


/////////////////////////////////////////////////////////////////////////////
// INVOKING METHODS
/////////////////////////////////////////////////////////////////////////////
bio.display();
work.display();
projects.display();
education.display();
