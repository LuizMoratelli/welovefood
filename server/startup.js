Meteor.startup(function(){

    Meteor.publish("FoodPlaces", function () {
        return FoodPlaces.find({});
    });

});
