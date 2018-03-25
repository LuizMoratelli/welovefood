var require = meteorInstall({"client":{"listFoodPlaces":{"template.listFoodPlaces.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/listFoodPlaces/template.listFoodPlaces.js                                                           //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("listFoodPlaces");
Template["listFoodPlaces"] = new Template("Template.listFoodPlaces", (function() {
  var view = this;
  return HTML.DIV({
    class: "row"
  }, "\n        ", HTML.DIV({
    class: "col-xs-12"
  }, "\n            ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("foodPlaces"));
  }, function() {
    return [ "\n            ", HTML.DIV({
      class: "row"
    }, "\n                ", HTML.DIV({
      class: "col-xs-11"
    }, "\n                    Comer em: ", Blaze.View("lookup:nome", function() {
      return Spacebars.mustache(view.lookup("nome"));
    }), "\n                "), "\n                ", HTML.DIV({
      class: "col-xs-1"
    }, "\n                    ", HTML.BUTTON({
      class: "btn btn-danger"
    }, "Excluir"), "\n                "), "\n            "), "\n            ", HTML.HR(), "\n            " ];
  }), "\n        "), "\n    ");
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"listFoodPlaces.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/listFoodPlaces/listFoodPlaces.js                                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
//Define Helper de um Template
//Helper vira algo no respectivo HTML
Template.listFoodPlaces.helpers({
  foodPlaces: function () {
    return FoodPlaces.find({});
  },
  dateConvert: function () {
    return moment(this.data).format('DD/MM/YYYY HH:mm');
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.index.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/template.index.js                                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw('<header class="container">\n        <nav class="navbar navbar-default">\n            <div class="navbar-header">\n                <a href="#" class="navbar-brand">We Love Food!</a>\n            </div>\n            <div class="navbar-collapse collapse">\n                <ul class="nav navbar-nav navbar-right">\n\n                </ul>\n            </div>\n        </nav>\n    </header>\n    '), HTML.MAIN({
    class: "container"
  }, "\n        ", HTML.Raw("<!--Importar Template-->"), "\n        ", Spacebars.include(view.lookupTemplate("listFoodPlaces")), "\n    ") ];
}));
Meteor.startup(Template.body.renderToDocument);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"models":{"foodPlaces.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// models/foodPlaces.js                                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
FoodPlaces = new Mongo.Collection("FoodPlaces");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("/client/listFoodPlaces/template.listFoodPlaces.js");
require("/client/template.index.js");
require("/client/listFoodPlaces/listFoodPlaces.js");
require("/models/foodPlaces.js");