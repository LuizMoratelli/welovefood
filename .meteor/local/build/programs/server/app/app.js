var require = meteorInstall({"models":{"foodPlaces.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// models/foodPlaces.js                                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
FoodPlaces = new Mongo.Collection("FoodPlaces");
///////////////////////////////////////////////////////////////////////

}},"server":{"startup.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/startup.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function () {
  Meteor.publish("FoodPlaces", function () {
    return FoodPlaces.find({});
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
require("/server/startup.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvbW9kZWxzL2Zvb2RQbGFjZXMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9zdGFydHVwLmpzIl0sIm5hbWVzIjpbIkZvb2RQbGFjZXMiLCJNb25nbyIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJzdGFydHVwIiwicHVibGlzaCIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUFBLGFBQWEsSUFBSUMsTUFBTUMsVUFBVixDQUFxQixZQUFyQixDQUFiLEM7Ozs7Ozs7Ozs7O0FDQUFDLE9BQU9DLE9BQVAsQ0FBZSxZQUFVO0FBRXJCRCxTQUFPRSxPQUFQLENBQWUsWUFBZixFQUE2QixZQUFZO0FBQ3JDLFdBQU9MLFdBQVdNLElBQVgsQ0FBZ0IsRUFBaEIsQ0FBUDtBQUNILEdBRkQ7QUFJSCxDQU5ELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIkZvb2RQbGFjZXMgPSBuZXcgTW9uZ28uQ29sbGVjdGlvbihcIkZvb2RQbGFjZXNcIik7XG4iLCJNZXRlb3Iuc3RhcnR1cChmdW5jdGlvbigpe1xuXG4gICAgTWV0ZW9yLnB1Ymxpc2goXCJGb29kUGxhY2VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEZvb2RQbGFjZXMuZmluZCh7fSk7XG4gICAgfSk7XG5cbn0pO1xuIl19
