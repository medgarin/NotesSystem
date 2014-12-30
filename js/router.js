Notes.Router.map(function() {
  this.resource('notes', { path: '/' });
});
Notes.NotaRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('note');
  }
});