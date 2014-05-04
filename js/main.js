// JavaScript Document

//wait until the document is built
//this is called an autonomous function - the source of many headaches....
$(document).ready(function()	{
	
	//can be whatever images you want
	//readlly. JUST KEEP IT TASTEFUL.
	var movieImages = [
						"img/images.jpg",
						"img/images.jpg",
						"img/images.jpg"
					];

	var movieTitles = [
		"Sparta",
		"Not Sparta",
		"Really, Not Sparta"
	];
	
	//get dom element references
	var movieDiv = $("#movieDiv");
	var movieInfoDiv = $("#movieInf");
	
	//loop through all those movies in the array
	for(var i = 0; i< movieImages.length; i++)	{
		//make a new HTML DOM element, wrap with jQuery
		var toAppend = $("<div class='movie'></div>")

		//change background image
		toAppend.css(
						"backgroundImage",
						"url(" + movieImages[i] +")"
			);

		movieDiv.append(toAppend);
	}//end of loop

	//respond to the movie events
	$('.movie')
		.mouseover(function()	{
			//inside of any event handler
			//LIKE THIS ONE
			//'this' refers to the DOM element receiving the event
			$(this)
				.css("width", "240px")
				.css("height", "240px")
				.css("backgroundPosition", "0 0");

				//update title
				movieInfoDiv.html( movieTitles[ $(this).index() ]);
		})
		.mouseout(function()	{
			$(this)
				.css("width", "200px")
				.css("height", "200px")
				.css("backgroundPosition", "-20px -20px");
		})
		.click(function()	{
			$(this).css("opacity", 0);
		})

})