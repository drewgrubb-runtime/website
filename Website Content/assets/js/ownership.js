$(document).ready(function() {
	setYearRange();
});

function setYearRange()
{
	var currentYear = (new Date).getFullYear();
	var yearText = "Runtime Development | 2017";
	if (currentYear > 2017)
	{
		yearText = yearText + " - " + currentYear;
	}
	yearText += " | Drew Grubb";

	$('#ownership').text(yearText);
}