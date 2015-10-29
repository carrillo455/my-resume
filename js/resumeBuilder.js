var name = "Cesar Carrillo",
	role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name),
	formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);

var skills = ["auto-didactic", "programming"];

var bio = {
	"name": "Cesar Carrillo",
	"age": 24,
	"role": "Front End Developer",
	"contacts": {
		"mobile": "+521 833 3 09 22 04",
		"email": "sistemas.carrillo01@gmail.com",
		"github": "carrillo455",
		"twitter": "@carrillop91",
		"location": "Ciudad Madero, Tamaulipas, Mexico"
	},
	"bioPic": "images/me.jpg",
	"welcomeMessage": "Welcome to my Resume",
	"skills": skills
};

// var work = {};
// work.position = "Junior Full Stack Developer";
// work.employer = "Altamira's Government",
// work.years = 2;
// work.city = "Altamira";
// work.state = "Tamaulipas";

// var education = {};
// education["school"] = "IEST";
// education["years"] = 4.5;
// education["city"] = "Altamira";

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
}

var work = {
	"jobs": [
		"employer": "Government",
		"title": "Junior Full Stack Web Developer",
		"location": "Altamira, Tamaulipas, MX",
		"dates": 2013,
		"description": "From the analisis, dealing with customer and develop application with front end and back end knowledge."
	]
}

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
}

var charEscape = function(_html) {
	var newHTML = _html;

	newHTML = _html.replace(/</g, "&lt;");
	newHTML = newHTML.replace(/>/g, "&gt;");

	return newHTML;
};