Template.Listing.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('items');
  });
});

Template.Listing.helpers({
  Listing: ()=> {
    return Items.find({inReceipt: true});
  }
});

