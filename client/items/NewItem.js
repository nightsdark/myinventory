Template.NewItem.events({
  'click .fa-close': function () {
    Session.set('newItem', false);
  }
});

