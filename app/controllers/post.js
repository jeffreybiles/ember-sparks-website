export default Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    doneEditing: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },

    destroy: function(){
      this.get('model').destroyRecord()
      this.transitionToRoute('posts')
    }
  }
});