Template.item.events({
  	'click .price': function(){
         Session.set('cart', this.price);
    }
});