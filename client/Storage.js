Template.Storage.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('items');
  });
});

Template.Storage.helpers({
  items: ()=> {
    return Items.find({inStorage: true});
  }
});
