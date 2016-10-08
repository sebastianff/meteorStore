Template.addItem.events({
  	'submit form': function(e) {
	    e.preventDefault();
		var item = {
			title: $(e.target).find('[id=itemName]').val(),
			designer: $(e.target).find('[id=itemDesigner]').val(),
			price: $(e.target).find('[id=itemPrice]').val(),
			url: $(e.target).find('[id=itemPhoto]').val(),
		};
		Items.insert(item);
	    	Router.go('itemList');
	  	}
});