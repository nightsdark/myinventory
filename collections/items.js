Items = new Mongo.Collection('items');
Files = new Mongo.Collection('files');

Items.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }

});

details = new SimpleSchema({
  key: {
    type: String
  },
  value: {
    type: String
  }
});

files = new SimpleSchema({
  value: {
    type: String
  }
});

ItemSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  part: {
    type: String,
    label: "Part"
  },
  desc: {
    type: String,
    optional: true,
  },
  rawCost: {
    type: Number,
    label: "Cost $"
  },
  details: {
    type: [details]
  },
  files: {
    type: [files]
  },
  inReceipt: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  inStorage: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt:{
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  toggleReceiptItem: function(id, currentState) {
    Items.update(id, {
      $set: {
        inReceipt: !currentState
      }
    });
  },
  toggleStorageItem: function(id, currentState) {
    Items.update(id, {
      $set: {
        inStorage: !currentState
      }
    });
  },


  updateDescItem: function(id, currentState) {
    Items.update(id, {
      $set: {
        desc: currentState
      }
    });
  },


  deleteItem: function(id) {
    Items.remove(id);
  },
  'saveFile': function(buffer){
    Files.insert({data:buffer})
  }
});
Items.attachSchema( ItemSchema );
