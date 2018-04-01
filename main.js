$(document).ready(function() {
	var randomNumber = Math.floor(Math.random() * Math.floor(4));

	if(randomNumber == 0) {
		$(".chefWrapper").show();
		$(".constructionWrapper").hide();
		$(".riderWrapper").hide();
		$(".pirateWrapper").hide();
	} else if(randomNumber == 1) {
		$(".constructionWrapper").show();
		$(".chefWrapper").hide();
		$(".riderWrapper").hide();
		$(".pirateWrapper").hide();
	} else if(randomNumber == 2) {
		$(".constructionWrapper").hide();
		$(".chefWrapper").hide();
		$(".riderWrapper").show();
		$(".pirateWrapper").hide();
	} else {
		$(".constructionWrapper").hide();
		$(".chefWrapper").hide();
		$(".riderWrapper").hide();
		$(".pirateWrapper").show();
	}
})