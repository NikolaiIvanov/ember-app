App.BookmarksController = Ember.ArrayController.extend({
  favorites: function() {
    return this.filterProperty("favorite",true)
  }.property("@each.favorite"),

  regular: function() {
    return this.filterProperty("favorite",false)
  }.property("@each.favorite")
});