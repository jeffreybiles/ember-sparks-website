export default Ember.Component.extend({
  actions: {
    saveRecord: function(){
      var _this = this;
      var post = this.get('post')
      post.save().then(function(){
        _this.sendAction('action', post)
      })
    } 
  }
})