// My skills array.
var skills = ["HTML", "CSS", "JavaScript", "JQuery", "Responsive Web Design", "Git"];

/*
* Bio
*/
var bio = {
	"name": "Cesar Carrillo",
	"age": 24,
	"role": "Web Developer",
	"contacts": {
		"mobile": "+521 833 3 09 22 04",
		"email": "sistemas.carrillo01@gmail.com",
		"twitter": "@carrillop91",
		"github": "carrillo455",
		"blog": "",
		"location": "Ciudad Madero, Tamaulipas, Mexico"
	},
	"bioPic": "images/me.jpg",
	"welcomeMessage": "&#8212; Hello! Feel free to contact me."
};

// Dot property declaration.
bio.skills = skills;
// Brackets property declaration,
// Encapsulation => a function inside an object property.
bio["display"] = function() {
	// Top Header => Name + Role + Pic
	var formattedName = HTMLheaderName.replace("%data%", bio.name),
		formattedRole = HTMLheaderRole.replace("%data%", bio.role),
		formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").prepend(formattedName, formattedRole, formattedBioPic);

	// Mid Header => Contacts
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
		formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
		formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
		formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
		formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog),
		formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").prepend(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

	//Mid Header => Skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill;
		for (var i = 0; i < bio.skills.length; i++) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	// Bottom Header => Welcome Message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedWelcomeMsg);
}

// Call the just-declared-above function.
bio.display();

/*
* Work
*/
var work = {
	"jobs": [
		{
			"employer": "Government",
			"title": "Junior Full Stack Web Developer",
			"location": "Altamira, Tamaulipas, Mexico",
			"dates": "November 2013 - Present",
			"description": "Analisis, dealing with customer and application development with front end and back end knowledge.",
			"url": "http://www.altamira.gob.mx/"
		},
		{
			"employer": "CirlceRide",
			"title": "Front End Developer Intern",
			"location": "Tampico, Tamaulipas, Mexico",
			"dates": "May - August 2013",
			"description": "Testing and developing snippets of code to increase the UX for circleride.com",
			"url": "http://circleride.com"
		}
	]
};

work.display = function() {
	for (job in work.jobs) {
		var currentJob = work.jobs[job];
		var formattedEmployer = HTMLworkEmployer.replace("%data%", currentJob.employer).replace("#", currentJob.url);
		var formattedTitle = HTMLworkTitle.replace("%data%", currentJob.title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", currentJob.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", currentJob.location);
		var formattedDescription = HTMLworkDescription.replace("%data%", currentJob.description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocation, formattedDescription);
	}
};

work.display();

/*
* Projects
*/
var projects = {
	"projects": [
		{
			"title": "About Me",
			"dates": "September 2015",
			"description": "A responsive web page with info about myself.",
			"images": [
				"images/about-me.jpg"
			],
			"url": "http://codepen.io/carrillo455/full/qOqVyq"
		},
		{
			"title": "My Portafolio",
			"dates": "October 2015",
			"description": "A responsive web page showing off my work as a web developer.",
			"images": [
				"images/my-portafolio.jpg"
			],
			"url": "http://carrillo455.github.io/"
		}
	]
};

projects.display = function() {
	for (var project in projects.projects) {
		var currentProject = projects.projects[project];
		var formattedTitle = HTMLprojectTitle.replace("%data%", currentProject.title).replace("#", currentProject.url);
		var formattedDates = HTMLprojectDates.replace("%data%", currentProject.dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", currentProject.description);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

		currentProject.images.forEach(function(src) {
			var formattedImage = HTMLprojectImage.replace("%data%", src);
			$(".project-entry:last").append(formattedImage);
		});
	}
};

projects.display();

/*
* Education
*/
var education = {
	"schools": [
		{
			"name": "IEST",
			"location": "Altamira, Tamaulipas",
			"degree": "Bachelor of Science",
			"majors": "IT Engineering",
			"years": 4.5,
			"dates": "August 2009 - November 2013",
			"url": "http://iest.edu.mx"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "November 2015",
			"url": "http://udacity.com/courses"
		},
		{
			"title": "Responsive Web Images",
			"school": "Udacity",
			"dates": "October 2015",
			"url": "http://udacity.com/courses"
		},
		{
			"title": "Responsive Web Fundamentals",
			"school": "Udacity",
			"dates": "October 2015",
			"url": "http://udacity.com/courses"
		}
	]
};

education.display = function() {
	for (var school in education.schools) {
		var currentSchool = education.schools[school];
		var formattedName = HTMLschoolName.replace("%data%", currentSchool.name).replace("#", currentSchool.url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", currentSchool.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", currentSchool.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", currentSchool.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", currentSchool.majors);
		var formattedSchoolHeader = formattedName + formattedDegree;

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolHeader, formattedDates, formattedLocation, formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for (var onlineCourse in education.onlineCourses) {
		var currentOnlineCourse = education.onlineCourses[onlineCourse];
		var formattedTitle = HTMLonlineTitle.replace("%data%", currentOnlineCourse.title).replace("#", currentOnlineCourse.url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", currentOnlineCourse.school);
		var formattedDates = HTMLschoolDates.replace("%data%", currentOnlineCourse.dates);
		var formattedURL = HTMLonlineURL.replace("%data%", currentOnlineCourse.school).replace("#", currentOnlineCourse.url);
		var formattedOnlineCourseHeader = formattedTitle + formattedSchool;

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineCourseHeader, formattedDates, formattedURL);
	}
};

education.display();

// Internationalized Name Function
/*var inName = function() {
		var nameArray = bio.name.trim().split(" ");
		nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();
		nameArray[1] = nameArray[1].toUpperCase();

		var internationalizedName = nameArray.join(" ");

		return internationalizedName;
};

$("#main").append(internationalizeButton);*/

// The Location Map
$("#mapDiv").append(googleMap);

// Custom contacts footer.
$("#footerContacts").append("<li><span class='white-text'>Send me an email!</span><h3 class='white-text'>"+bio.contacts.email+"</h3></li>");