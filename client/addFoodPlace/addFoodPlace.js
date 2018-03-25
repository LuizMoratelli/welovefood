Template.addFoodPlace.events({
    "click button[name=newFoodPlace]": function(e, template){
        e.preventDefault();

        var input = $("#newFoodPlace");
        var nome = input.val();

        //FoodPlaces.insert({nome: nome});
        Meteor.call("newFoodPlace", {nome: nome});
        input.val("");
    }
});
