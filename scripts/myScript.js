$(document).ready(function() {
	var currentYear = (new Date).getFullYear();
	var yearText = "2017";
	if (currentYear > 2017)
	{
		yearText = yearText + " - " + currentYear;
	}
	yearText += " - Drew Grubb";

	$('#ownership').text(yearText);
});