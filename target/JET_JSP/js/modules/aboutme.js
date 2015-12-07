define([ 'ojs/ojcore', 'knockout', 'jquery' ], function(oj, ko, $) {

	function mainContentViewModel() {
		var self = this;

		self.newLine = ko.observable("Text from JavaScript!");

		self.myClick = function() {
			console.log("clicked!");

			$.get("MyServlet", function(responseText) {
				$("#myDiv").text(responseText);
			});
		}

	}
	return mainContentViewModel;

});
