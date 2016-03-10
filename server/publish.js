Meteor.publish('items', function() {
  return Items.find({author: this.userId});
});

Meteor.publish('files', function() {
  return Files.find({});
});

Meteor.publish('singleItem', function(id) {
  check(id, String);
  return Items.find({_id: id});
});

