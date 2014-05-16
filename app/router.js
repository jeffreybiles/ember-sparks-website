var Router = Ember.Router.extend();

Router.map(function() {
  this.resource('session')

  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });

  this.resource('sessions', function() {
    this.route('new');
  });
  this.resource('users', function() {
    this.route('new');
  });
});

export default Router;
