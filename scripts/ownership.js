$(document).ready(function() {
	sendGoogleAnalytics();
	setYearRange();
});

function setYearRange()
{
	var currentYear = (new Date).getFullYear();
	var yearText = "2017";
	if (currentYear > 2017)
	{
		yearText = yearText + " - " + currentYear;
	}
	yearText += " - Drew Grubb";

	$('#ownership').text(yearText);
}

function sendGoogleAnalytics()
{
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93051589-1', 'auto');
  ga('send', 'pageview');
}