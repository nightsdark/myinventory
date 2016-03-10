Template.ItemSingle.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singleItem', id );
    self.subscribe('files');
  });
});

Template.registerHelper("testing", function () {
  return true;
});

Template.registerHelper( 'Uint8ToBase64', () => {

});

Template.ItemSingle.helpers({
  file: ()=> {
    var id = FlowRouter.getParam('id');
    return Items.findOne({_id: id});
  },
  item: ()=> {
    var id = FlowRouter.getParam('id');
    return Items.findOne({_id: id});
  },
  desc: function() {
    return {
    collection:"items",
    field:"desc",
    showToolbar:true,
    removeEmpty:true,
    acceptEmpty:true,
    placeholder:"Add a Description",
    Substitute:'<i class="fa fa-pencil"></i>'
    };
  },
  detailsArray:  function() {
  var arr = [], details = this.details;
    for (var key in details) {
      var obj = {};
      obj.key = key;
      obj.value = details[key];
      arr.push(obj);
    }
    return arr;
  },
});

Template.ItemSingle.events({
  'submit form': function (e,t) {
    e.stopPropagation();
    e.preventDefault();

    var file = t.find('#file').files[0];
    var reader = new FileReader();

    reader.onload = function() {
      alert("load succeeded");
    };
    reader.onerror = function(error){
      alert(error);
    };
    reader.readAsText(file);
  },
  // asign a change event into input tag
  'change input' : function(event,template){
      var file = event.target.files[0]; //assuming 1 file only
      if (!file) return;

      var reader = new FileReader(); //create a reader according to HTML5 File API

      reader.onload = function(event){
        var buffer = new Uint8Array(reader.result); // convert to binary
        Meteor.call('saveFile', buffer);
      };

      reader.readAsArrayBuffer(file); //read the file as arraybuffer
  },

});

