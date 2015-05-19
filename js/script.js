var main = function() {
	for (var i = 0; i < 256; i++) {
		$("<div></div>", {class: "grid"}).appendTo("div.container");
	};
	$(".grid").mouseenter(function() {
		$(this).css("background-color", "#eeddbb");
	});

};

$(document).ready(main);