if(Meteor.isClient) {
  Accounts.onLogin(function() {
    FlowRouter.go('my-inventory');
  });

  Accounts.onLogout(function() {
    FlowRouter.go('home');
  });
}


FlowRouter.triggers.enter([function(context, redirect) {
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if(Meteor.userId()) {
      FlowRouter.go('my-inventory');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/my-inventory', {
  name: 'my-inventory',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Items'});
  }
});

FlowRouter.route('/item/:id', {
  name: 'item',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'ItemSingle'});
  }
});

FlowRouter.route('/receipt', {
  name: "receipt",
  action() {
    BlazeLayout.render('MainLayout', {main: 'Receipt'});
  }
});

FlowRouter.route('/listing', {
  name: "listing",
  action() {
    BlazeLayout.render('MainLayout', {main: 'Listing'});
  }
});

FlowRouter.route('/storage', {
  name: "storage",
  action() {
    BlazeLayout.render('MainLayout', {main: 'Storage'});
  }
});

