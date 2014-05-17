export default Ember.Handlebars.makeBoundHelper(function(input) {
  if(input){
    var showdown = new Showdown.converter();
    return new Handlebars.SafeString(showdown.makeHtml(input));
  }
});