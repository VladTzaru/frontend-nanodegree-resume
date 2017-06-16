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
            location: "Novi Sad",
            degree: "Super",
            majors: ["Fire"],
            dates: "2030-2034"
        },
        {
            name: "Cool school 2",
            location: "Cacak",
            degree: "ExtraCool",
            majors: ["Ice"],
            dates: "2015-2020"
        }
    ],
    onlineCourses: [{
        title: "Frontend Nanodegree",
        school: "Udacity",
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
            employer: "Tegetlab",
            title: "Frontend Developer",
            location: "Belgrade",
            dates: "May 2016 - May 2017",
            description: "Our team is the creator of the Phi Project. Phi is a web app for delivering fast, precise, and relevant advertising experience in close partnership with leading Out of Home advertising agencies, location owners, and brands who advertise. Phi Project is a new way to let PEOPLE know about your offer. It is about permission marketing. It is about simple communication. It is about relevance and performance. Phi enables advertisers to focus communication to audiences and individuals who matter for their success. On the other hand, people receive geo relevant ads that create value in line with their needs. Phi brings the two worlds together and creates benefits for the ad viewers and revenues for the advertisers.",
            workResponsibilities: [
                "Develop new user-facing features",
                "Desing wireframes/mockups",
                "Ensure the technical feasibility of UI/UX designs",
                "Collaborate with other team members and stakeholders"
            ]
        },
        {
            employer: "Academica Group",
            title: "Program Assistant Director",
            location: "Belgrade",
            dates: "Jan 2011- May 2013",
            description: "Academica Group is an expert association developing autonomous and sustainable programs as open platforms for community and creativity mobilisation and synergistic activities of the citizens sharing similar beliefs and need for social engagement. Since 2000, Academica has initiated and successfully implemented more than 200 projects and significant initiatives in cultural policies, creative economy, contemporary art practices and public policies (social policy, urban regeneration, youth policy, public sector reforms). Academica combines activities of a think tank with that of a research and development association. It is a key association in Serbia that comprehensively deals with the cultural economy. Comprising development platforms related to the creative industries, it brings together experts in humanities, social and applied sciences along with artists and creative individuals aiming to influence both cultural policy and the general public. Academica Group designs and implements research, development, capacity building and production programs intended to serve as platforms for the development of strategic themes, thinking and research relative to the creative sector."
        },
        {
            employer: "Davinaldo",
            title: "Frontend Developer / Composer",
            location: "London",
            dates: "Ongoing...",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl velit, sollicitudin vitae velit eu, imperdiet malesuada ipsum. Maecenas volutpat ut enim ac dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in mauris non arcu condimentum fringilla at at enim. Nullam rutrum tempor ante, id egestas erat condimentum ut. Nam massa velit, scelerisque sed egestas at, convallis ut enim."
        },
        {
            employer: "Plasinia",
            title: "Frontendo",
            location: "Zagreb",
            dates: "2016-2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl velit, sollicitudin vitae velit eu, imperdiet malesuada ipsum. Maecenas volutpat ut enim ac dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in mauris non arcu condimentum fringilla at at enim. Nullam rutrum tempor ante, id egestas erat condimentum ut. Nam massa velit, scelerisque sed egestas at, convallis ut enim."
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
            title: "Phi Project",
            dates: "May 2016 - May 2017",
            description: "Phi web app creates and delivers fast, precise, and relevant mobile advertising in close partnership with leading Out of Home advertising agencies, location owners, and brands. Advertisers are able to engage audiences and individuals that matter, whereas people receive geo-relevant ads that create added value.",
            images: [
                "images/project_1.png",
                "images/project_2.png",
                "images/project_3.png"
            ]
        },
        {
            title: "Taqoo",
            dates: "May 2016 - May 2017",
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
