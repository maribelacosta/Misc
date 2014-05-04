window.Mics = Backbone.View.extend({
  el: ".content",
  events: {
    "keyup #input":  "contentChanged"
  },
  initialize: function() {
    _.bindAll(this, 'contentChanged');
    this.inputContent = this.$('#input');
  },
  contentChanged: function(e) {
    var input = this.inputContent;
    $.get('http://rest-service.guides.spring.io/greeting?value=' + input, function(data) {
      $("#target").html(data.content);
      // if you use local storage save 
      //this.model.save({content: data.content });

      // if you send request to server is prob. good idea to set the var and save at the end, in a blur event or in some sync. maintenance timer.
      // this.model.set({content: data.content});
    });
    // if you use local storage save 
    //this.model.save({content: input.val()});

    // if you send request to server is prob. good idea to set the var and save at the end, in a blur event or in some sync. maintenance timer.
    // this.model.set({content: input.val()});
  }
});

var item = new Mics();

