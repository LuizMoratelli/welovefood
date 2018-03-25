Meteor.methods({
    addFoodPlace: function(obj){
        FoodPlaces.insert({
            nome: obj.nome,
            usuario: this.userId
        });
    },
    removeFoodPlace: function(id) {
        FoodPlaces.remove({
            _id: id,
            usuario: this.userId
        });
    }
});
