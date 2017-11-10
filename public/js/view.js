$("#seller-submit").on("click", function(event) {
	event.preventDefault()


	var seller = {
		name: $("#name-item").val().trim(),
		type: $("#type-item").val(),
		price: $("#price-item").val().trim()
	};



	// $.post("/api/new", seller).done(function(data) {
	// 	console.log("pushing to database")
	// });

	// $("name-item").val("");
	// $("type-item").val("");
	// $("price-item").val("");
console.log(seller)
});
