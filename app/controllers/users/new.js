export default Ember.ObjectController.extend({
  actions: {
    save: function(){
      var controller = this
      this.get('model').save().then(function(){
        controller.login(this.get('model'))
        controller.transitionToRoute('posts')
      }).catch(function(){
        console.log('faaaaaaiiiiiiilllleeeed');
      });
    }
  }  
});
