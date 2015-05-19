var main = function() {
	for (var i = 0; i < 256; i++) {
		$("<div></div>", {class: "grid"}).appendTo("div.container");
	};
	$(".grid").hover(function() {
		$(this).css("background-color", "#eeddbb");
	}, 
	function() {
		$(this).css("background-color", "#ffbbcc");
	});

};

$(document).ready(main);