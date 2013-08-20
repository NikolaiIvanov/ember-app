App.Router.map(function() {
  this.route("home");
  this.resource("bookmarks", function() {
    this.route("new");
  });
});