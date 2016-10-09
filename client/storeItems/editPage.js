Template.editPage.events({
  	'submit form': function(e) {
	    
	    e.preventDefault();

	    var currentItemId = this._id;

		var item = {
			title: $(e.target).find('[id=itemName]').val(),
			designer: $(e.target).find('[id=itemDesigner]').val(),
			price: $(e.target).find('[id=itemPrice]').val(),
			url: $(e.target).find('[id=itemPhoto]').val()
		};
		
		Items.update(currentItemId, {$set: item}, function(error) { if (error) {
		// display the error to the user
		alert(error.reason); } else {
		        Router.go('itemList');
		      }
		});
	},
	'click .delete': function(e) { e.preventDefault();
		var currentItemId = this._id; 
		Items.remove(currentItemId); 
		Router.go('itemList');
	}
});