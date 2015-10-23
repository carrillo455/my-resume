var name = "Cesar Carrillo",
	role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name),
	formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);