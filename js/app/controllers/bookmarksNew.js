App.BookmarksNewController = Ember.ObjectController.extend({
  save: function() {
    this.get("model.transaction").commit();
    this.get("target").transitionTo("bookmarks");
  }
});