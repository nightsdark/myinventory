Template.Item.onCreated(function() {
  this.editMode = new ReactiveVar(false);
});

Template.Item.helpers({
  updateItemId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  },
  rawCost: function() {
    return formatDollar(this.rawCost / 100) ;
  }
});

Template.Item.events({
  'click .toggle-receipt': function() {
    Meteor.call('toggleReceiptItem', this._id, this.inReceipt);
  },
  'click .toggle-storage': function() {
    Meteor.call('toggleStorageItem', this._id, this.inStorage);
  },
  'click .fa-trash': function() {
    Meteor.call('deleteItem', this._id);
  },
  'click .fa-pencil': function(event, template) {
    template.editMode.set(!template.editMode.get());
  },
});



