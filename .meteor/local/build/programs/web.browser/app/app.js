var require = meteorInstall({"client":{"addFoodPlace":{"template.addFoodPlace.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/addFoodPlace/template.addFoodPlace.js                                                               //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //

Template.__checkName("addFoodPlace");
Template["addFoodPlace"] = new Template("Template.addFoodPlace", (function() {
  var view = this;
  return HTML.Raw('<div class="row">\n        <div class="col-xs-12">\n            <form>\n                <div class="form-group">\n                    <label for="newFoodPlace">Restaurante</label>\n                    <input type="text" name="newFoodPlace" id="newFoodPlace" class="form-control" placeholder="Novo Restaurante">\n                </div>\n                <div class="form-group">\n                    <button name="newFoodPlace" class="btn btn-success btn-block">Novo Restaurante!</button>\n                </div>\n            </form>\n        </div>\n    </div>');
}));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"addFoodPlace.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/addFoodPlace/addFoodPlace.js                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Template.addFoodPlace.events({
  "click button[name=newFoodPlace]": function (e, template) {
    e.preventDefault();
    var input = $("#newFoodPlace");
    var nome = input.val(); //FoodPlaces.insert({nome: nome});

    Meteor.call("newFoodPlace", {
      nome: nome
    });
    input.val("");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"listFoodPlaces":{"template.listFoodPlaces.js":function(){

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
Template.listFoodPlaces.events({
  "click button": function (e, template) {
    var foodPlace = this; //FoodPlaces.remove({_id: foodPlace._id});

    Meteor.call("removeFoodPlace", foodPlace._id);
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
  }, "\n        ", HTML.Raw("<!--Importar Template-->"), "\n        ", Spacebars.include(view.lookupTemplate("addFoodPlace")), "\n        ", Spacebars.include(view.lookupTemplate("listFoodPlaces")), "\n    ") ];
}));
Meteor.startup(Template.body.renderToDocument);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/index.js                                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Meteor.startup(function () {
  Meteor.subscribe("FoodPlaces");
});
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
require("/client/addFoodPlace/template.addFoodPlace.js");
require("/client/listFoodPlaces/template.listFoodPlaces.js");
require("/client/template.index.js");
require("/client/addFoodPlace/addFoodPlace.js");
require("/client/listFoodPlaces/listFoodPlaces.js");
require("/client/index.js");
require("/models/foodPlaces.js");