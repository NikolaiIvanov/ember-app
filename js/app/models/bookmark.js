App.Bookmark = DS.Model.extend({
  title: DS.attr("string"),
  url:  DS.attr("string"),
  favorite: DS.attr("boolean"),

  changedFavorite: function() {
    this.get("transaction").commit();
    console.log("Transaction was commited.");
  }.observes("favorite")
  
});
