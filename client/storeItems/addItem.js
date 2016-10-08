Template.addItem.events({
  	'submit form': function(e) {
	    e.preventDefault();
		var item = {
			title: $(e.target).find('[id=itemName]').val(),
			designer: $(e.target).find('[id=itemDesigner]').val(),
			price: $(e.target).find('[id=itemPrice]').val(),
			url: $(e.target).find('[id=itemPhoto]').val()
		};
		Meteor.call('addItem',item,function(error,result){
		if(error)
			return alert(error.reason);
		Router.go('itemList');
		})
	}
});