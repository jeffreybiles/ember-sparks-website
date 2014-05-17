export default Ember.ObjectController.extend({
  actions: {
    doneEditing: function(){
      var controller = this
      var post = this.get('model')
      post.save().then(function(){
        controller.transitionToRoute('post', post)
      });
    }
  }
})