Template.addFoodPlace.events({
    "click button[name=newFoodPlace]": function(e, template){
        e.preventDefault();

        var input = $("#newFoodPlace");
        var nome = input.val();

        //FoodPlaces.insert({nome: nome});
        Meteor.call("addFoodPlace", {nome: nome});
        input.val("");
    }
});
