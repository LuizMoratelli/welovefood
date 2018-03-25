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
