Template.Items.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('items');
  });
});

Template.Items.helpers({
  items: ()=> {
    return Items.find({});
  }
});

Template.Items.events({
  'click .new-item': () => {
    Session.set('newItem', true);
  }
});

