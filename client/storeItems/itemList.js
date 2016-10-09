Template.itemList.helpers({
  	items: function() {
	    //return Items.find({designer:'Decko Car'}); }
	    //return Items.find({},{sort:{submitted:-1}});
	    return Items.find();//Above we have examples of filtering the items and sorting them
	}
});