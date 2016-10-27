Template.navbar.events({
	'click #admin' : function (evt){
		evt.preventDefault();
		Router.go('/admin');
	}
})