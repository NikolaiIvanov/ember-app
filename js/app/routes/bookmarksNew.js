App.BookmarksNewRoute = Ember.Route.extend({
  model: function() {
    return App.Bookmark.createRecord();
  }
});