export default Ember.ObjectController.extend({
  actions: {
    save: function(){
      this.get('model').save().then(function(){
        console.log('success');
      }).catch(function(){
        console.log('faaaaaaiiiiiiilllleeeed');
      });
    }
  }  
});
