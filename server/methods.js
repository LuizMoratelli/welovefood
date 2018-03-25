Meteor.methods({
    addFoodPlace: function(obj){
        FoodPlaces.insert({nome> obj.nome});
    },
    removeFoodPlace: function(id) {
        FoodPlace.remove({_id: id});
    }
});
