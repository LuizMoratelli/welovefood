//Define Helper de um Template
//Helper vira algo no respectivo HTML
Template.listFoodPlaces.helpers({

    foodPlaces: function(){
        return FoodPlaces.find({});
    },

    dateConvert: function(){
        return moment(this.data).format('DD/MM/YYYY HH:mm');
    }
});

Template.listFoodPlaces.events({
    "click button": function(e, template) {
        var foodPlace = this;

        //FoodPlaces.remove({_id: foodPlace._id});
        Meteor.call("removeFoodPlace", foodPlace._id);
    }
});
