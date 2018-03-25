var require = meteorInstall({"models":{"foodPlaces.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// models/foodPlaces.js                                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
FoodPlaces = new Mongo.Collection("FoodPlaces");
///////////////////////////////////////////////////////////////////////

}},"server":{"methods.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/methods.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.methods({
  addFoodPlace: function (obj) {
    FoodPlaces.insert({
      nome: obj.nome,
      usuario: this.userId
    });
  },
  removeFoodPlace: function (id) {
    FoodPlaces.remove({
      _id: id,
      usuario: this.userId
    });
  }
});
///////////////////////////////////////////////////////////////////////

},"startup.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/startup.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function () {
  Meteor.publish("FoodPlaces", function () {
    return FoodPlaces.find({
      usuario: this.userId
    });
  });
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("/models/foodPlaces.js");
require("/server/methods.js");
require("/server/startup.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbW9kZWxzL2Zvb2RQbGFjZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvc3RhcnR1cC5qcyJdLCJuYW1lcyI6WyJGb29kUGxhY2VzIiwiTW9uZ28iLCJDb2xsZWN0aW9uIiwiTWV0ZW9yIiwibWV0aG9kcyIsImFkZEZvb2RQbGFjZSIsIm9iaiIsImluc2VydCIsIm5vbWUiLCJ1c3VhcmlvIiwidXNlcklkIiwicmVtb3ZlRm9vZFBsYWNlIiwiaWQiLCJyZW1vdmUiLCJfaWQiLCJzdGFydHVwIiwicHVibGlzaCIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLGFBQWEsSUFBSUMsTUFBTUMsVUFBVixDQUFxQixZQUFyQixDQUFiLEM7Ozs7Ozs7Ozs7O0FDQUFDLE9BQU9DLE9BQVAsQ0FBZTtBQUNYQyxnQkFBYyxVQUFTQyxHQUFULEVBQWE7QUFDdkJOLGVBQVdPLE1BQVgsQ0FBa0I7QUFDZEMsWUFBTUYsSUFBSUUsSUFESTtBQUVkQyxlQUFTLEtBQUtDO0FBRkEsS0FBbEI7QUFJSCxHQU5VO0FBT1hDLG1CQUFpQixVQUFTQyxFQUFULEVBQWE7QUFDMUJaLGVBQVdhLE1BQVgsQ0FBa0I7QUFDZEMsV0FBS0YsRUFEUztBQUVkSCxlQUFTLEtBQUtDO0FBRkEsS0FBbEI7QUFJSDtBQVpVLENBQWYsRTs7Ozs7Ozs7Ozs7QUNBQVAsT0FBT1ksT0FBUCxDQUFlLFlBQVU7QUFFckJaLFNBQU9hLE9BQVAsQ0FBZSxZQUFmLEVBQTZCLFlBQVk7QUFDckMsV0FBT2hCLFdBQVdpQixJQUFYLENBQWdCO0FBQ25CUixlQUFTLEtBQUtDO0FBREssS0FBaEIsQ0FBUDtBQUdILEdBSkQ7QUFNSCxDQVJELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkZvb2RQbGFjZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIkZvb2RQbGFjZXNcIik7XG4iLCJNZXRlb3IubWV0aG9kcyh7XG4gICAgYWRkRm9vZFBsYWNlOiBmdW5jdGlvbihvYmope1xuICAgICAgICBGb29kUGxhY2VzLmluc2VydCh7XG4gICAgICAgICAgICBub21lOiBvYmoubm9tZSxcbiAgICAgICAgICAgIHVzdWFyaW86IHRoaXMudXNlcklkXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVtb3ZlRm9vZFBsYWNlOiBmdW5jdGlvbihpZCkge1xuICAgICAgICBGb29kUGxhY2VzLnJlbW92ZSh7XG4gICAgICAgICAgICBfaWQ6IGlkLFxuICAgICAgICAgICAgdXN1YXJpbzogdGhpcy51c2VySWRcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iLCJNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpe1xuXG4gICAgTWV0ZW9yLnB1Ymxpc2goXCJGb29kUGxhY2VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEZvb2RQbGFjZXMuZmluZCh7XG4gICAgICAgICAgICB1c3VhcmlvOiB0aGlzLnVzZXJJZFxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSk7XG4iXX0=
