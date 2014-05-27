export default Ember.Component.extend({
  actions: {
    doneEditing: function(){
      var component = this
      var post = this.get('post')
      post.save().then(function(){
        component.sendAction('afterSave', post)
      })
    }
  }
})