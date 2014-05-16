export default Ember.Controller.extend({
  currentUser: null,
  isAuthenticated: Ember.computed.notEmpty('user'),
  login: function(user){
    this.set('currentUser', user)
  }
})