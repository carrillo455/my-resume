var skills = ["HTML", "CSS", "JavaScript", "JQuery", "Responsive Web Design", "Git"];

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
	"bioPic": "images/fry.jpg",
	"welcomeMessage": "Hello! Welcome to my second project at Udacity's Academy. This is my Resume :-)",
	"skills": skills
};

var education = {
	"schools": [
		{
			"name": "IEST",
			"location": "Altamira, Tamaulipas",
			"degree": "BA",
			"majors": ["CA"],
			"years": 4.5,
			"dates": 2013,
			"url": "iest.edu.mx"
		}
	],
	"onlineCourses": [
		{
			"title": "Responsive Web Fundamentals",
			"school": "Udacity",
			"dates": 2015,
			"url": "udacity.com"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "udacity.com"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Government",
			"title": "Junior Full Stack Web Developer",
			"location": "Altamira, Tamaulipas, MX",
			"dates": 2013,
			"description": "From the analisis, dealing with customer and develop application with front end and back end knowledge."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "About Me",
			"dates": 2015,
			"description": "A responsive web page with info about myself.",
			"images": [

			]
		}
	]
};

// Top Header => Name + Role + Pic
var formattedName = HTMLheaderName.replace("%data%", bio.name),
	formattedRole = HTMLheaderRole.replace("%data%", bio.role),
	formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedName, formattedRole, formattedBioPic);

// Mid Header => Contacts
var //formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.);
	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
	formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
	formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog),
	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").prepend(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);

//Mid Header => Skills
$("#header").append(HTMLskillsStart);

var formattedSkill;
for (var i = 0; i < bio.skills.length; i++) {
	formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills").append(formattedSkill);
}

// Bottom Header => Welcome Message
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedWelcomeMsg);



var charEscape = function(_html) {
	var newHTML = _html;

	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&gt;");

	return newHTML;
};