export default Ember.ObjectController.extend({
  actions: {
    doneEditing: function(post){
      this.transitionToRoute('post', post)
    }
  }
})