Template.Receipt.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('items');
  });
});

Template.Receipt.helpers({
  items: ()=> {
    return Items.find({inReceipt: true});
  },


});
Template.ReceiptItem.helpers({
  rawCost: function() {
    return formatDollar(this.rawCost / 100) ;
  }

});

